<template>
	<div class="aside_plug" v-show="isAsideData" v-on:click="closeFun">
		<div class="aside_worp">
			<div class="title">
				<img class="logo" src="../../assets/logo.png"/>
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
				<router-link to='/View/Assemb/04' class='vue_a'>
					<div class="rowObj">引入自定义组件</div>
				</router-link>
				<router-link to='/View/Layer/05' class='vue_a'>
					<div class="rowObj">两个页面之间的传值,如 弹窗</div>
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
				text-align: center;
				.logo{
					width: 100px;
					height: 100px;
				}
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