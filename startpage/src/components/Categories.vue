<template>
   

<!-- <b-col class="col-12 col-sm-12 col-lg-6"> -->
  <b-card class="mt-2 animated slideInUp" id="b-card">
    <div id="categoryHeaderStyle" slott="header" v-b-tooltip.html.top v-bind:title="description">{{cat.title}}</div>
    <b-row>
      <Card v-for="(card, index) in cat.cards" 
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
    title: String,
    description: String,
    cat: Object,
    searchTerm: String
  },
  computed: {

    // filteredCards: function () {
    //   // console.log("In the fileredcards function.");

    //   let allCards = this.cat.cards;
    //   let catTitle = this.cat.title;
    //   console.log(catTitle);

    //   allCards.forEach(element => {
    //     let allTags = element.tags;
    //     // console.log("in the allCards foreach", allCards);
    //     console.log("all the cards TAGS", allTags);

    //   });
        
    //     if (catTitle.toLowerCase().match(this.searchTerm.toLowerCase())){
    //       return allCards;
    //     } else {
    //       return allCards.filter((card) => {
    //         return card.title.toLowerCase().match(this.searchTerm.toLowerCase());
    //       });
    //     }

      
    // }
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