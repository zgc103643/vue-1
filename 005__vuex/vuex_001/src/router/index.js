import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

//count 文件夹
import Top from '@/components/Count/Top'
import Count from '@/components/Count/Count'
import State from '@/components/Count/State'
import Mutations from '@/components/Count/Mutations'
import Getters from '@/components/Count/Getters'

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
    	path:'/Count',
    	name:'Top',
    	component:Top,
    	children:[
    		{
    			path:'Count',
    			name:'Count',
    			component:Count
    		},
    		{
    			path:'State',
    			name:'State',
    			component:State
    		},
    		{
    			path:'Mutations',
    			name:'Mutations',
    			component:Mutations
    		},
    		{
    			path:'Getters',
    			name:'Getters',
    			component:Getters
    		}
    	]
    }
  ]
})
