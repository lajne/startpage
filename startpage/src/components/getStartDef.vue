<template>
  <div>
    
    <!-- <Categories v-for="(data, index) in categories" v-bind:key="index">{{ data.title }}/> -->
    <p>in the getStartDef.vue file</p>
    <p v-for="(data, index) in categories" v-bind:key="index">{{ data.title }}</p>

  </div>
</template>

<script>
import JSONObject from './data2.JSON'

export default {
  name: 'GetStartDef',
  created: function () {
    this.fetchData();
  },
  data: function() {
     return {
       item: [ {'item1': 'item11'}, {'item1': 'item22'}],
       categories: []
     }
  },
  methods: {
    fetchData: function () {
      let self = this;
      setTimeout( () => {
        // let loadedData = window["myData"];
        let loadedData = JSONObject;
        //console.log("Fick datan: ", JSON.stringify(loadedData, null, 2));
        // self.categories = loadedData.cat;
        self.categories = loadedData.Categories;
        console.log("Props of GetStartDef: ", self.categories)
      }, 500)
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style />