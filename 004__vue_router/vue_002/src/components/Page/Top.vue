<template>
	<div class="module_top">
		<div class="top_obj">
			<div class="_return" v-on:click="returnFun">返回</div>
			<div class="_title">安装插件</div>
		</div>
		<div class="bottom_obj">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		methods:{
			returnFun:function () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.top_obj{
		height: 50px;
		border-bottom: 1px solid #CCCCCC;
		position: relative;
	}
	._return{
		position: absolute;
		left: 20px;
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
		background-color: #000000;
		color: white;
		font-size: 14px;
		-webkit-border-radius: 15px;
		-moz-border-radius: 15px;
		border-radius: 15px;
	}
	._title{
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
		font-size: 18px;
		font-weight: 600;
	}
</style>