<template>
	<div class="mutations_content">
		<p>Mutations修改状态 : </p>
		<ul class="link">
			<li class="item">
				<span>法一 : $store.commit(XXX)</span>
				<button class="vue_btn" v-on:click="$store.commit('add')">add</button>
				<span class="count">{{count}}</span>
			</li>
			<li class="item">
				<span>法一 : 传递参数  $store.commit(XXX,params) / XXX : 所要执行的方法名  / params : 需要传递的参数值</span>
				<button class="vue_btn" v-on:click="$store.commit('addAge',10)">addAge</button>
				<span class="count">{{age}}</span>
			</li>
			<li class="item">
				<span>法二 : 模板获取Mutations方法 </span>
				<button class="vue_btn" v-on:click="add">add</button>
				<span class="count">{{count}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import {mapState,mapMutations} from 'vuex';
	
	export default{
		name:'Mutations',
		data(){
			return {
				msg:'Mutations'
			}
		},
		computed:mapState(['count','age']),
		methods:mapMutations(['add','reduce','addAge']),
		store
	}
</script>

<style lang="scss" scoped>
	.mutations_content{
		p{
			font-size: 18px;
			text-align: left;
			color: #000000;
		}
		.link{
			margin-top: 20px;
			.item{
				margin-bottom: 15px;
				font-size: 14px;
				color: #000000;
				.count{
					color: red;
					margin-left: 15px;
				}
			}
		}
	}
</style>