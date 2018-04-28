<template>
	<div class="home_content">
		<div class="worp">
			<div class="title">开启vue神奇之旅</div>
			<div class="btn">
				<div class="item">
					<router-link to='/Page/Banner'>
						<el-button type="primary">Banner</el-button>
					</router-link>
				</div>
				<div class="item">
					<router-link to='/Page/Tab'>
						<el-button type="primary">Tab</el-button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Home',
		data(){
			return {
				msg:'home'
			}
		}
	}
</script>

<style lang="scss">
	.home_content{
		width: 100vw;
		height: 100vh;
		position: relative;
		.worp{
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
			.title{
				margin-bottom: 20px;
				font-size: 30px;
				font-weight: 600;
			}
			.btn{
				.item{
					margin-bottom: 15px;
				}
			}
		}
	}
</style>