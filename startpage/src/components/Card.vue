<template>


<b-col v-bind:class="colStyle">
  <div id="cardStyle">
    <a href="#" v-b-tooltip.html.bottom v-bind:title="description">
      <b-card class="mt-3">
        <!-- <human-handsup-icon /> -->
        <monitor-icon />
        <p class="card-text">{{ title }}</p>
      </b-card>      
    </a>
  </div>
</b-col>


</template>

<script>

export default {
  // name of js file (card.js)
  name: 'Card',
  components: {
  },
  props: {
    title: String,
    description: String,
    URL: String,
    imageUrl: String,
    col: Number,
    colStyle: String,
    styles: [
      {
        backgroundColor: String,
        color: String,
      }
    ]
   
  }
}
</script>

<style scoped>
#cardStyle {
  /* max-width: 300px; */
  text-align: center;
}
.dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}
/* .col-centered {
    display: inline-block;
    margin:auto;
    
} */
</style>