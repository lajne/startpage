<template>

   
  <b-card-group deck>
    
    <b-card v-bind:title="cat.title">
      <Card  v-for="(card, index) in cat.cards" v-bind:key="index" v-bind:title="card.title" />
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