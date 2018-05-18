<template>
  <div id="app">

    <NavBar />
    <SearchBar />


    <Categories v-for="(category, index) in categories" v-bind:key="index" v-bind:cat="category" v-bind:title="category.title" />


<!--      
    <b-container fluid>
      <div class="row" v-for="section in sections" v-bind:key="section">
        <div class="col-sm-6" v-for="(Category, index) in Categories" v-bind:key="index">
          <Categories v-for="(data, index) in categories" v-bind:key="index">{{ data.title }}/>
        </div>
      </div>
    </b-container> -->

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
// has a child - Card.vue
import Categories from './components/Categories.vue'
import GetStartDef from './components/GetStartDef.vue'
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
        // let loadedData = window["myData"];
        let loadedData = JSONObject;
        //console.log("Fick datan: ", JSON.stringify(loadedData, null, 2));
        // self.categories = loadedData.cat;
        self.categories = loadedData.Categories;
        console.log("Props of GetStartDef: ", self.categories)
      }, 500)
    }
  },
}
</script>

<style>
#app {
  background-color: wheat; 
  display: table;
  width: 100%;
  padding: 70px 25px;
}

</style>
