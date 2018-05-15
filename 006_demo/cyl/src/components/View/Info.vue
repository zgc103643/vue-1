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
					<el-button type="primary" class='btnObj'>删除收藏</el-button>
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