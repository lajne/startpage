<template>
  <div class="hello">
    <ul id="v-for-object">
      <li v-for="(cat, index) in categories" :key='index'>
        <span>hej {{cat.title}}</span>
      </li>
    </ul>
 </div>
</template>

<script>

export default {
  name: 'GetStartDef',
  created: function () {
    this.fetchData();
  },
  data: function() {
     return {
       categories: []
     }
  },
  methods: {
    fetchData: function () {
      let self = this;
      setTimeout( () => {
        let loadedData = window["myData"];
        console.log("Fick datan: ", JSON.stringify(loadedData, null, 2));
        self.categories = loadedData.cat;
      }, 500)
    }
  },
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