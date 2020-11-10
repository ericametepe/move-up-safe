import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue'
import store from './store';

import { BootstrapVue, IconsPlugin, PaginationPlugin } from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(PaginationPlugin);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
