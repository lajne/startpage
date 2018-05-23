<template>
<b-col v-bind:class="colStyle">
  <div>
    <a href="#" v-b-tooltip.html.bottom v-bind:title="description">

      <b-card
        class="mt-1" 
        v-bind:style="styles"
        text-variant="white">
        <!-- <div class="card-body"> -->
          <div id="testing">
            <!-- <button type="button" class="btn btn-sm btn-secondary"> -->
              <monitor-icon />
            <!-- </button> -->
          </div>
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
#testing {
   display:inline-block;
}
</style>