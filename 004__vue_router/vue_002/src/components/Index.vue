<template>
	<div class="module_index">
		<div class="title">配置插件</div>
		<ul class="link">
			<router-link to='/Page/Jquery' class='vue_a'>
				<li class="item">JQuery</li>
			</router-link>
			<router-link to='/Page/Sass' class='vue_a'>
				<li class="item">Sass</li>
			</router-link>
			<router-link to='/Page/ElementUI' class='vue_a'>
				<li class="item">Element-ui</li>
			</router-link>
			<router-link to='/Page/Axios' class='vue_a'>
				<li class="item">Axios</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Index'
	}
</script>

<style scoped>
	.title{
		margin-bottom: 30px;
		font-weight: 600;
		font-size: 24px;
	}
	.module_index{
		width: 100%;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	.item{
		width: calc(100% - 40px);
		margin: 0 auto;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #0CBC56;
		margin-bottom: 20px;
	}
</style>