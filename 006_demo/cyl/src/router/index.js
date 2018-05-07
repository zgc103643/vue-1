import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Top from '@/components/View/Top'
import Public from '@/components/View/Public'
import SassPlug from '@/components/View/Sass'
import ElementUi from '@/components/View/ElementUi'

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
      		path:'Public',
      		name:'Public',
      		component:Public
      	},
      	{
      		path:'Sass',
      		name:'SassPlug',
      		component:SassPlug
      	},
      	{
      		path:'ElementUi',
      		name:'ElementUi',
      		component:ElementUi
      	}
      ]
    }
  ]
})
