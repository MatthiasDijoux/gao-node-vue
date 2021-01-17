import Vue from 'vue'
import Layout from './layouts/Layout.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './vuetify.js'
import Routes from './routes.js';

Vue.use(Vuetify);


new Vue({
  vuetify,
  router: Routes,
  render: h => h(Layout),
}).$mount('#app')
