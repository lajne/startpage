<template>
<b-col class="col-12 col-sm-12 col-lg-6">
    <!-- animated slideInUp -->
    <b-card class="mt-4 animated fadeIn" id="b-card">
      <div id="categoryHeaderStyle" slott="header" v-b-tooltip.html.top v-bind:title="description">{{cat.title}}</div>
      <b-row class="justify-content-between">
        <Card  class="animated pulse" v-for="(card, index) in filteredCards" 
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
    description: String,
    cat: Object,
    searchTerm: String,
  },
  computed: {
    filteredCards: function () {
      let self = this;
      let myCard = self.cat.cards;
      let tag;
      let filteredArray = [];

      if(this.cat.title.toLowerCase().match(this.searchTerm.toLowerCase())){
        return this.cat.cards;
      } 
      else {
        myCard.forEach(card => {
          if(card.title.toLowerCase().match(self.searchTerm.toLowerCase()) && !filteredArray.includes(card)) {
            filteredArray.push(card);
          }
          for(let i = 0; i < card.tags.length; i++) {
            tag = card.tags[i];
            if( tag.toLowerCase().match(self.searchTerm.toLowerCase()) && !filteredArray.includes(card) ){
              filteredArray.push(card);
            }
          }
        });
      return filteredArray;
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