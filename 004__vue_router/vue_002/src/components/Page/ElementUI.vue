<template>
	<div class="module_Jquery">
		<ul class="link">
			<li class="item">全局安装<span class="redObj">Element - ui</span>的流程 : </li>
			<li class="item">
				1.cnpm install element-ui --save
			</li>
			<li class="item">
				2.打开 src/main.js 引入 element 插件
			</li>
			<li class="item">
				3.将下面的代码拷贝至 main.js 中
					<!--// The Vue build version to load with the `import` command
					// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
					import Vue from 'vue'
					import App from './App'
					import router from './router'
					import ElementUI from 'element-ui' 
					import 'element-ui/lib/theme-chalk/index.css';
					
					Vue.config.productionTip = false
					
					Vue.use(ElementUI);
					
					/* eslint-disable no-new */
					new Vue({
					  el: '#app',
					  router,
					  components: { App },
					  template: '<App/>'
					})-->
			</li>
			<li class="item">
				4.全局引入完毕
			</li>
		</ul>
		<div class="worp">
			<el-row>
			  <el-button>默认按钮</el-button>
			  <el-button type="primary">主要按钮</el-button>
			  <el-button type="success">成功按钮</el-button>
			  <el-button type="info">信息按钮</el-button>
			  <el-button type="warning">警告按钮</el-button>
			  <el-button type="danger">危险按钮</el-button>
			</el-row>
		</div>
	</div>
</template>

<script>	
	export default{
		name:'ElementUI'
	}
</script>

<style scoped>
	.link{
		width: calc(100% - 40px);
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.item{
		margin-bottom: 15px;
		font-size: 14px;
	}
	.worp{
		overflow: hidden;
		width: calc(100% - 40px);
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}	
	.left{
		float: left;
		width: 48%;
	}
	.right{
		float: right;
		width: 48%;
	}
	.btn{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #000000;
		color: white;
		font-size: 14px;
		border: none;
	}
	.btn:focus{
		outline: none;
	}
</style>