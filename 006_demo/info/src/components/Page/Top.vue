<template>
	<div class="page_top">
		<div class="top">
			<div class="return" v-on:click="returnFun">返回</div>
			<div class="title">VUE</div>
		</div>
		<div class="bottom">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		data(){
			return {
				
			}
		},
		methods:{
			returnFun:function () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page_top{
		.top{
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #ccc;
			position: relative;
			.return{
				position: absolute;
				left: 15px;
				top: 50%;
				-webkit-transform: translateY(-50%);
				-moz-transform: translateY(-50%);
				-ms-transform: translateY(-50%);
				-o-transform: translateY(-50%);
				transform: translateY(-50%);
				width: 60px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				background-color: #000;
				color: white;
			}
			.title{
				position: absolute;
				left: 50%;
				top: 50%;
				-webkit-transform: translateX(-50%) translateY(-50%);
				-moz-transform: translateX(-50%) translateY(-50%);
				-ms-transform: translateX(-50%) translateY(-50%);
				-o-transform: translateX(-50%) translateY(-50%);
				transform: translateX(-50%) translateY(-50%);
				font-size: 24px;
				font-weight: 600;
			}
		}
		.bottom{
			
		}
	}
</style>