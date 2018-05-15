<template>
	<div class="order_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="content">
			订单生成
		</div>
	</div>
</template>

<script>
	export default{
		name:'Order',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '09') {
				isTitle.innerText = '订单生成页面'
			}
		}
	}
</script>

<style lang="scss">
	.order_content{
		.content{
			text-align: center;
			margin-top: 50px;
			font-size: 30px;
		}
	}
</style>