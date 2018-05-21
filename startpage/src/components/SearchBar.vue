<template>

  <div class="container">
    <!-- <label for="searchBox"><span class="md-suffix"><magnify-icon /></span></label> -->
    <div class="md-form">
      <transition name="focus">
      <input type="text" class="form-control animated bounce" id="searchInput" 
             mdbInputDirective autofocus placeholder="Search" @focus="bounce">
    </transition>
    </div>
  </div>


</template>




<script>
export default {
  // name of js file (searchBar.js)
  name: 'searchBar',
  props: {

  },
  // methods: {
  //   focus() {
  //     console.log("I'm in focus");
  //     // animationName = "bounceIn"
  //     // el.style.animationDuration = "1.5"
      

  //   }
  // },
  // directives: {
  // focus: {
  //   // directive definition
  //   inserted: function (el) {
  //     el.focus()
  //     console.log("in focus")
  //   }
  // }
  // }
}
</script>




<style scoped>
#searchInput {
  background-color: #ffffff;
  padding-left: 8px;
  padding-right: 8px;
  height: 27px;
}

input:focus {
  background-size: 100% 2px, 100% 1px;
}

</style>
