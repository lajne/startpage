<template>


<b-col v-bind:class="colStyle">
  <div id="cardStyle">
    <a href="#">
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
    iconURL: String,
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
/* .col-centered {
    display: inline-block;
    margin:auto;
    
} */
</style>