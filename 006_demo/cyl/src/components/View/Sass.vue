<template>
	<div class="sass_content">
		<p class="title">Sass 安装流程 :</p>
		<ul class="link">
			<li class="item">step1 : cnpm install --save-dev sass-loader </li>
			<li class="item">step2 : cnpm install --save-dev node-sass  </li>
			<li class="item">step3 : 配置webpack.base.conf.js 中的 
				<a href='https://github.com/cyl0430/vue/blob/master/%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83.html' target="_blank" class="vue_a github">
					rules 数组
				</a>
			</li>
			<li class="item">step4 : 在.vue页面中的style标签中写入 lang='sass'</li>
			<li class="item">step5 : 完成安装</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'SassPlug',
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.sass_content{
		.title{
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 20px;
		}
		.link{
			list-style-type: none;
			.item{
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #CCCCCC;
				.github{
					color: #409EFF;
				}
			}
		}
	}
</style>