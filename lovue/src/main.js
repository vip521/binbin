// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios";
//将axios注入到vue中
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//mini ui
import Mint from 'mint-ui';
Vue.use(Mint);
//swiper.js
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
