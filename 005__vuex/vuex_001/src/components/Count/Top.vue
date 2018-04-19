<template>
	<div class="top_content">
		<div class="header">
			<div class="return" v-on:click="returnFun">返回</div>
			<div class="title">{{msg}}</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Top',
		data(){
			return{
				msg:'Count'
			}
		},
		methods:{
			returnFun:function () {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang='scss' scoped>
	.top_content{
		.header{
			width: calc(100% - 40px);
			margin: 0 auto;
			padding-top: 20px;
			padding-bottom: 20px;
			text-align: center;
			border-bottom: 1px solid #CCCCCC;	
			position: relative;
			.return{
				position: absolute;
				left: 0;
				top: 16px;
				width: 60px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				background-color: #000;
				color: white;
				font-size: 13px;
				-webkit-border-radius: 15px;
				-moz-border-radius: 15px;
				border-radius: 15px;
				cursor: pointer;
			}
			.title{
				font-weight: 600;
				font-size: 16px;
			}
		}
		.content{
			width: calc(100% - 40px);
			margin: 0 auto;
			margin-top: 20px;
		}
	}

</style>