<template>
	<div class="module_Jquery">
		<ul class="link">
			<li class="item">全局安装<span class="redObj">JQuery</span>的流程 : </li>
			<li class="item">
				1.找到package.json 文件
			</li>
			<li class="item">
				2.在其中写入 dependencies:{"jquery" : "^2.2.3"}
			</li>
			<li class="item">
				3.cnpm install 安装插件
			</li>
			<li class="item">
				4.找到 webpack.base.conf.js 文件
			</li>
			<li class="item">
				5.在 resolve 函数前加入 var webpack = require("webpack")
			</li>
			<li class="item">
				6.找到 module.exports ,在其末尾,添加 
			</li>
			<li class="item">
				<!--这一步相当于全局安装-->
				7. plugins: [
						 new webpack.optimize.CommonsChunkPlugin('common.js'),
						 new webpack.ProvidePlugin({
						     jQuery: "jquery",
						     $: "jquery"
						 })
						]
			</li>
			<li class="item">
				8.重新启动 cnpm run dev ,即可正常编译
			</li>
		</ul>
		<div class="worp">
			<div class="left">
				<button class="btn" v-on:click="JqueryFun">测试 调用Jquery</button>
			</div>
			<div class="right">
				<button class="btn js_Jquery">html</button>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	
	export default{
		name:'Jquery',
		data(){
			return {
				msg:'成功引入Jquery'
			}
		},
		methods:{
			goBack:function () {
				this.$router.go(-1);
			},
			JqueryFun:function () {
				//调用html文件
				$('.js_Jquery').toggle();
			}
		}
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