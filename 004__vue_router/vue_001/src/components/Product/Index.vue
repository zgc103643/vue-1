<template>
	<div class='product_index'>
		<div class="product_logo_div">
			<router-link to='/'>
				<img class="product_logo" src="../../assets/logo.png"/>
			</router-link>
			<div class="pro_return_btn">
				<a href="javascript:history.back(-1)" class="vue_a">返回上一页</a>
			</div>
		</div>
		<div class="product_content">
			<div class="product_show">
				<img class="show_img" src="../../assets/pro.jpg"/>
			</div>
			<router-link to='/Product/List'>
				<button class="more_btn">查看更多商品</button>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProductIndex',
		data(){
			return {
				
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
	.show_img{
		width: 100%;
		vertical-align: top;
	}
	.more_btn{
		margin-top: 20px;
		background-color: #000000;
		color: white;
		outline: none;
		border: none;
		width: 100px;
		height: 30px;
	}
</style>