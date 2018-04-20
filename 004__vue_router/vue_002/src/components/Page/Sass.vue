<template>
	<div class="module_element">
		<ul class="link">
			<li class="item">
				全局安装<span class="redObj">Sass</span>的流程 : 
			</li>
			<li class="item">
				1.安装 sass 的依赖包
			</li>
			<li class="item">
				2.cnpm install --save-dev sass-loader
			</li>
			<li class="item">
				3.cnpm install --save-dev node-sass
			</li>
			<li class="item">
				4.找到build / webpack.base.conf.js 文件 中的 rules 数组
			</li>
			<li class="item">
				5.在其中第二个对象元素后添加配置 
				{
				  test: /\.sass$/,
				  loaders: ['style', 'css', 'sass']
				}
			</li>
			<li class="item">
				6.在style标签中添加 lang="scss"
			</li>
			<li class="item">
				7.cnpm run dev 重新启动程序即可
			</li>
		</ul>
		<button class="btn">{{msg}}</button>
	</div>
</template>

<script>
	export default {
		name:'Sass',
		data(){
			return {
				msg:'Sass 安装成功'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.module_element{
		.link{
			width: calc(100% - 40px);
			margin: 0 auto;
			margin-top: 20px;
			.item{
				margin-bottom: 15px;
				font-size: 14px;
				color: #000000;
			}
		}
		.btn{
			width: 50%;
			height: 40px;
			background-color: #000;
			line-height: 40px;
			font-size: 14px;
			color: white;
			border: none;
			margin-left: 20px;
			margin-top: 20px;
		}
		.btn:focus{
			outline: none;
		}
	}
</style>