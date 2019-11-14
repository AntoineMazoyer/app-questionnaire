import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: () => import('./views/Questionnaire.vue')
    },
    {
      path: '/resultat',
      name: 'resultat',
      component: () => import('./views/Resultat.vue')
    }
  ]
})
