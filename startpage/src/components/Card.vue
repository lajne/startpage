<template>
<b-col v-bind:class="colStyle">
  <div id="cardStyle">
    <a href="#" v-b-tooltip.html.bottom v-bind:title="description">
      <b-card
        class="mt-3" 
        :style="styles"
        text-variant="white">
        <!-- <monitor-icon />
        <headphones-icon /> -->
        <span v-if="showFunction"><headphones-icon /></span>
        <span v-else-if="headphonesIcon"></span>
        <p class="white-text">{{ title }}</p>
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
  },
  data() {
    return {
      showFunction: false,
      headphonesIcon: "hello!"
      
    }
  }

}
</script>

<style scoped>
#cardStyle {
  text-align: center;
}
</style>