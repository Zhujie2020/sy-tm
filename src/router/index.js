import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: HomePage
  // },
  // {
  //   path: '/classify',
  //   component:Classfify
  // },
  {
    path: '/details',
    component: Details
  },
  // {
  //   path: '/me',
  //   component: Me
  // },
  // {
  //   path: '/shopping',
  //   component: Shopping
  // },


]

const router = new VueRouter({
  routes
})

export default router
