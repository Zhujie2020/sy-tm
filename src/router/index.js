import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Details from '../components/Details.vue'
=======
import HomePage from "../components/HomePage.vue"
>>>>>>> 194529d1e6a659c82ac5f12c31752b6add7484c8

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
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

=======
  {
    path: '/',
    component: HomePage
  },
 
>>>>>>> 194529d1e6a659c82ac5f12c31752b6add7484c8

]

const router = new VueRouter({
  routes
})

export default router
