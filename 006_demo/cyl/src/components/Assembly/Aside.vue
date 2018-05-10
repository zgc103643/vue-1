<template>
	<div class="aside_plug" v-show="isAsideData" v-on:click="closeFun">
		<div class="aside_worp">
			<div class="title">
				配置基本环境以及常用方法
			</div>
			<div class="content">
				<router-link to='/View/Sass/01' class='vue_a'>
					<div class="rowObj">安装sass环境</div>
				</router-link>
				<router-link to='/View/ElementUi/02' class='vue_a'>
					<div class="rowObj">安装 element-ui 环境</div>
				</router-link>
				<router-link to='/View/Axios/03' class='vue_a'>
					<div class="rowObj">安装 axios 环境</div>
				</router-link>
				<router-link to='/View/404' class='vue_a'>
					<div class="rowObj">配置 404 页面</div>
				</router-link>
				<router-link to='/View/Assemb/04' class='vue_a'>
					<div class="rowObj">引入自定义组件</div>
				</router-link>
				<router-link to='/View/Layer/05' class='vue_a'>
					<div class="rowObj">两个页面之间的传值,如 弹窗</div>
				</router-link>
				<router-link to='/View/Watch/06' class='vue_a'>
					<div class="rowObj">初始化判断 watch监听</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Aside',
		props:['isAsideData'],
		methods:{
			closeFun:function () {
				this.$emit('asideparams');
			}
		}
	}
</script>

<style lang="scss">
	.aside_plug{
		width: 100%;
		height: 100%;
		overflow-y: auto;
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99999;
		.aside_worp{
			width: 70%;
			height: 100%;
			background-color: white;
			.title{
				width: 100%;
				text-align: center;
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				font-weight: 600;
				letter-spacing: 0.5px;
			}
			.content{
				.rowObj{
					margin-left: 10px;
					padding: 15px 0 15px 0;
					border-bottom: 1px dashed #CCCCCC;
					color: #000;
				}
			}
		}
	}
</style>