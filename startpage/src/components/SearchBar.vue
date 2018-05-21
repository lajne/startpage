<template>

  <div class="container">
    <div class="md-form">
      <input type="text" class="form-control animated bounce" id="searchInput" 
             mdbInputDirective autofocus placeholder="Search" @focus="bounce">
    </div>
  </div>


</template>




<script>
export default {
  // name of js file (searchBar.js)
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
  height: 29px;
  margin-bottom: -2px;
}

</style>
