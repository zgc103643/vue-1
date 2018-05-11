<template>
	<div class="watch_content vue_content">
		<p class="title">Watch 监听 页面初始化判断 :</p>
		<ul class="link">
			<li class="item">step1 : 使用 create 钩子函数 created:{this.XXX()}</li>
			<li class="item">step2 : 使用 watch 监听,每当路由改变时就执行此方法 '$route': 'XXX'</li>
			<li class="item">step3 : 在 methods 方法中,在最开始的地方写 XXX 方法,将你需要初始化的全部数据放到 XXX 方法中</li>
		</ul>
		<div>
			index的原始数据为 : 0 ;
			<br />
			但在此处强制设置 index 初始化的值为 : {{number}}
		</div>
		<div class="hide vue_hide">{{$route.params.id}}</div>
	</div>
</template>

<script>
	export default{
		name:'Watch',
		data(){
			return {
				number : 0
			}
		},
		created () {
	    	this.fetchData()
	  	},
	  	watch: {
	    	'$route': 'fetchData'
	  	},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '003') {
				isTitle.innerText = 'Watch'
			}
		},
		methods:{
			fetchData:function () {
				this.number = 1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.watch_content{
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