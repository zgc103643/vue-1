<template>
	<div class="index_template">
		<div class="title">VUEX 配置流程</div>
		<ul class="link">
			<li class="item">
				介绍: vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。
			</li>
			<li class="item">
				1.执行命令 cnpm install vuex --save
			</li>
			<li class="item">
				2.在 src 文件夹 下建立 vuex 文件夹
			</li>
			<li class="item">
				3.在 vuex 文件夹中建立  store.js
			</li>
			<li class="item">
				4.在 store.js 中添加 
				import Vue from 'vue';
				import Vuex from 'vuex';
				
				Vue.use(Vuex);
				
				const state = { 
					//在此放置状态值
				}
				
				const mutations = {
					//如果要对状态值进行操作,必须用此方法 
					const mutations = {
						  此处写方法
					 }
					//如:
					 add(state){
						 state.count++;
					}
				}
				
				export default new Vuex.Store({
					state,
					mutations
				});
			</li>
			<li class="item">
				5.即可引入 vue 和 vuex
			</li>
			<li class="item">
				6.在.vue文件中写入
					import store from '@/vuex/store'
					import {mapState,mapMutations} from 'vuex';
					
					export default{
						name:'XXX',
						computed:mapState(['count']),
						methods:mapMutations(['add']),
						store
					}
			</li>
			<li class="item">
				7.调用状态值,共有四种方法,详情见 <router-link to='/Count/State' class='vue_view'>state.vue</router-link> 文件
			</li>
			<li class="item">
				8.如果要调用 mutations 中的方法 ,共有两种方法,详情见  <router-link to='/Count/Mutations' class='vue_view'>mutations.vue</router-link> 文件
			</li>
			<li class="item">
				9.至此搭建好了 vuex 的 <router-link to='/Count/Count' class='vue_view'>基本模板</router-link>
			</li>
		</ul>
		<div class="content">
			<router-link to='/Count/Getters'>
				<button class="btn">getters计算过滤操作</button>
			</router-link>
		</div>
	</div>
</template>

<script>
	export	default{
		name:'Index',
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index_template{
		width: calc(100% - 40px);
		padding-top: 20px;
		padding-bottom: 20px;
		margin: 0 auto;
		.title{
			font-size: 20px;
			font-weight: 600;
		}
		.link{
			margin-top: 20px;
			.item{
				font-size: 14px;
				color: #000000;
				margin-bottom: 15px;
			}
		}
		.content{
			overflow: hidden;
			padding-top: 20px;
			border-top: 1px solid #CCCCCC;
			.btn{
				float: left;
				margin-right: 20px;
				margin-bottom: 20px;
				padding-left: 20px;
				padding-right: 20px;
				height: 40px;
				outline: none;
				background-color: #000000;
				color: white;
				text-align: center;
				line-height: 40px;
				font-size: 14px;
				border: none;
				cursor: pointer;
				-webkit-border-radius: 20px;
				-moz-border-radius: 20px;
				border-radius: 20px;
			}
			.btn:focus{
				outline: none;
			}
		}
	}
</style>