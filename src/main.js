import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // to get rid of #
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
