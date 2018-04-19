<template>
	<div class="address_content">
		{{msg}} 
		<!--从url从获取参数的格式 {{ $route.params.xxx }} 
		xxx : 为 自定义参数的名字-->
		参数： {{ $route.params.number }}
	</div>
</template>

<script>
	export default{
		name:'AccountUsername',
		data(){
			return {
				msg:'我是账户信息页面'
			}
		}
	}
</script>

<style>
</style>