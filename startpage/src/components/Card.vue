<template>
<b-col v-bind:class="colStyle">
  <div>
    <a href="#" v-b-tooltip.html.bottom v-bind:title="description">

      <b-card
        class="mt-2" 
        v-bind:style="styles"
        text-variant="white">
        <!-- <div class="card-body"> -->
          <blockquote class="mb-2">
            <p class="card-title">{{ title }}</p>
            <footer class="white-text">{{ shortDescription }}</footer>
          </blockquote>
        <!-- </div> -->
      </b-card>      

    </a>
  </div>
</b-col>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    shortDescription: String,
    description: String,
    URL: String,
    imageUrl: String,
    col: Number,
    colStyle: String,
    styles: {}
  }
}
</script>

<style scoped>
.card-title {
  font-weight: 400;
}
footer {
  font-style: italic;
  font-size: 80%;
  font-weight: 300;
}
</style>