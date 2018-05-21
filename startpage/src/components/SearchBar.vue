<template>
  <div class="container">
    <div class="md-form">
      <input type="text" class="form-control animated" id="searchInput" 
             mdbInputDirective autofocus placeholder="Search">
    </div>
  </div>
</template>




<script>
export default {
  name: 'searchBar',
  props: {

  }
}
</script>




<style scoped>
#searchInput {
  background-color: #ffffff;
  padding-left: 8px;
  padding-right: 8px;
  height: 27px;
}

#searchInput:focus {
  animation-name: focus-animation;
  animation-duration: 0.3s;
}

@keyframes focus-animation {
  100% {transform: scale(1.04)}
}

</style>
