import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details.vue'
import HomePage from "../components/HomePage.vue"
import ShoppingCart from "../components/ShoppingCart.vue"
import SearchDetail from "../components/searchDetail.vue"
import Classify from "../components/Classify.vue"
import SignIn from "../components/SignIn.vue"
import Nothing from "../components/Nothing.vue"

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
  },
  {
    path:"/searchDetail",
    component:SearchDetail
  },
  {
    path:"/classify",
    component:Classify
  },
  {
    path:"/signin",
    component:SignIn
  },
  {
    path:"/nothing",
    component:Nothing
  }


]

const router = new VueRouter({
  routes
})

export default router
