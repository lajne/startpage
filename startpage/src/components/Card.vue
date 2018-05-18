<template>

  <div id="cardStyle">
    <a href="#">
      <b-card :title="title">
        <human-handsup-icon />
        <monitor-icon />
        <p class="card-text"> {{ description }} </p>
      </b-card>      
    </a>
  </div>

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
    col: 6,
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
</style>