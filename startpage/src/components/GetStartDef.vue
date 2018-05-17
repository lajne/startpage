<template>
  <div class="hello">
    {{ object }}

  </div>
</template>

<script>
import 'data.js';

let getStartDef = function(callback) {
  setTimeout( () => {
    let mydata = window["myData"];
    console.log("hiiiit", mydata);
    callback(mydata);
  }, 2000);
};

 getStartDef((data) => {
  console.log("Fick data", data);
  this.object = data;
 });


export default {
  name: 'GetStartDef',
  props: {
    object: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
