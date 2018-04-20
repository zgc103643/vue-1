<template>
	<div class="left_content">
		<ul class="link vue_ul">
			<li class="item">
				<i class="iconfont icon-wodezichan"></i>
				<div>收银</div>
			</li>
			<li class="item">
				<i class="iconfont icon-jinrudianpu"></i>
				<div>店铺</div>
			</li>
			<li class="item">
				<i class="iconfont icon-hanbao"></i>
				<div>商品</div>
			</li>
			<li class="item">
				<i class="iconfont icon-huiyuanqia"></i>
				<div>会员</div>
			</li>
			<li class="item">
				<i class="iconfont icon-shezhi"></i>
				<div>统计</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'LeftNav',
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.left_content{
		color: #FFFFFF;
		font-size: 10px;
		height: 100%;
		background-color: #ed8ce0;
		float: left;
		width: 5%;
		.link{
			list-style-type: none;
			.item{
				text-align: center;
				border-bottom: 1px solid #20a0ff;
				padding: 10px;
				cursor: pointer;
				.iconfont{
					font-size: 24px;
				}
				&:hover{
					background-color: #333333;
				}
			}
		}
	}
</style>