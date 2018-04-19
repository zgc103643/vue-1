<template>
	<div class="count_template">
		<div class="title">基本模板 : </div>
		<div class="title" style="padding-top: 20px;">成功加载了store.js,下面可以开始调用状态值了:</div>
		<p class="_p">状态值count : {{$store.state.count}}</p>
		<div class="content">
			<button class="btns" v-on:click="$store.commit('reduce')">reduce</button>
			<button class="btns" v-on:click="$store.commit('add')">add</button>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	export default {
		name:'Count',
		store
	}
</script>
	
<style lang="scss" scoped>
	.count_template{
		.title{
			border-bottom: 1px dashed #CCCCCC;
			padding-bottom: 20px;
		}
		._p{
			margin-top: 20px;
			padding-bottom: 20px;
			border-bottom: 1px dashed #CCCCCC;
		}
		.content{
			overflow: hidden;
			padding-top: 20px;
			padding-bottom: 20px;
			.btns{
				width: 80px;
				height: 40px;
				background-color: #000;
				color: white;
				font-size: 14px;
				cursor: pointer;
				-webkit-border-radius: 20px;
				-moz-border-radius: 20px;
				border-radius: 20px;
				border: none;
				&:first-child{
					float: left;
				}
				&:last-child{
					float: left;
					margin-left: 20px;
				}
				&:focus{
					outline: none;
				}
			}
		}
	}
</style>