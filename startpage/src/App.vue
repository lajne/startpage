<template>
  <div id="app">
    <NavBar />
    <SearchBar  v-model="searchTerm" />
    <div class="container-fluid">
      <b-row>
        <div class="card-columns">
        <Categories v-bind:searchTerm="searchTerm"
                    v-if="filter.length > 0"
                      v-for="(cat, index) in filter" 
                        v-bind:key="index" 
                        v-bind:cat="cat" 
                        v-bind:title="cat.title" 
                        v-bind:description="cat.description"/>
      </div>
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
  },
  data: function() {
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
      }, 500)
    },
  },
  computed: {
    filter: function () {
      let self = this;
      let filteredCategories = [];

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
          for(let tag of link.tags) {
            if(tag.toLowerCase().match(this.searchTerm.toLowerCase())
            && !filteredCategories.includes(cat)){
              filteredCategories.push(cat);
            }
          }
        }
      }
      return filteredCategories;
    }

    // filter: function () {

    //   let self = this;
    //   let filteredCategories = [];

      // let allCategories = self.categories;
      // allCategories.forEach(element => {
      //   console.log("in allCategories foreach", element);
      //   let allCards = element.cards;
      //   allCards.forEach(element => {
      //     console.log("in the allCards foreach", allCards);
      //     let allTags = element.tags;
      //     console.log("all the cards TAGS", element.tags);
      //   });
      // });


    //   if(this.searchTerm === "") {
    //     console.log("in the filter function", this.categories);
    //     return this.categories;
    //   }

    //   for(let cat of self.categories) {
    //     if(cat.title.toLowerCase().match(this.searchTerm.toLowerCase()) 
    //       && !filteredCategories.includes(cat)) {
    //         filteredCategories.push(cat);
    //     }
    //     for(let link of cat.cards) {
    //       if(link.title.toLowerCase().match(this.searchTerm.toLowerCase()) 
    //         && !filteredCategories.includes(cat)) {
    //           filteredCategories.push(cat);
    //       }
    //     }
        
    //   }

    //   return filteredCategories;



    // }
  }
}
</script>

<style lang="scss">
@import "assets/_custom.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~mdbootstrap/css/mdb.css';

#app {
  background-color: #f5f5f5;
  display: table;
  width: 100%;
  height: 100vh;
  padding: 70px 25px;
}
</style>


