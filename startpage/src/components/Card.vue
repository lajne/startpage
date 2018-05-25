<template>
<b-col :class="colStyle">
  <div>
    <a href="#" v-b-tooltip.html.bottom :title="description">
      <b-card
        class="mt-1" 
        :style="styles"
        text-variant="white">
          <div id="testing">
              <monitor-icon />
          </div>
          <blockquote class="mb-2">
            <p class="card-title">{{ title }}</p>
            <footer class="white-text">{{ shortDescription }}</footer>
          </blockquote>
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
#testing {
   display:inline-block;
}
</style>