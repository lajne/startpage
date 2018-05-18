<template>
  <div id="app">

    <NavBar />
    <SearchBar />   
    <b-card-group deck>
      <Categories title="Category 1"/>
      <Categories title="Category 2"/>
      <Categories title="Category 3"/>
      <GetStartDef />
    </b-card-group>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
// has a child - Card.vue
import Categories from './components/Categories.vue'
import GetStartDef from './components/getStartDef.vue'
import './components/data.js'

export default {
  // name of js file (app.js)
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories,
    GetStartDef
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
