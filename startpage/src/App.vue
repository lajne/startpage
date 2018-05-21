<template>
  <div id="app">

    <NavBar />
    <SearchBar />

    <b-card-group deck >
      <Categories v-for="(category, index) in categories"
                    :key="index"
                    :cat="category"
                    :title="category.title"
                    class="col-6"
                    :description="category.description"/>
    </b-card-group>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Categories from './components/Categories.vue'
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
       categories: []
     }
  },
  methods: {
    fetchData: function () {
      let self = this;
      setTimeout( () => {
        let loadedData = JSONObject;
        self.categories = loadedData.Categories;
      }, 500)
    }
  },
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
