<template>
  <div id="app">
    <NavBar name="Startpage"/>
    <SearchBar v-model="searchTerm" />
    <Loading v-if="isLoading" />
      <div v-else class="container-fluid">
      <b-row>
        <div class="card-columns">
          <Categories 
            :searchTerm="searchTerm"
            v-if="filter.length > 0"
              v-for="(cat, index) in filter" 
                :key="index" 
                :cat="cat" 
                :title="cat.title" 
                :description="cat.description"
          />
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Categories from './components/Categories.vue'
import Loading from './components/Loading.vue'
import loadedData from './data.JSON'
export default {
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories,
    Loading
  },
  created: function () {
    this.getStartDef();
  },
  data: () => ({
      categories: [],
      searchTerm: "",
      isLoading: false
  }),
  methods: {
    getStartDef: function () {
      let self = this;
      this.isLoading = true;
      setTimeout( () => {
        self.categories = loadedData.Categories;
        this.isLoading = false;
      }, 6000)
    },
  },
  computed: {
    filter: function () {
      let self = this;
      let filteredCategoriesByTitle = [];
      let filteredCategoriesByTags = [];
      if(self.searchTerm === "") {
        return self.categories;
      }
      for(let cat of self.categories) {
        if(cat.title.toLowerCase().match(self.searchTerm.toLowerCase()) 
        && !filteredCategoriesByTitle.includes(cat)) {
          filteredCategoriesByTitle.push(cat);
        }
        for(let link of cat.cards) {
          if(
            link.title.toLowerCase().match(self.searchTerm.toLowerCase()) 
            && !filteredCategoriesByTitle.includes(cat)
            && !filteredCategoriesByTags.includes(cat)
          ){
            filteredCategoriesByTitle.push(cat)
          }
          for(let tag of link.tags) {
            if(
              tag.toLowerCase().match(self.searchTerm.toLowerCase())
              && !filteredCategoriesByTitle.includes(cat) 
              && !filteredCategoriesByTags.includes(cat)
            ){
              filteredCategoriesByTags.push(cat);
            }
          }
        }
      }
      return filteredCategoriesByTitle.concat(filteredCategoriesByTags);
    }
  }
}
</script>

<style lang="scss">
@import "assets/_variableOverride.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "assets/_customOverride.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~mdbootstrap/css/mdb.css';

#app {
  background-color: #f5f5f5;
  display: table;
  width: 100%;
  height: 100vh;
  padding: 70px 25px;
}
.card-columns {
  width: 100%;
}
</style>