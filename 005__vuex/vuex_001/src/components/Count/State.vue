<template>
	<div class="state_content">
		<p>调用状态值 : </p>
		<ul class="link">
			<li class="item">
				<span>法一 : 采用插值的方法 $store.state.XXX</span>
				<span class="count">count : {{$store.state.count}}</span>
			</li>
			<li class="item">
				<span>法二 : 通过computed的计算属性直接赋值 </span>
				<span class="count">count : {{count}}</span>
			</li>
			<li class="item">
				<span>法三 : 通过mapState的对象来赋值 </span>
				<span class="count">count : {{count}}</span>
			</li>
			<li class="item">
				<span>法四 : 通过mapState的数组来赋值,在实际项目开发当中最经常使用 </span>
				<span class="count">count : {{count}} / stateObj : {{stateObj}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	//法三 / 法四 -- 注意:此处必须用花括号括起来
	import {mapState} from 'vuex';
	
	export default{
		name:'State',
		//法二
//		computed:{
//			count(){
//				return this.$store.state.count;
//			}
//		},
		//法三 核心思想 ES6 的箭头函数
//		computed:mapState({
//			count:state=>state.count
//		}),
		//法四
		computed:mapState(['count','stateObj']),
		store
	}
</script>

<style lang="scss" scoped>
	.state_content{
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