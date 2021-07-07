<template>
  <div id="loader">
    <pacman-loader :color="color"></pacman-loader>
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
  components: {
    PacmanLoader
  },
  data: () => ({
    color: 'grey'
  }),
}
</script>

<style lang="scss" scoped>

#loader{
  margin: 200px auto;
  width: 100px;
  height: 100px;
}
</style>
