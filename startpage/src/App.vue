<template>
  <div id="app">
    <NavBar />
    <SearchBar  v-model="searchTerm" />
    <div class="container-fluid">
      <!-- <p> {{ filteredCategories }} {{ filteredLinks }} </p> -->
      <b-row>
        <Categories v-bind:searchTerm="searchTerm"
                    v-for="(cat, index) in filter" 
                      v-bind:key="index" 
                      v-bind:cat="cat" 
                      v-bind:title="cat.title" 
                      v-bind:description="cat.description"/>
      </b-row>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Categories from './components/Categories.vue'
import loadedData from './data.JSON'
export default {
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories,
  },
  created: function () {
    this.getStartDef();
    console.log("created:  ");
  },
  data: function() {
    console.log("data:  ");
     return {
       categories: [],
       searchTerm: ""
     }
  },
  methods: {
    getStartDef: function () {
      let self = this;
      setTimeout( () => {
        self.categories = loadedData.Categories;
        console.log("in methods:  ", self.categories);
      }, 500)
    },
  },
  computed: {
    filter: function () {
      let self = this;
      let filteredCategories = [];
      console.log("computed:  ", self.categories);

      if(this.searchTerm === "") {
        return this.categories;
      }
      for(let cat of self.categories) {
        if(cat.title.toLowerCase().match(this.searchTerm.toLowerCase()) 
        && !filteredCategories.includes(cat)) {
          filteredCategories.push(cat);
        }
        for(let link of cat.cards) {
          if(link.title.toLowerCase().match(this.searchTerm.toLowerCase()) 
          && !filteredCategories.includes(cat)) {
            filteredCategories.push(cat)
          }
        }
      }
      return filteredCategories;
    }
  }
}
</script>

<style>
#app {
  background-color: #f5f5f5;
  display: table;
  width: 100%;
  height: 100vh;
  padding: 70px 25px;
}
</style>


