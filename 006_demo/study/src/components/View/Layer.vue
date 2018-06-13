<template>
	<div class="layer_content vue_content">
		<p class="title">Layer 两个页面之间的传值 :</p>
		<ul class="link">
			<li class="item">
				<el-button type="primary" v-on:click = 'layerFun'>Layer</el-button>
			</li>
		</ul>
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<Alert :isShow='isBool == true' :message='msg' @layer = 'hideMask'></Alert>
	</div>
</template>

<script>
	import Alert from '../Assembly/Alert'
	export default{
		name:'Layer',
		components: {
			Alert
		},
		data(){
			return {
				isBool:false,
				msg:'我是警告语'
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '002') {
				isTitle.innerText = '弹窗'
			}
		},
		methods:{
			layerFun:function () {
			  	this.isBool = true;
			},
			hideMask:function () {
			  	this.isBool = false;
			}
		}
	}
</script>

<style lang="scss">
	.layer_content{
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