<template>
	<div class="public_content">
		<router-link to='/View/Sass' class='vue_a'>
			<div class="rowObj">安装sass环境</div>
		</router-link>
		<router-link to='/View/ElementUi' class='vue_a'>
			<div class="rowObj">安装 element-ui 环境</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name:'Public'
	}
</script>

<style lang="scss" scoped>
	.public_content{
		.rowObj{
			height: 40px;
			line-height: 40px;
			border-bottom: 1px dashed #000000;
			color: #000;
		}
	}
</style>