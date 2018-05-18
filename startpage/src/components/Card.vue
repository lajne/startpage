<template>

  <div id="card">
    <a href="#">
      <b-card :title="title">
        <p class="card-text"> {{ description }} </p>
        <!-- <b-button href="#" variant="primary">Card Link</b-button> -->
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
#card {
  /* max-width: 300px; */
  text-align: center;
}
</style>