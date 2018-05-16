<template>
	<div class="tab_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="content">
			<div class="btns">
				<div class="btn" v-for="(item,index) in btnArr" :class="{btnActive : isCheck == index}" v-on:click="tabFun(index)">
					{{item}}
				</div>
			</div>
			<div class="pages">
				<div class="page" :class="isCheck == 0 ? 'pageActive' : ' '" >
					<ul class="link">
						<li class="item">姓名 : jscyl</li>
						<li class="item">电话 : 13849007907</li>
						<li class="item">邮箱 : 13849007907@163.com</li>
						<li class="item">
							<a href="https://github.com/cyl0430" target="_blank" class="vue_a">
								<div class="_web">
									GitHub : github.com/cyl0430
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="page" :class="isCheck == 1 ? 'pageActive' : ' '" >
					<ul class="link">
						<li class="item">1.掌握<span class="bold">grunt</span>配置sass/watch/uglify等环境</li>
						<li class="item">2.掌握<span class="bold">ajax</span>数据交互,渲染页面</li>
						<li class="item">3.熟练运用JQ，bootstrap，layer等框架</li>
						<li class="item">4.能根据项目的实际需求<span class="bold">封装插件</span></li>
						<li class="item">5.掌握响应式开发，调试页面兼容 ，ps切图</li>
						<li class="item">6.掌握<span class="bold">SVN</span>和<span class="bold">GitHub</span></li>
						<li class="item">7.掌握基本<span class="bold">ES6</span>语法,配置babel转化环境</li>
						<li class="item">8.掌握<span class="bold">Vue</span>,配置sass/axios等环境</li>
					</ul>
				</div>
				<div class="page" :class="isCheck == 2 ? 'pageActive' : ' '" >
					<ul class="link">
						<li class="item">
							<a href="http://eurooomall.top/" target="_blank" class="vue_a">
								<div class="_web">
									eurooo.top
								</div>
							</a>
						</li>
						<li class="item">
							<a href="https://www.italyclassico.com/" target="_blank" class="vue_a">
								<div class="_web">
									italyclassico.com
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Axios',
		data(){
			return {
				isCheck:0,
				btnArr:['简介','专业技能','项目管理']
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '006') {
				isTitle.innerText = '自定义 tab 标签'
			}
		},
		methods:{
			tabFun(index){
				this.isCheck = index;
			}
		}
	}
</script>

<style lang="scss">
	.tab_content{
		padding: 20px;
		.content{
			.btns{
				width: 100%;
				overflow: hidden;
				.btn{
					float: left;
					width: 33.3333%;
					height: 40px;
					text-align: center;
					line-height: 40px;
					font-size: 15px;
					background-color: #F2F2F2;
					color: #000000;
				}
				.btnActive{
					background-color: #000000;
					color: white;
				}
			}
			.pages{
				width: 100%;
				position: relative;
				.page{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					color: #000000;
					display: none;
					.link{
						list-style-type: none;
						.item{
							color: #000000;
							padding-bottom: 15px;
							._web{
								color: #000000;
							}
							.bold{
								padding-left: 5px;
								padding-right: 5px;
								font-weight: 600;
								font-size: 16px;
								color:#409EFF ;
								text-transform: capitalize;
							}
							&:first-child{
								padding-top: 15px;
							}
						}
					}
				}
				.pageActive{
					display: block;
				}
			}
		}
	}
</style>