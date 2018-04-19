import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
//联系我们
import Other from '@/components/Other'

//404
import Error from '@/components/Error'

//商品模块
import ProductIndex from '@/components/Product/Index'
import ProductList from '@/components/Product/List'
//个人中心
import AccountTop from '@/components/Account/Top'
import AccountIndex from '@/components/Account/Index'
import AccountAddress from '@/components/Account/Address'
import AccountUsername from '@/components/Account/Username'
//登录模块
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other
    },
    {
    	path:'/Product/Index',
    	name:'ProductIndex',
    	component:ProductIndex
    },
    {
    	path:'/Product/List',
    	name:'ProductList',
    	component:ProductList
    },
    {
    	path:'/Account',
    	name:'AccountTop',
    	component:AccountTop,
    	children:[
    		{
    			path:'Index',
    			name:'AccountIndex',
    			component:AccountIndex
    		},
    		{
    			path:'Username/:number',
    			name:'AccountUsername',
    			component:AccountUsername
    		},
    		{
    			path:"Address/:number",
    			name:'AccountAddress',
    			component:AccountAddress
    		}
    	]
    },
    {
    	//路由重定向
    	path:'/goProduct',
    	redirect:'/Product/Index'
    },
    {
    	//别名 注意 起别名的时候最好不要添加 name 值,或者name值最好不要重复,否则会报警告
    	path:'/Product/Index',
    	alias:'/vuecyl'
    },
    {
    	path:'/Login/Login',
    	name:'Login',
    	component:Login
    },
    {
    	//404 页面
    	path:'*',
    	name:'Error',
    	component:Error
    }
  ]
})
