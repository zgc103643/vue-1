<template>
	<div class="aside_content">
		<router-link to='/View/Assemb/04' class='vue_a'>
			把 公共底部 作为 单独的组件 引入
		</router-link>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.aside_content{
		position: fixed;
		left: 0;
		bottom: 0;
		height: 40px;
		background-color: #F2F2F2;
		width: 100%;
		text-align: center;
		line-height: 40px;
		.vue_a{
			color: #000000;
		}
	}
</style>