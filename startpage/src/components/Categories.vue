<template>
   

<!-- <b-col class="col-12 col-sm-12 col-lg-6"> -->
  <b-card class="mt-2 animated slideInUp" id="b-card">
    <div id="categoryHeaderStyle" slott="header" v-b-tooltip.html.top v-bind:title="description">{{cat.title}}</div>
    <b-row class="justify-content-between">
      <Card v-for="(card, index) in filteredCards" 
            v-bind:key="index" 
            v-bind:title="card.title" 
            v-bind:col="card.col" 
            v-bind:colStyle="card.colStyle"
            v-bind:description="card.description" 
            v-bind:shortDescription="card.shortDescription"
            v-bind:styles="card.style" />

    </b-row>
  </b-card>
<!-- </b-col> -->



</template>

<script>
import Card from './Card.vue'
export default {
  name: 'categories',
  components: {
    Card
  },
  props: {
    description: String,
    cat: Object,
    searchTerm: String
  },
  computed: {
    filteredCards: function () {
      if(this.cat.title.toLowerCase().match(this.searchTerm.toLowerCase())){
        return this.cat.cards;
      } 
      // else if(this.cat.tags.toLowerCase().match(this.searchTerm.toLowerCase())) {
      //   return this.cat.cards.filter((card) => {
      //     return card.tags.toLowerCase().match(this.searchTerm.toLowerCase());
      //   });
      // }
      else {
        return this.cat.cards.filter((card) => {
          return card.title.toLowerCase().match(this.searchTerm.toLowerCase());
        });
      }
    }
  }
}
</script>

<style scoped>
.card-image {
  text-align: center;
}
#categoryHeaderStyle {
  text-align: left;
  font-weight: 400;
  font-size:xx-large;
}
</style>