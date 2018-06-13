<template>
	<div class="fond_content vue_content">
		<p class="title">配置 404 页面 :</p>
		<ul class="link">
			<li class="item">step1 : 找到 router/index.js 中的 routes 数组</li>
			<li class="item">step2 : 在最底部写入 {path:'*',name:'Error',component:Error} 即可</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Error',
		data(){
			return {
				
			}
		},
		mounted:function(){
			var isTitle = document.querySelector('.view_title');
			isTitle.innerText = '404';
		}
	}
</script>

<style lang="scss" scoped>
	.fond_content{
		.title{
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 20px;
		}
		.link{
			list-style-type: none;
			.item{
				padding-top: 15px;
				padding-bottom: 15px;
				border-bottom: 1px solid #CCCCCC;
				.github{
					color: #409EFF;
				}
			}
		}
	}
</style>