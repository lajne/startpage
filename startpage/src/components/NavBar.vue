<template>
    <nav class="mb-1 navbar fixed-top navbar-expand-lg navbar-dark indigo">
    <div class="container">
      <a class="navbar-brand" href="#">Our Start Page</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="#">Category 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="#">Category 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="#">Category 3</a>
          </li>
          <li class="nav-item">
              <a class="nav-link waves-effect waves-light" href="#">Category 4</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownContent" data-toggle="dropdown" aria-haspopup="true">Dropdown</a>
            <div class="dropdown-menu dropdown-pink" aria-labelledby="navbarDropdownContent">
              <a class="dropdown-item waves-effect waves-light" href="#">Lights</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Camera</a>
              <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>






<script>
export default {
    name: 'NavBar',
    props: {
      
    }
}
</script>





<style scoped>

</style>
