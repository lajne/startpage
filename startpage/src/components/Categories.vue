<template>

  <b-card-group deck>
    
    <b-card :title="title">
      <!-- <Card description="Human Resources" />
      <Card description="Internet Technology" /> -->
      <Card v-for="(catarina, index) in cat" v-bind:key = "index" :catData="catarina" :title="catarina.title" :description="catarina.description"/>
    </b-card>
    
  </b-card-group>

</template>


<script>
import Card from './Card.vue'

export default {
  // name of js file (categories.js)
  name: 'categories',
  components: {
    Card
  },
  props: {
    title: String,
    cat: Object
  },
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>