import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import Form from './views/Form.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
  ]
});
