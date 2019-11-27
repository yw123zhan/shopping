import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('views/home/Home')
const Category = ()=> import('views/category/Category')
const Cart = ()=> import('views/cart/Cart')
const Profile = ()=> import('views/profile/Profile')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})
 
// 这行代码解决的问题是：双击路由切换的时候页面页面正确的显示，但是报错Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated"}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
