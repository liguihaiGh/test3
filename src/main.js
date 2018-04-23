// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import rem from './common/rem' //自定义的rem.js
import MintUI from 'mint-ui' //饿了么框架
import 'mint-ui/lib/style.css' //饿了么样式
import './validator/validator.js'

//调用axios请求接口方法
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Vuex);
Vue.use(MintUI);
Vue.config.productionTip = false //关闭生产环境产生的提示

//路由跳转
Vue.prototype.$goRoute = function(index){
  this.$router.push(index);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
