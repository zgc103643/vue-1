<template>
	<div class="index_content">
		<!--轮播图-->
		<div class="banner_content">
			<template>
				<el-carousel :interval="2000" arrow="always">
					<el-carousel-item v-for="item in bannerArr" :key="item">{{ item }}</el-carousel-item>
				</el-carousel>
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Banner',
		data() {
			return {
				//模拟从后台接收的数组
				bannerArr:['html','css','js','react']
			}
		}
	}
</script>

<style lang="scss">
	.index_content {
		.banner_content {
			.el-carousel__item{
				color: #000;
				font-size: 30px;
				font-weight: 600;
				text-align: center;
				line-height: 300px;	
				&:nth-child(2n){
					background-color: #99a9bf;
				}
				&:nth-child(2n+1){
					background-color: #d3dce6;
				}
			}
			.el-carousel__button{
				width: 10px;
				height: 10px;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
			}
		}
	}
</style>