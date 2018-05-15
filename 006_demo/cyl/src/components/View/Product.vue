<template>
	<div class="product_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="content">
			<el-button type="primary" v-on:click='cartBtn'>添加购物车</el-button>
			<div class="cart_mask" v-show="isShow == true">
				<div class="mask">
					<div class="close">
						<i class="iconfont icon-guanbi closeBtn" v-on:click="hideFun"></i>
					</div>
					<div class="cart_content">
						
					</div>
					<div class="btn">
						<el-button type="primary" v-on:click='submitFun'>确定</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Product',
		data(){
			return{
				isShow:false
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == 'pro') {
				isTitle.innerText = 'JS控制页面跳转'
			}
		},
		methods:{
			cartBtn(){
				this.isShow = true;
			},
			hideFun(){
				this.isShow = false;
			},
			submitFun(){
				this.$router.push({
					name:'Order',
					params:{
						id:'09'
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.product_content{
		.content{
			.cart_mask{
				width: 100%;
				height: 100%;
				background-color: rgba(0,0,0,0.5);
				position: fixed;
				left: 0;
				top: 0;
				z-index: 10;
				.mask{
					width: 100%;
					height: 50%;
					background-color: white;
					position: absolute;
					bottom: 0;
					left: 0;
					.close{
						text-align: right;
						padding: 10px;
						.closeBtn{
							font-size: 28px;
						}
					}
					.cart_content{
						height: 240px;
					}
					.btn{
						text-align: center;
					}
				}
			}
		}
	}
</style>