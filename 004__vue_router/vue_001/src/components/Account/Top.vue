<template>
	<div class="account_worp">
		<div class="account_top">
			<div class="account_return">
				<a href="javascript:history.back(-1)" class="vue_a">返回上一页</a>
			</div>       
			<span class="account_title">个人中心</span>
		</div>
		<div class="account_bottom">
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
		}
	}
</script>

<style>
	.account_top{
		height: 60px;
		width: 100%;
		position: relative;
		text-align: center;
		line-height: 60px;
		border-bottom: 1px solid #CCCCCC;
	}
	.account_return{
		width: 100px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background-color: forestgreen;
		margin-bottom: 10px;
		position: absolute;
		left: 0;
		top: 15px;
	}
	.account_title{
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0.5px;
	}
</style>