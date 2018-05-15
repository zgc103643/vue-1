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
				    		https://github.com/cyl0430
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="专业技能" name="second">
				    	<div class="info">
				    		掌握grunt和vue搭建项目框架,配置sass/自动监听/代码压缩的环境
				    	</div>
				    	<div class="info">
				    		掌握ajax数据交互和dom渲染页面
				    	</div>
				    	<div class="info">
				    		熟练运用JQ，bootstrap，layer等优化代码
				    	</div>
				    	<div class="info">
				    		能根据项目的实际需求封装插件
				    	</div>
				    	<div class="info">
				    		掌握响应式开发，调试页面兼容 ，ps切图
				    	</div>
				    	<div class="info">
				    		掌握cdn预加载,雪碧图等优化代码的方法
				    	</div>
				    	<div class="info">
				    		掌握SVN和github的代码管理
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="项目管理" name="third">
				    	<div class="info">
				    		<a href="https://www.oujuhui.com/" class="vue_a" target="_blank">
				    			<div class="info">
						    		<span>oujuhui.com</span>
						    	</div>
				    		</a>
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
				border-bottom: 1px solid #CCCCCC;
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
