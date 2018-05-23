<template>
<b-col class="col-12 col-sm-12 col-lg-6">
  <b-card class="mt-4 animated slideInUp" id="b-card">
    <div id="categoryHeaderStyle" slott="header" v-b-tooltip.html.top v-bind:title="description">{{cat.title}}</div>
    <b-row class="justify-content-between">
      <Card v-for="(card, index) in filteredCards" 
            v-bind:key="index" 
            v-bind:title="card.title" 
            v-bind:col="card.col" 
            v-bind:colStyle="card.colStyle"
            v-bind:description="card.description" 
            v-bind:styles="card.style" />
    </b-row>
  </b-card>
</b-col>
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
    searchTerm: String,
  },
  computed: {
    filteredCards: function () {
      console.log("searchTerM:  ", this.searchTerm);
      if(this.cat.cards.tags == null) {
        console.log("tag is null");
        console.log("tag:  ", this.cat.cards.tags);
      }
      // for(let i = 0;i < myTags.length; i++) {
      //   console.log("tags:  ", myTags[i]);
      // }
      if(this.cat.title.toLowerCase().match(this.searchTerm.toLowerCase())){
        return this.cat.cards;
      } 
      // if(this.cat.cards.tags.toLowerCase().match(this.searchTerm.toLowerCase())) {
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