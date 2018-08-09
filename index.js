import Vue from 'vue'
import Router from 'vue-router'
import Sport from '@/components/Sport'
import Register from '@/components/Register'
import Login from '@/components/Login'
import SportDetail from '@/components/Sport_Item_Detail'
import Reservation from '@/components/Reservation'
import CreateCentre from '@/components/Create_centre'
import SportAdministration from '@/components/Sport_Administration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sport',
      component: Sport
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/SportDetail',
      name: 'SportDetail',
      component: SportDetail
    },

    {
      path: '/Reservation',
      name: 'Reservation',
      component: Reservation
    },

    {
      path: '/CreateCentre',
      name: 'CreateCentre',
      component: CreateCentre
    },

    {
      path: '/Administration/Sport',
      name: 'SportAdministration',
      component: SportAdministration,
      meta: { requiresAuth: true }
    }
  ]
})
