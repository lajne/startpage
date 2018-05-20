<template>

  <div id="cardStyle">
    <a href="#">
      <b-card :style="styles" :class="col">
        <!-- <human-handsup-icon /> -->
        <monitor-icon />
        <p class="card-text"> {{ title }} </p>
      </b-card>      
    </a>
  </div>

</template>

<script>

export default {
  // name of js file (card.js)
  name: 'Card',
  props: {
    title: String,
    description: String,
    URL: String,
    iconURL: String,
    col: String,
    styles: {}
  }
}
</script>

<style scoped>
#cardStyle {
  /* max-width: 300px; */
  text-align: center;
}
</style>