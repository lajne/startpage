<template>
  <div class="container-fluid">
    <div class="card-deck">
      <div class="card">
        <div class="card-body">


          <div class="card-title">{{ title }}</div>
          <div class="row">
            <div class="col">
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <div class="card-image">
                      <i></i>
                    </div>
                    <div class="card-text"></div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <div class="card-image">
                      <i class="fa fa-search prefix"></i>
                    </div>
                    <div class="card-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div> 
      </div>
    </div>
  </div>
  

  
</template>


<script>
export default {
    name: 'Categories',
    props: {

    },

    data() {
      return {
        title: 'Category 1'
      }
    }
}
</script>





<style scoped>

.card-title, .card-image {
  text-align: center;
}

</style>