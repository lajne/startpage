<template>

  <b-card-group deck>
    
    <b-card :title="title">
      <!-- <Card description="Human Resources" />
      <Card description="Internet Technology" /> -->
      <Card v-for="(card, index) in catData.cards" :key = "index" :title="card.title" :description="card.description"/>
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
    catData: Array
  },
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>