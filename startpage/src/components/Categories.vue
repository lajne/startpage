<template>
  <b-card class="mt-2 animated fadeIn" id="b-card">
    <div 
      id="categoryHeaderStyle" 
      slott="header" 
      v-b-tooltip.html.top 
      :title="description"
    >
      {{cat.title}}
    </div>
    <b-row>
      <Card  
        class="animated pulse" 
        v-for="(card, index) in filteredCards" 
          :key="index" 
          :title="card.title" 
          :col="card.col" 
          :colStyle="card.colStyle"
          :description="card.description" 
          :shortDescription="card.shortDescription"
          :imageUrl="card.imageUrl"
          :styles="card.style" 
        />
    </b-row>
  </b-card>
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
      let self = this;
      let myCards = self.cat.cards;
      let tag;
      let filteredArray = [];

      if(self.cat.title.toLowerCase().match(self.searchTerm.toLowerCase())){
        return self.cat.cards;
      } 
      else {
        myCards.forEach(card => {
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