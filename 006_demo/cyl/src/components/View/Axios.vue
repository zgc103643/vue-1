<template>
	<div class="axios_content vue_content">
		<p class="title">Axios 安装流程 :</p>
		<ul class="link">
			<li class="item">step1 : cnpm install axios --save </li>
			<li class="item">step2 : 在哪个.vue文件中使用，就在哪个页面中引入 import axios from 'axios' </li>
			<li class="item">step3 : 完成安装</li>
		</ul>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'Axios',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			console.log(isBool.innerText)
			if (isBool.innerText == '03') {
				isTitle.innerText = 'Axios'
			}
		}
	}
</script>

<style lang="scss">
	.axios_content{
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