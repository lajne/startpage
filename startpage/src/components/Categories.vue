<template>

  <div >   
    <!-- Det finns popover och tooltip. De fungerar lite olika.. 
    Vill vi att det ska triggas enbart på category-texten får vi testa lite till. -->
    <b-card-group v-b-popover.hover.top="description"
                  :title="title" >
      <b-card :title="cat.title" id="cat">
          <Card v-for="(card, index) in cat.cards"
                :key="index"
                :title="card.title"
                :col="card.col"
                :styles="card.style"
                :description="card.description" />
      </b-card>    
    </b-card-group>
  </div>      

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
  },
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>