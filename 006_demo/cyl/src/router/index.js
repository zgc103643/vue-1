import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//404
import Error from '@/components/View/Error'
//自定义页面
import Top from '@/components/View/Top'
import SassPlug from '@/components/View/Sass'
import ElementUi from '@/components/View/ElementUi'
import Axios from '@/components/View/Axios'
import Assemb from '@/components/View/Assemb'
import Layer from '@/components/View/Layer'
import Watch from '@/components/View/Watch'
import Sign from '@/components/View/Sign'
import Login from '@/components/View/Login'
import Time from '@/components/View/Time'
import Vuex from '@/components/View/Vuex'
import Cookie from '@/components/View/Cookie'
import Scroll from '@/components/View/Scroll'
import Delect from '@/components/View/Delect'
import Product from '@/components/View/Product'
import Order from '@/components/View/Order'
import Collection from '@/components/View/Collection'
import Tab from '@/components/View/Tab'

//下面是需要登陆方可进入的
import Info from '@/components/View/Info'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/View',
      name: 'Top',
      component: Top,
      children:[
      	{
      		path:'Sass/:id',
      		name:'SassPlug',
      		component:SassPlug
      	},
      	{
      		path:'ElementUi/:id',
      		name:'ElementUi',
      		component:ElementUi
      	},
      	{
      		path:'Axios/:id',
      		name:'Axios',
      		component:Axios
      	},
      	{
      		path:'Assemb/:id',
      		name:'Assemb',
      		component:Assemb
      	},
      	{
      		path:'Layer/:id',
      		name:'Layer',
      		component:Layer
      	},
      	{
      		path:'Watch/:id',
      		name:'Watch',
      		component:Watch
      	},
      	{
      		path:'Sign/:id',
      		name:'Sign',
      		component:Sign
      	},
      	{
      		path:'Login/:id',
      		name:'Login',
      		component:Login
      	},
      	{
      		path:'Time/:id',
      		name:'Time',
      		component:Time
      	},
      	{
		      path: 'Info/:id',
		      name: 'Info',
		      component: Info,
		       meta:{
				    requireLogin:true,
				  }
		    },
		    {
		      path: 'Vuex/:id',
		      name: 'Vuex',
		      component: Vuex
		    },
		    {
		      path: 'Cookie/:id',
		      name: 'Cookie',
		      component: Cookie
		    },
		    {
		      path: 'Scroll/:id',
		      name: 'Scroll',
		      component: Scroll
		    },
		    {
		      path: 'Delect/:id',
		      name: 'Delect',
		      component: Delect
		    },
		    {
		      path: 'Product/:id',
		      name: 'Product',
		      component: Product
		    },
		    {
		      path: 'Order/:id',
		      name: 'Order',
		      component: Order
		    },
		    {
		      path: 'Collection/:id',
		      name: 'Collection',
		      component: Collection
		    },
		    {
		      path: 'Tab/:id',
		      name: 'Tab',
		      component: Tab
		    },
      	{
		      path:'*',
		    	name:'Error',
		    	component:Error
		    }
      ]
    }
  ],    
  //此为强制性的使新页面滚顶到顶部
  scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})
