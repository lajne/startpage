<template>
  <div id="app">

    <NavBar />
    <SearchBar />    
    <Categories />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Categories from './components/Categories.vue'

export default {
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
