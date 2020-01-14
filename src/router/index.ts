import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'home',
    //vue异步组件路由懒加载
    component: (resolve:any) =>require(['../views/Home.vue'], resolve),
  },
  {
    path: '/about',
    name: 'about',
    
    component:  (resolve:any) =>require(['../views/About.vue'], resolve),
  }
]

const router = new VueRouter({
  routes
})

export default router
