// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store'
import {addCookie, getCookie, delCookie} from './assets/cookie'; //引入 cookie

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: {
		App
	},
	template: '<App/>'
})

Vue.prototype.$cookieStore = {
  addCookie,
  getCookie,
  delCookie
}