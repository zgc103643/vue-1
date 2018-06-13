<template>
  <div class="home_content">
    <div class="header">
    	<ul class="vue_link">
    		<li class="vue_item">
    			<div class="iconfont icon-caidan aside_icon" v-on:click="asideFun"></div>
    		</li>
    		<li class="vue_item title">{{msg}}</li>
				<li class="vue_item more">
					<router-link to='/View/Info/08' class='vue_a'>
	    				<div class="iconfont icon-wode more_icon"></div>
	    		</router-link>
	    	</li>
    	</ul>
    </div>
    <div class="content">
    	<div class="banner">
				<template>
				  <el-carousel :interval="5000" arrow="always">
				    <el-carousel-item v-for="item in imgArr" :key="item" class='img_div'>
				      <img class="_img" :src="item"/>
				    </el-carousel-item>
				  </el-carousel>
				</template>
    	</div>
    	<div class="tab">
    		<template>
				  <el-tabs v-model="activeName">
				    <el-tab-pane label="简介" name="first">
				    	<div class="info">
				    		<span>姓名 :</span>
				    		jscyl
				    	</div>
				    	<div class="info">
				    		<span>电话 :</span>
				    		138 - 4900 - 7907
				    	</div>
				    	<div class="info">
				    		<span>邮箱 :</span>
				    		13849007907@163.com
				    	</div>
				    	<div class="info">
				    		<span>GitHub :</span>
				    		<a href="https://github.com/cyl0430" class="vue_a" style="font-weight: normal;" target="_blank">
				    			github.com/cyl0430
				    		</a>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="专业技能" name="second" class='cyl'>
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
				    </el-tab-pane>
				    <el-tab-pane label="项目管理" name="third">
				    	<div class="info">
				    		<a href="http://eurooomall.top/" class="vue_a" target="_blank">
				    			<div class="info">
						    		<span>eurooo.top</span>
						    	</div>
				    		</a>
				    		<a href="https://www.italyclassico.com/" class="vue_a" target="_blank">
				    			<div class="info">
						    		<span>italyclassico.com</span>
						    	</div>
				    		</a>
				    	</div>
				    </el-tab-pane>
				  </el-tabs>
				</template>
    	</div>
    </div>
  	<Aside :isAsideData = 'isAside' @asideparams = 'closeLayer'></Aside>
  </div>
</template>

<script>
	import Aside from './Assembly/Aside'
	export default {
	  name: 'Home',
	  components:{
	  	Aside
	  },
	  data () {
	    return {
	      imgArr:[
	      	'http://jspang.com/resume/images/html5.png',
	      	'http://jspang.com/resume/images/javascript.png',
	      	'http://jspang.com/resume/images/grunt.png'
	      ],
	    	activeName: 'first',
	    	msg:'vue',
	    	isAside:false
	    }
	  },
	  methods: {
		  asideFun:function () {
		  	this.isAside = true;
		  },
		  closeLayer:function () {
		  	this.isAside = false;
		  }
		}
	}
</script>

<style lang="scss">
	.home_content{
		.header{
			border-bottom: 1px solid #CCCCCC;
			width: 100%;
			.vue_link{
				height: 50px;
				width: calc(100% - 30px);
				width: -moz-calc(100% - 30px);
				width: -webkit-calc(100% - 30px);
				margin:  0 auto !important;
				.vue_item{
					.aside_icon{
						font-size: 24px;
						color: #000;
					}
					.more_icon{
						font-size: 24px;
						color: #000;
					}
				}
				.title{
					text-transform: capitalize;
					font-weight: 600;
					font-size: 16px;
				}
			}
		}
		.content{
			.banner{
				.img_div{
					text-align: center;
					._img{
						width: 200px;
						height: 200px;
						vertical-align: top;
					}
				}
				.el-carousel__container{
					height: 214px;
				}
			}
			.tab{
				padding-bottom: 20px;
				.el-tabs__nav{
					width: 100%;
				}
				.el-tabs__item{
					padding: 0;
					width: 33.333333%;
					text-align: center;
				}
				.info{
					padding-top: 15px;
					padding-bottom: 15px;
					font-size: 14px !important;
					margin-left: 15px;
					span{
						font-size: 16px;
							font-weight: 600;
					}
					.vue_a{
						color: black;
						font-size: 16px;
						font-weight: 600;
					}
				}
				.cyl{
					.link{
						padding-left: 15px;
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
			}
		}
		.gray{
			width: 100%;
			height: 10px;
			background-color: #F2F2F2;
		}
		.caozui{
			padding-top: 15px;
			padding-bottom: 15px;
			padding-left: 10px;
			overflow: hidden;
			._params{
				margin-left: 10px;
			}
		}
	}
</style>
