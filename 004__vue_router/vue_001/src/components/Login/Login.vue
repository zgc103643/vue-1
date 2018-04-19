<template>
	<div class="login_content">
		<div class="input_div">
			<input type="text" class="userInput" placeholder="请输入用户名"/>
			<p class="error user_error" v-show="isuser == false">请重新输入账号</p>
		</div>
		<div class="input_div">
			<input type="password" class="pwdInput" placeholder="请输入密码" />
			<p class="error pwd_error" v-show="ispwd == false">请重新输入密码</p>
		</div>
		<div class="btns">
			<div class="btn" v-on:click="goBack">返回</div>
			<div v-on:click="loginFun" class="btn loginFun">登录</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
				isuser:true,
				ispwd:true
			}
		},
		methods:{
			loginFun:function () {
				var username = document.querySelector('.userInput'),
					pwd = document.querySelector('.pwdInput');
				
				if (username.value == '') {
					this.isuser = false;
					return false;
				}else{
					this.isuser = true;
				}
				
				if (pwd.value == '') {
					this.ispwd = false;
					return false;
				}else{
					this.ispwd = true;
				}
				//this.$router.push('/Product/Index')
				this.$router.push('/Product/Index');
			},
			goBack:function () {
				// -1 后退一步
				// 1 前进一步
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.login_content{
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
	}
	.input_div{
		width: 100%;
		height: 65px;
		text-align: center;
	}
	.input_div input{
		outline: none;
		border: 1px solid #CCCCCC;
		height: 40px;
		width: calc(100% - 40px);
		width: moz-calc(100% - 40px);
		width: -webkit-calc(100% - 40px);
		padding-left: 10px;
		line-height: 40px;
		font-size: 14px;
	}
	.btns{
		width: calc(100% - 40px);
		width: moz-calc(100% - 40px);
		width: -webkit-calc(100% - 40px);
		margin: 0 auto;
	}
	.btn{
		width: 48%;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		background-color: blue;
		color: white;
		cursor: pointer;
	}
	.btn:first-child{
		float: left;
	}
	.btn:last-child{
		float: right;
	}
	.error{
		margin: 0;
		padding: 0;
		font-size: 12px;
		color: red;
		text-align: left;
		padding-left: 20px;
	}
</style>