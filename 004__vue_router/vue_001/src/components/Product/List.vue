<template>
	<div class="product_list">
		<div class="product_logo_div">
			<router-link to='/'>
				<img class="product_logo" src="../../assets/logo.png"/>
			</router-link>
			<div class="pro_return_btn">
				<a href="javascript:history.back(-1)" class="vue_a">返回上一页</a>
			</div>
		</div>
		<div class="product_content">
			{{msg}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProductList',
		data(){
			return{
				msg:'商品列表页'
			}
		}
	}
</script>

<style scoped>
	.product_logo_div{
		text-align: center;
		height: 50px;
		border-bottom: 1px solid #CCCCCC;
		position: relative;
	}
	.product_logo{
		width: 78px;
		height: 40px;
		vertical-align: top;
		margin-top: 5px;
	}
	.pro_return_btn{
		width: 100px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background-color: forestgreen;
		margin-bottom: 10px;
		position: absolute;
		left: 0;
		top: 10px;
	}
	.product_show{
		text-align: center;
		margin-top: 20px;
	}
</style>