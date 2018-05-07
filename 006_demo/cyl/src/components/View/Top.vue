<template>
	<div class="view_content">
		<div class="header">
			<ul class="vue_link link">
				<li class="vue_item item">
					<button class="vue_button return" v-on:click="returnFun">返回上一页</button>
				</li>
				<li class="vue_item item vue_opacity">2</li>
				<li class="vue_item item vue_opacity">3</li>
			</ul>
		</div>
		<div class="bottom">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		methods:{
			returnFun:function () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss">
	.view_content{
		.header{
			height: 50px;
			width: 100%;
			border-bottom: 1px solid #CCCCCC;
			.link{
				height: 100%;
				width: calc(100% - 30px);
				margin: 0 auto !important;
				.item{
					.return{
						width: 80px;
						height: 35px;
						text-align: center;
						line-height: 35px;
						cursor: pointer;
						background-color: #000000;
						color: white;
					}
				}
			}
		}
		.bottom{
			padding: 15px;
			padding-bottom: 0;
			padding-right: 0;
		}
	}
</style>