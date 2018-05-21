<template>
  <div id="app">

    <NavBar />
    <SearchBar />

    <!-- <b-card-group deck> -->
    <Categories v-for="(category, index) in categories" v-bind:key="index" v-bind:cat="category" v-bind:title="category.title" />
    <!-- </b-card-group> -->

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Categories from './components/Categories.vue'
// import GetStartDef from './components/GetStartDef.vue'
import JSONObject from './components/data2.JSON'

export default {
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories,
    JSONObject
  },
  created: function () {
    this.fetchData();
  },
  data: function() {
     return {
       item: [ {'item1': 'item11'}, {'item1': 'item22'}],
       categories: []
     }
  },
  methods: {
    fetchData: function () {
      let self = this;
      setTimeout( () => {
        let loadedData = JSONObject;
        self.categories = loadedData.Categories;
        console.log("Props of GetStartDef: ", self.categories)
      }, 500)
    }
  },
}
</script>

<style>
#app {
  background-color: #f5f5f5;
  display: table;
  width: 100%;
  padding: 70px 25px;
}
</style>
