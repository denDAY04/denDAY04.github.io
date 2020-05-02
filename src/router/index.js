import Vue from 'vue';
import Router from 'vue-router';
import ExperiencePage from '../views/ExperiencePage.vue';
import HomePage from '../views/HomePage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import AboutMePage from '../views/AboutMePage.vue';

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
      name: 'ExpPage',
      component: ExperiencePage,
    },
    {
      path: '/projects',
      name: 'ProjectsPage',
      component: ProjectsPage,
    },
    {
      path: '/me',
      name: 'AboutMePage',
      component: AboutMePage,
    },
  ],
});
