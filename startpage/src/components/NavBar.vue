<template>

<b-navbar class="fixed-top" id="navbar" toggleable="md" type="dark" variant="primary">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">
    <web-icon />
    {{Name}}
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items (class='ml-auto') -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">About</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>

</template>

<script>

export default {
    name: 'NavBar',
    components: {
      
    },
    props: {
      Name: String
    }
    
}
</script>

<style scoped>

</style>
