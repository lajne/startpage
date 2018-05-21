<template>

<b-col class="col-xs-6 col-sm-12 col-md-6 col-lg-6 col-xl-6">

  <b-card v-bind:title="cat.title" class="mt-4">
    
    <!-- can change this rows class to adjust the cards... justify-content-md-center for example -->
    <b-row class="justify-content-between">
      <Card v-for="(card, index) in cat.cards" v-bind:key="index" v-bind:title="card.title" v-bind:col="card.col" v-bind:colStyle="card.colStyle" />
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
  }
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>