import Vue from 'vue'
import Router from 'vue-router'
import Construction from '@/components/Construction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/wip'
    },
    {
      path: '/wip',
      name: 'Construction',
      component: Construction
    }
  ]
})
