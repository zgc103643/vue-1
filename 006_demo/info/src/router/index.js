import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Top from '@/components/Page/Top'
import Banner from '@/components/Page/Banner'
import Tab from '@/components/Page/Tab'

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
      path: '/Page',
      name: 'Top',
      component: Top,
      children:[
      	{
      		path:'Banner',
      		name:'Banner',
      		component:Banner
      	},
      	{
      		path:'Tab',
      		name:'Tab',
      		component:Tab
      	}
      ]
    }
  ]
})
