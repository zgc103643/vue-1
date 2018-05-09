import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Top from '@/components/View/Top'
import Public from '@/components/View/Public'
import SassPlug from '@/components/View/Sass'
import ElementUi from '@/components/View/ElementUi'
import Axios from '@/components/View/Axios'
import Assemb from '@/components/View/Assemb'

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
      		path:'Public/:id',
      		name:'Public',
      		component:Public
      	},
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
      	}
      ]
    }
  ]
})
