import Vue from 'vue';
import Router from 'vue-router';
import ExperiencePage from '../views/ExperiencePage.vue';
import HomePage from '../views/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/experience',
      name: 'Exp',
      component: ExperiencePage,
    },
  ],
});
