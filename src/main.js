// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from './components/goods/Goods';
import Ratings from './components/ratings/Ratings';
import Seller from './components/seller/Seller';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/goods'
  }, {
    path: '/goods',
    component: Goods
  }, {
    path: '/seller',
    component: Seller
  }, {
    path: '/ratings',
    component: Ratings
  }
];

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  components: {App},
  template: '<App/>',
  router
}).$mount('#app');
