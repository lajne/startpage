import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import MontiorIcon from "vue-material-design-icons/monitor.vue"
import WebIcon from "vue-material-design-icons/web.vue"

import Icon from 'vue-awesome/icons'


Vue.use(BootstrapVue);
Vue.component("monitor-icon", MontiorIcon);
Vue.component("web-icon", WebIcon);
Vue.component('icon', Icon);

import 'vue-material-design-icons/styles.css';
import 'vue2-animate/dist/vue2-animate.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')