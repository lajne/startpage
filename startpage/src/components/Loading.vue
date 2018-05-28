<template>
  <div id="loader">
    <pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
import "../assets/_variableOverride.scss";

export default {
  components: {
    PacmanLoader
  },
  data: () => ({
    color: $accent,
  }),
}
</script>

<style scoped>
#loader{
  margin: 200px auto;
  width: 100px;
  height: 100px;
}
</style>
