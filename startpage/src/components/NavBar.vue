<template>


<!-- type="dark" for white Navbar text -->
<!-- change 'variant' prop for Navbar background color -->
<b-navbar class="fixed-top" toggleable="md" variant="light">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">
    <web-icon />
    <!-- <img src="https://placekitten.com/g/30/30" alt="Super Site">&nbsp;&nbsp; -->
    NavBar
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items (class='ml-auto') -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">Active link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled link</b-nav-item>
      <b-nav-item-dropdown text="Categories" right>
        <b-dropdown-item href="#">Lights</b-dropdown-item>
        <b-dropdown-item href="#">Camera</b-dropdown-item>
        <b-dropdown-item href="#">Action</b-dropdown-item>
      </b-nav-item-dropdown>
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
      
    }
    
}
</script>





<style scoped>

</style>
