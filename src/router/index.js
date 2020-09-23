import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '../components/Details.vue'
import HomePage from "../components/HomePage.vue"
<<<<<<< HEAD
import ShoppingCart from "../components/ShoppingCart.vue"
=======
import SearchDetail from "../components/searchDetail.vue"
import Classify from "../components/Classify.vue"

>>>>>>> 102bcdf86383d6263f39fc5a44a6f15dce745b9a
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
<<<<<<< HEAD
    path:'/shoppingcart',
    component:ShoppingCart
  }
=======
    path:"/searchDetail",
    component:SearchDetail
  },
  {
    path:"/classify",
    component:Classify
  }
 
>>>>>>> 102bcdf86383d6263f39fc5a44a6f15dce745b9a

]

const router = new VueRouter({
  routes
})

export default router
