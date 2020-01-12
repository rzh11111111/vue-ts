import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// beforeRouteEnter等必须先main里引入，才能在router里的路由使用（必须router路由里注册的路由，组件无效）
import { Component } from 'vue-property-decorator';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'     
 ])
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
