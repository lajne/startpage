<template>
<b-col v-bind:class="colStyle">
  <div id="cardStyle">
    <a href="#" v-b-tooltip.html.bottom v-bind:title="description">
      <b-card
        class="mt-2" 
        v-bind:style="styles"
        text-variant="white">
        <p class="white-text card-text"><monitor-icon />&nbsp;&nbsp;&nbsp;{{ title }}</p>
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
#cardStyle {
  text-align: center;
}
</style>