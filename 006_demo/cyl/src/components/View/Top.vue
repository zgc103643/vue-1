<template>
	<div class="view_content">
		<div class="header">
			<ul class="vue_link link">
				<li class="vue_item item">
					<div class="iconfont icon-zuojiantou title_icon" v-on:click="returnFun"></div>
				</li>
				<li class="vue_item item view_title">vue</li>
				<li class="vue_item item">
					<router-link to='/' class='vue_a'>
						<div class="iconfont icon-shouye title_icon"></div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="content">
			<router-view></router-view>	
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		methods:{
			returnFun:function () {
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="scss">
	.view_content{
		.header{
			border-bottom: 1px solid #CCCCCC;
			height: 50px;
			line-height: 50px;
			.link{
				padding-left: 15px !important;
				padding-right: 15px !important;
				.item{
					.title_icon{
						font-size: 24px;
					}
				}
				.view_title{
					font-size: 16px;
					font-weight: 600;
					text-transform: capitalize;
				}
			}
		}
		.content{
			padding: 20px;
			padding-right: 0;
		}
	}
</style>