<template>
  <div class="container">
    <div class="md-form">
      <input type="text"  v-model="searchTerm" class="form-control animated" id="searchInput" 
             mdbInputDirective autofocus placeholder="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    value: {
      default: ''
    }
  },
  data: function () {
    return { searchTerm: this.value }
  },
  watch: {
    value: function (val) {
      this.searchTerm = val
    },
    searchTerm: function (val) {
      this.$emit('input', val)
    }

  }
}
</script>

<style  lang="scss" scoped>
@import "../assets/_custom.scss";

#searchInput {
  background-color: #ffffff;
  padding-left: 8px;
  padding-right: 8px;
  height: 27px;
}

#searchInput:focus {
  animation-name: focus-animation;
  animation-duration: 0.3s;
  border-bottom: 1px solid $accent;
  box-shadow: 0 1px 0 0 $accent; 
}

@keyframes focus-animation {
  0% {transform: scale(1)}
  100% {transform: scale(1.04)}
}
</style>
