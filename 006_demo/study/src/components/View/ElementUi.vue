<template>
	<div class="elementUi_content vue_content">
		<p class="title">ElementUi 安装流程 :</p>
		<ul class="link">
			<li class="item">step1 : cnpm install element-ui --save </li>
			<li class="item">step2 : 打开 src/main.js 引入 element 插件 </li>
			<li class="item">step3 : 配置
				<a href='https://github.com/cyl0430/vue/blob/master/%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83.html' target="_blank" class="vue_a github">
					main.js
				</a>
			</li>
			<li class="item">step4 : 完成安装</li>
		</ul>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'ElementUi',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			console.log(isBool.innerText)
			if (isBool.innerText == '02') {
				isTitle.innerText = 'ElementUi'
			}
		}
	}
</script>

<style lang="scss">
	.elementUi_content{
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