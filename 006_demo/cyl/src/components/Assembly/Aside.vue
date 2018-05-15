<template>
	<div class="aside_plug" v-show="isAsideData" v-on:click="closeFun">
		<div class="aside_worp">
			<div class="account">
				<router-link to='/View/Login/1' class='vue_a'>
					<div class="t login">登录</div>
				</router-link>
				<router-link to='/View/Sign/0' class='vue_a'>
					<div class="t">注册</div>
				</router-link>
			</div>
			<div class="title">
				配置基本环境
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
				<router-link to='/View/Vuex/04' class='vue_a'>
					<div class="rowObj">安装 vuex 环境</div>
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
			.account{
				width: 100%;
				height: 40px;
				line-height: 40px;
				overflow: hidden;
				border-bottom: 1px solid #CCCCCC;
				.t{
					float: left;
					width: 49%;
					text-align: center;
					color: #000000;
				}
				.login{
					border-right: 1px solid #CCCCCC;
				}
			}
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