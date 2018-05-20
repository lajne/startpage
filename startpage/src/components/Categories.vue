<template>

  <b-card-group deck>
    
    <b-card :title="title">
      <!-- <Card description="Human Resources" />
      <Card description="Internet Technology" /> -->
      <!-- <Card v-for="(catarina, index) in cat" v-bind:key = "index" :catData="catarina" :title="catarina.title" :description="catarina.description"/> -->
      <!-- <b-card-group deck> -->
        <Card v-for="(card, index) in catData.cards" v-bind:key = "index" :title="card.title" :description="card.description" />
        <!-- v-for="(cat, index) in categories" v-bind:key = "index" :catData="cat" -->
      <!-- </b-card-group> -->
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
    catData: Object
  },
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>