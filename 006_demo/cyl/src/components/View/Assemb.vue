<template>
	<div class="assemb_content">
		<p class="title">自定义组件 引入流程 :</p>
		<ul class="link">
			<li class="item">step1 : 在模板中定义 自定义组件 的名字<!-- <jscyl></jscyl>--></li>
			<li class="item">step2 : 在哪个.vue文件中使用，就在哪个页面中引入 import jscyl from src </li>
			<li class="item">step3 : 注册组件 components: {jscyl}</li>
			<li class="item">step4 : 引入完毕 </li>
		</ul>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'Assemb',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			console.log(isBool.innerText)
			if (isBool.innerText == '00') {
				isTitle.innerText = 'vue'
			}else if (isBool.innerText == '01') {
				isTitle.innerText = 'Sass'
			}else if (isBool.innerText == '02') {
				isTitle.innerText = 'ElementUi'
			}else if (isBool.innerText == '03') {
				isTitle.innerText = 'Axios'
			}else if (isBool.innerText == '04') {
				isTitle.innerText = '引入自定义组件'
			}
		}
	}
</script>

<style lang="scss">
	.assemb_content{
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