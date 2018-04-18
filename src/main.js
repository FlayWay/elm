import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'
import  routes from  './routerConfig.js'
import  axios from  '../bower_components/axios/dist/axios'

Vue.use(VueRouter);

const router = new VueRouter({

    routes
});

//axios配置发送请求的信息
axios.interceptors.request.use(function (config) {

  return config;

},function (error) {

  return Promise.reject(error);

});

//axios配置接受数据的信息
axios.interceptors.response.use(function (response) {

  return response;

},function (error) {

  return Promise.reject(error)
});

//其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http=axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
