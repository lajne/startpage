<template>

<b-col class="col-12 col-sm-12 col-lg-6">

  <b-card class="mt-4">
    <div id="categoryHeaderStyle" slott="header" v-b-tooltip.html.top v-bind:title="description">{{cat.title}}</div>
    <!-- can change this rows class to adjust the cards... justify-content-md-center for example -->
    <b-row class="justify-content-between">
      <Card v-for="(card, index) in cat.cards" 
              v-bind:key="index" 
              v-bind:title="card.title" 
              v-bind:col="card.col" 
              v-bind:colStyle="card.colStyle"
              v-bind:description="card.description" />
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
    description: String,
    cat: Object
  }
}
</script>





<style scoped>

.card-image {
  text-align: center;
}
#categoryHeaderStyle {
  text-align: center;
  font-weight: 500;
  font-size: larger;
}

</style>