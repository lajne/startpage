<template>
  <div id="app">
    <img src="./assets/logo.png">
    <NavBar />
    <GetStartDef />
  </div>
</template>

<script>
import GetStartDef from './components/GetStartDef.vue'
import NavBar from './components/NavBar.vue'
import './components/data.js'



export default {
  name: 'app',
  components: {
    GetStartDef,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
background-color: lightgrey;
display: table;
width: 100%;
padding: 70px 25px;
}
</style>
