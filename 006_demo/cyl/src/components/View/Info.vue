<template>
	<div class="info_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="worp">
			<div class="title">常见功能 :</div>
			<div class="list">
				<router-link to='/View/Scroll/scroll'>
					<el-button type="primary" class='btnObj'>加载更多</el-button>
				</router-link>
				<router-link to='/View/Delect/del'>
					<el-button type="primary" class='btnObj'>删除指定元素</el-button>
				</router-link>
				<router-link to='/View/Collection/coll'>
					<el-button type="primary" class='btnObj'>商品收藏</el-button>
				</router-link>
				<router-link to='/View/Product/pro'>
					<el-button type="primary" class='btnObj'>JS控制页面跳转</el-button>
				</router-link>
				<router-link to='/View/404'>
					<el-button type="primary" class='btnObj'>配置 404 页面</el-button>
				</router-link>
				<router-link to='/View/Assemb/001'>
					<el-button type="primary" class='btnObj'>引入自定义组件</el-button>
				</router-link>
				<router-link to='/View/Layer/002'>
					<el-button type="primary" class='btnObj'>两个页面之间的传值,如 弹窗</el-button>
				</router-link>
				<router-link to='/View/Watch/003'>
					<el-button type="primary" class='btnObj'>初始化判断 watch监听</el-button>
				</router-link>
				<router-link to='/View/Time/004'>
					<el-button type="primary" class='btnObj'>倒计时</el-button>
				</router-link>
				<router-link to='/View/Cookie/005'>
					<el-button type="primary" class='btnObj'>cookie</el-button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Info',
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '08') {
				isTitle.innerText = '个人中心';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info_content{
		.worp{
			.title{
				font-weight:600;
				font-size: 20px;
			}
			.list{
				margin-top: 15px;
				.btnObj{
					margin-right: 15px;
					margin-bottom: 15px;
				}
			}
		}
	}
</style>