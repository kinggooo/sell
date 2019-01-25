// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './router/router';
import VueResource from 'vue-resource';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  components: {App},
  template: '<App/>',
  router: Router
}).$mount('#app');
