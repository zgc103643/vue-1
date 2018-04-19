<template>
  <div class="worp">
  	<div class="top">
			{{ msg }}
  	</div>
  	<div class="content">
  		<ul class="link">
  			<router-link to='/Other' class='vue_a'>
	  			<li class="item">联系我们</li>
  			</router-link>
  			<router-link to='/Product/Index' class='vue_a'>
	  			<li class="item">查看商品</li>
  			</router-link>
  			<router-link to='/Account/Index' class='vue_a'>
	  			<li class="item">个人中心</li>
  			</router-link>
  		</ul>
  	</div>
  	<div class="bottom">
  		<router-link to='/goProduct' class='vue_a'>
	  		<div class="button">
	  			<!--我们只要在路由配置文件中（/src/router/index.js）把原来的component换成redirect参数就可以了-->
	  			<!--这里的 to 要和 path 中的内容保持一致-->
	  			重定向 : redirect
	  		</div>
  		</router-link>
  		<router-link to='/vuecyl' class='vue_a'>
	  		<div class="button">
	  			<!--redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
					alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。-->
	  			别名 : alias
	  		</div>
  		</router-link>
	  	<router-link to='/Login/Login' class='vue_a'>
	  		<div class="button">请登录</div>
  		</router-link>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods:{
  	goBack:function () {
  		this.$router.go(-1);
  	},
  	goNext:function () {
  		this.$router.go(1);
  	}
  }
}
</script>
<!--如果在此处添加了 scoped 代表这里的 css 样式只能在本单页中使用-->
<style scoped>
	.worp{
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translateX(-50%) translateY(-50%);
		-moz-transform: translateX(-50%) translateY(-50%);
		-ms-transform: translateX(-50%) translateY(-50%);
		-o-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
		width: calc(100% - 40px);
		width: -moz-calc(100% - 40px);
		width: -webkit-calc(100% - 40px);
	}
	.top{
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 50px;
		text-transform: capitalize;
	}
	.link{
		overflow: hidden;
	}
	.item{
		float: left;
		padding: 10px 20px;
		margin-right: 10px;
		margin-bottom: 10px;
		background-color: forestgreen;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		text-transform: capitalize;
	}
	.item:nth-child(3n){
		margin-right: 0;
	}
	.button{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: blue;
		margin-bottom: 10px;
	}
	.white{
		color: white;
	}
</style>
