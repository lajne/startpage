import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
// icon imports must be in CamelCasing.
import MagnifyIcon from "vue-material-design-icons/magnify.vue"
import HumanHandsupIcon from "vue-material-design-icons/human-handsup.vue"
import MontiorIcon from "vue-material-design-icons/monitor.vue"
import WebIcon from "vue-material-design-icons/web.vue"
import PuzzleIcon from "vue-material-design-icons/puzzle.vue"



Vue.use(BootstrapVue);
Vue.component("magnify-icon", MagnifyIcon);
Vue.component("human-handsup-icon", HumanHandsupIcon);
Vue.component("monitor-icon", MontiorIcon);
Vue.component("web-icon", WebIcon);
Vue.component("puzzle-icon", PuzzleIcon);

import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
