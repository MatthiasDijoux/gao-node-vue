import Vue from 'vue';
import VueRouter from 'vue-router';
import Ordi from './views/Ordinateur.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'ordi',
          component: Ordi,
      },


    ]
})

export default router;