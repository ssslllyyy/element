// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import header from './components/header/header.vue';
import nav from './components/nav/nav.vue';
import footer from './components/footer/footer.vue';
import detail from './components/detail/detail.vue';
import router from './router';
Vue.config.productionTip = false;
Vue.use(header);
Vue.use(nav);
Vue.use(footer);
Vue.use(detail);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
