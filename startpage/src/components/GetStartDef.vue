<template>
  <div class="hello">
    <!-- {{ object }} -->

  </div>
</template>

<script>

let getStartDef = function(callback) {
  setTimeout( () => {
    let mydata =  window["myData"];
    console.log("hiiiit", mydata);
    callback(mydata);
  }, 2000);
};

 getStartDef((data) => {
  console.log("Fick data", JSON.stringify(data, null, 2));
  //Koppla datan vi får här med något vue-baserat.
  //så vi kan visa eller använda något.
 });


export default {
  name: 'GetStartDef',
  // Tänker att man kan undatera detta object på något sätt
  // i getStartDef funktionen.... 
  props: {
    object: Object
  },
  // created: 
  // getStartDef = function(callback) {
  //   setTimeout( () => {
  //     let mydata =  window["myData"];
  //     console.log("hiiiit", mydata);
  //     callback(mydata);
  //   }, 2000);
  // }.then((data) => {
  //   let self = this;
  //   console.log("Fick data", JSON.stringify(data, null, 2));
  //   self.object = data;
  // })
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
