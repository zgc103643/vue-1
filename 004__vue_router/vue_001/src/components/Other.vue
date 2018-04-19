<template>
	<div>
		<div class="return_btn">
			<a href="javascript:history.back(-1)" class="vue_a">返回上一页</a>
		</div>
		<div class="other_content">
			<p class="_p">{{msg}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Other',
		data(){
			return {
				msg:'欢迎联系我们!'
			}
		}
	}
</script>

<style scoped>
	.return_btn{
		width: 100px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background-color: forestgreen;
		margin-bottom: 10px;
	}
	.other_content{
		border-top: 1px solid #CCCCCC;
	}
	._p{
		margin-top: 20px;
	}
</style>