<template>
  <div id="loader">
    <pacman-loader></pacman-loader>
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import "../assets/_variableOverride.scss";

export default {
  components: {
    PacmanLoader
  }
}
</script>

<style scoped>
#loader{
  margin: 200px auto;
  width: 100px;
  height: 100px;
}
</style>
