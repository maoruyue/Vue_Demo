import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'

// 注册组件(全局, 所有组件都使用这个组件标签)
Vue.component(Button.name, Button)  // mt-button

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router // 注册路由器
})