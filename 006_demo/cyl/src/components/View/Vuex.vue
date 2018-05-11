<template>
	<div class="vuex_content vue_content">
		<p class="title">Vuex 安装流程 :</p>
		<ul class="link">
			<li class="item">step1 : cnpm install vuex --save </li>
			<li class="item">step2 : 在  main.js 中引入 </li>
			<li class="item">step3 : (1) import store from './vuex/store'</li>
			<li class="item">step4 : (2) 在下方的 new Vue({}) 实例中添加 store,</li>
			<li class="item">step5 : 引入完毕，接下来创建 vuex 文件夹 和 store.js 文件，并进行配置 </li>
			<li class="item">step6 : 使用流程 ： </li>
			<li class="item">step7 : 使用 $store.state.XXX 方法获取状态值 </li>
			<li class="item">step8 : 使用 this.$store.commit('XXXFun') 操作方法 </li>
			<li class="item">
				step9 :
				<el-button type="primary" v-on:click="isLoginFun">操作自定义方法，更改状态值为 1</el-button>
			</li>
			<li class="item">状态值 : {{$store.state.count}} </li>
		</ul>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'Axios',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			console.log(isBool.innerText)
			if (isBool.innerText == '04') {
				isTitle.innerText = 'Vuex'
			}
		},
		methods:{
			isLoginFun() {
				this.$store.commit('changeLogin');
			}
		}
	}
</script>

<style lang="scss">
	.vuex_content{
		.title{
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 20px;
		}
		.link{
			list-style-type: none;
			.item{
				padding-top: 15px;
				padding-bottom: 15px;
				border-bottom: 1px solid #CCCCCC;
				.github{
					color: #409EFF;
				}
			}
		}
	}
</style>