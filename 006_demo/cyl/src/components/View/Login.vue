<template>
	<div class="sign_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="from_content">
			<div class="title">登录</div>
			<div class="input_div">
				<input type="text" placeholder="请输入手机号" class="vue_input" v-model="user"/>
			</div>
			<div class="input_div">
				<input type="text" placeholder="请输入密码" class="vue_input" v-model="pwd"/>
			</div>
			<div class="sign_btn" v-on:click="signFun">登录</div>
			<div class="sign_div">
				<div class="sign_a">
					<span>没有账号?</span>
					<router-link to='/View/Sign/0' class='vue_a'>
						立即注册
					</router-link>
				</div>
			</div>
		</div>
		<Alert :isShow='isBool == true' :message='msg' @layer = 'hideMask'></Alert>
	</div>
</template>

<script>
	import Alert from '../Assembly/Alert'
	export default{
		name:'Login',
		data(){
			return {
				user:'',
				pwd:'',
				code:'',
				isBool:false,
				msg:' '
			}
		},
		components: {
			Alert
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '1') {
				isTitle.innerText = '登录';
			}
		},
		methods:{
			signFun:function () {
				if(this.user.length == 0){
					this.msg = '请输入手机号';
					this.isBool = true;
					return false;
				}
				
				if(this.pwd.length == 0){
					this.msg = '请输入密码';
					this.isBool = true;
					return false;
				}
				this.$store.commit('changeLogin');
				window.location.href = '/';
			},
			hideMask:function () {
			  	this.isBool = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sign_content{
		.from_content{
			width: 360px;
			margin: 0 auto;
			border: 1px solid transparent;
			margin-top: 100px;
			.title{
				text-align: center;
				font-size: 24px;
				color: #000000;
				text-transform: capitalize;
				font-weight: 600;
				height: 50px;
				line-height: 50px;
				margin-bottom: 30px;
			}
			.input_div{
				width: 100%;
				text-align: center;
				margin-bottom: 15px;
				position: relative;
				.vue_input{
					height: 40px;
					width: 300px;
					-webkit-border-radius: 5px;
					-moz-border-radius: 5px;
					border-radius: 5px;
					text-indent: 1em;
					font-size: 14px;
					color: #000000;				
				}
				.codeBtn{
					position: absolute;
					right: 30px;
					top: 1px;
					height: 40px;
					line-height: 40px;
					background-color: black;
					color: white;
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					font-size: 12px;
					width: 100px;
					text-align: center;
				}
			}
			.sign_btn{
				width: 200px;
				height: 40px;
				background-color: black;
				color: white;
				font-size: 14px;
				text-align: center;
				line-height: 40px;
				margin: 0 auto;
				cursor: pointer;
				margin-top: 20px;
				-webkit-border-radius: 8px;
				-moz-border-radius: 8px;
				border-radius: 8px;
			}
			.sign_div{
				width: 100%;
				text-align: left;
				margin-top: 20px;
				.sign_a{
					width: 300px;
					margin: 0 auto;
					.vue_a{
						color: #409EFF;
						padding-bottom: 3px;
						border-bottom: 1px solid #409EFF;
					}
				}
			}
		}
	}
</style>