<template>
  <div id="app">

    <NavBar />
    <SearchBar />    
    <Categories title="Category 1"/>
    <Categories title="Category 2"/>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
// has a child - Card.vue
import Categories from './components/Categories.vue'

export default {
  // name of js file (app.js)
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    Categories
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
