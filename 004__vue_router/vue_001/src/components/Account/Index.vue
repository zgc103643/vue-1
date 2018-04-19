<template>
	<div class="account_index">
		<div class="content">
			<router-link to="/Account/Username/1" class='vue_a'>
				<div class="item">账户信息</div>
			</router-link>
			<router-link to="/Account/Address/2" class='vue_a'>
				<div class="item">地址管理</div>
			</router-link>
			<router-link to="/Account/More" class='vue_a'>
				<div class="item">单页面多路由区域操作</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'AccountIndex'
	}
</script>

<style scoped>
	.item{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #CCCCCC;
		font-size: 14px;
	}
	.vue_a{
		color: #000000;
	}
</style>