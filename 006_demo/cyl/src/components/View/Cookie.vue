<template>
	<div class="cookie_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="title">Cookie :</div>
		<div class="content">
			<div class="btn" v-on:click="saveFun">设置cookie</div>
			<div class="btn" v-on:click="getFun">{{get}}</div>
			<div class="btn" v-on:click="delFun">删除cookie</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'Cookie',
		data(){
			return {
				get:'获取cookie'
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '005') {
				isTitle.innerText = 'Cookie'
			}
		},
		methods:{
			saveFun:function () {
				//设置cookie
				this.$cookieStore.addCookie('cookie', 1)
			},
			getFun:function () {
				//获取 cookie
				this.get = this.$cookieStore.getCookie('cookie')
			},
			delFun:function () {
				//清除cookie
				this.$cookieStore.delCookie( 'cookie')
			}
		}
	}
</script>

<style lang="scss">
	.cookie_content{
		.title{
			font-size: 16px;
			font-weight: 600;
			padding-bottom: 20px;
		}
		.content{
			overflow: hidden;
			.btn{
				float: left;
				width: 100px;
				height: 40px;
				background-color: #000;
				color: white;
				font-size: 14px;
				cursor: pointer;
				text-align: center;
				line-height: 40px;
				margin-right: 15px;
				margin-bottom: 15px;
			}
		}
	}
</style>