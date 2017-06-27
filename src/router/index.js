import Vue from 'vue';
import Router from 'vue-router';
import page from '../components/page/page.vue';
import evalute from '../components/evalute/evalute.vue';
import custor from '../components/custor/custor.vue';
Vue.use(evalute);
Vue.use(Router);
Vue.use(page);
Vue.use(custor);
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: page
    },
    {
      path: '/evalute',
      name: 'evalute',
      component: evalute
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/custor',
      name: 'custor',
      component: custor
    }
  ]
});

