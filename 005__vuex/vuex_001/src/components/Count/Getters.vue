<template>
	<div class="getters_content">
		<div class="title">getters计算过滤操作 : 可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工</div>
		<div class="content">
			<ul class="link">
				<li class="item">
					<button class="vue_btn" v-on:click="add">add</button>
					<span class="vue_span">{{count}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	import {mapState,mapMutations,mapGetters} from 'vuex'
	
	export default{
		name:'Getters',
		data(){
			return {
				
			}
		},
		computed:{
			...mapGetters(['count'])
		},
		methods:mapMutations(['add']),
		store
	}
</script>

<style lang="scss" scoped>
	.getters_content{
		.title{
			text-transform: capitalize;
			padding-bottom: 20px;
			border-bottom: 1px dashed #CCCCCC;
			font-size: 15px;
			color: #000000;
		}
		.content{
			margin-top: 20px;
			.link{
				.item{
					font-size: 14px;
					color: #000000;
				}
			}
		}
	}
</style>