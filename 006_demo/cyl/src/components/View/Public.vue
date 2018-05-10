<template>
	<div class="public_content">
		<router-link to='/View/Sass/01' class='vue_a'>
			<div class="rowObj">安装sass环境</div>
		</router-link>
		<router-link to='/View/ElementUi/02' class='vue_a'>
			<div class="rowObj">安装 element-ui 环境</div>
		</router-link>
		<router-link to='/View/Axios/03' class='vue_a'>
			<div class="rowObj">安装 axios 环境</div>
		</router-link>
		<router-link to='/View/Assemb/04' class='vue_a'>
			<div class="rowObj">引入自定义组件</div>
		</router-link>
		<router-link to='/View/Layer/05' class='vue_a'>
			<div class="rowObj">两个页面之间的传值,如 弹窗</div>
		</router-link>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'Public',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			console.log(isBool.innerText)
			if (isBool.innerText == '00') {
				isTitle.innerText = 'vue'
			}
		}
	}
</script>

<style lang="scss">
	.public_content{
		.rowObj{
			height: 40px;
			line-height: 40px;
			border-bottom: 1px dashed #000000;
			color: #000;
		}
	}
</style>	