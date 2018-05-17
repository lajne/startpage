<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar title="Startpage" />
    
      <Card title="Cardy" description="This is my first card, it has a description." />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Card from './components/Card.vue'


export default {
  name: 'app',
  components: {
    // HelloWorld
    NavBar,
    Card,
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
