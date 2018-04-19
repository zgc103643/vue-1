<template>
	<div class="error">
		<div class="_c">
			{{msg}}
			<br />
			<router-link to='/' class='vue_a'>
				<div class="btn">去首页</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Error',
		data(){
			return {
				msg:'页面不存在 ！'
			}
		}
	}
</script>

<style scoped>
	.error{
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	._c{
		width: 110px;
		text-align: center;
	}
	.btn{
		margin-top: 20px;
		width: 100%;
		height: 30px;
		line-height: 30px;
		background-color: #1CBAB8;
	}
</style>