<template>
<!-- <b-col :class="colStyle"> -->
<b-col :class="'col-sm-' + col">
  <div>
    <a href="#" v-b-tooltip.html.bottom :title="description">
      <b-card class="mt-1" :style="styles" text-variant="white">
        <div class="card-body px-0 py-0">
          <blockquote class="mb-2">          
            <p class="card-title mb-2"><icon :name="imageUrl"></icon>&nbsp;&nbsp;{{ title }}</p>
            <footer class="white-text">{{ shortDescription }}</footer>
          </blockquote>
        </div>
      </b-card>      
    </a>
  </div>
</b-col>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'Card',
  components: { Icon },
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
</style>