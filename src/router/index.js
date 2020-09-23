import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details.vue'
import HomePage from "../components/HomePage.vue"
import ShoppingCart from "../components/ShoppingCart.vue"
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
  {
    path:'/shoppingcart',
    component:ShoppingCart
  }

]

const router = new VueRouter({
  routes
})

export default router
