<template>

    
    
<b-col cols="6">
  <b-card v-bind:title="cat.title">

    <b-row>
    <Card  v-for="(card, index) in cat.cards" v-bind:key="index" v-bind:title="card.title" />
    </b-row>

  </b-card>
</b-col>


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