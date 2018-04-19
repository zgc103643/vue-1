import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Top from '@/components/Page/Top'
import Jquery from '@/components/Page/Jquery'
import Sass from '@/components/Page/Sass'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/Page',
    	name:'Top',
    	component:Top,
    	children:[
    		{
    			path:'Jquery',
    			name:'Jquery',
    			component:Jquery
    		},
    		{
    			path:'Sass',
    			name:'Sass',
    			component:Sass
    		}
    	]
    }
  ]
})
