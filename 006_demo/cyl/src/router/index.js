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
