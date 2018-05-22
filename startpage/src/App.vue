<template>
  <div id="app">
    <NavBar />
    <SearchBar />
    <div class="container-fluid">
      <b-row>
        <Categories v-for="(category, index) in categories" 
                      v-bind:key="index" 
                      v-bind:cat="category" 
                      v-bind:title="category.title" 
                      v-bind:description="category.description" />
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
       categories: []
     }
  },
  methods: {
    getStartDef: function () {
      let self = this;
      setTimeout( () => {
        self.categories = loadedData.Categories;
      }, 500)
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
