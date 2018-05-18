import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
