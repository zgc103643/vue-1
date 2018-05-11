<template>
  <div class="home_content">
    <div class="header">
    	<ul class="vue_link">
    		<li class="vue_item">
    			<div class="iconfont icon-caidan aside_icon" v-on:click="asideFun"></div>
    		</li>
    		<li class="vue_item title">{{msg}}</li>
				<li class="vue_item more">
					<router-link to='/View/Account/Info/08' class='vue_a'>
	    				<div class="iconfont icon-wode more_icon"></div>
	    		</router-link>
	    	</li>
    	</ul>
    </div>
    <div class="content">
    	<div class="banner">
				<template>
				  <el-carousel :interval="5000" arrow="always">
				    <el-carousel-item v-for="item in imgArr" :key="item">
				      <img class="_img" :src="item"/>
				    </el-carousel-item>
				  </el-carousel>
				</template>
    	</div>
    	<div class="tab">
    		<template>
				  <el-tabs v-model="activeName">
				    <el-tab-pane label="简介" name="first">
				    	<div class="info"><span>姓名</span> : jscyl</div>
				    	<div class="info"><span>联系方式</span> : 13849007907</div>
				    	<div class="info"><span>邮箱</span> : 13849007907@163.com</div>
				    	<div class="info"><span>GitHub</span> : https://github.com/cyl0430</div>
				    </el-tab-pane>
				    <el-tab-pane label="专业技术" name="second">专业技术</el-tab-pane>
				    <el-tab-pane label="项目管理" name="third">项目管理</el-tab-pane>
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
	      	'https://italyclassico.casacdn.com/image/prod/20180408/882726.jpg',
	      	'https://italyclassico.casacdn.com/image/prod/20180408/985150.jpg',
	      	'https://italyclassico.casacdn.com/image/prod/20180408/424512.jpg'
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
				._img{
					width: 100%;
					height: 100%;
					vertical-align: top;
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
					font-size: 14px;
					margin-left: 15px;
					span{
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
