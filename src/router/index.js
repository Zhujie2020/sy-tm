import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details.vue'
import HomePage from "../components/HomePage.vue"

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/details',
    component: Details
  },

  {
    path: '/',
    component: HomePage
  },
 

]

const router = new VueRouter({
  routes
})

export default router
