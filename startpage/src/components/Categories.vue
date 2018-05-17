<template>

  <div class="container-fluid">
    
    <div class="card-deck">
      
      <div class="card">
        <div class="card-body">
          <div class="card-title">CATEGORY 1</div>
          <div class="row">
            <div class="col">
              <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <div class="card-image">
                      <i class="fa fa-search prefix"></i>
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
          <!-- long card div -->
          <!-- <div class="card-deck"> -->
            <div class="card mb-3">
              <div class="card-body">
                <div class="card-image">
                  <i class="fa fa-search prefix"></i>
                </div>
                <div class="card-text"></div>
              </div>
            </div>
          <!-- </div> -->
        </div> 
      </div>
    </div>
    
    
    <div class="card">
      <div class="card-body">
        <div class="card-title">CATEGORY 2</div>
        <div class="card">
          <div class="card-body">
            <!-- HR link and icon here -->
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <!-- IT link and icon here -->
          </div>
        </div>
      </div>
    </div>
    
    
  </div><!-- end card-deck -->
  
</div><!-- end container-fluid div -->


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