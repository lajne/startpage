<template>
  <div id="app">

    <NavBar />
    <SearchBar />   
    <b-card-group deck>
      <Categories v-for="(cat, index) in categories" :key = "index" :catData="cat" :title="cat.title"/>
    </b-card-group>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
// has a child - Card.vue
import Categories from './components/Categories.vue'
import JSONObject from './data2.JSON'

export default {
  // name of js file (app.js)
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories,
  },
  created: function () {
    this.fetchData();
  },
  data: function () {
    return {
      categories: []
    }
  },
  methods: {
    fetchData: function () {
      let self = this;
      setTimeout( () => {
        let loadedData = JSONObject;
        //console.log("Fick datan: ", JSON.stringify(loadedData, null, 2));
        self.categories = loadedData.Categories;
        //console.log("Props of getStartDef: ", self.categories)
      }, 500)
    },
  }
}
</script>

<style>
#app {
  background-color: white; 
  display: table;
  width: 100%;
  padding: 70px 25px;
}

</style>
