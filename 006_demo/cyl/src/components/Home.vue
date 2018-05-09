<template>
  <div class="home_content">
    <div class="header">
    	<ul class="vue_link">
    		<li class="vue_item">
    			<div class="iconfont icon-caidan aside_icon" v-on:click="asideFun"></div>
    		</li>
    		<li class="vue_item title">{{msg}}</li>
				<li class="vue_item more">
					<router-link to='/View/Public/00' class='vue_a'>
	    				<div class="iconfont icon-gengduo more_icon"></div>
	    		</router-link>
	    	</li>
    	</ul>
    </div>
    <div class="bottom">
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
				    <el-tab-pane label="个人介绍" name="first">个人介绍</el-tab-pane>
				    <el-tab-pane label="专业技能" name="second">专业技能</el-tab-pane>
				    <el-tab-pane label="项目管理" name="third">项目管理</el-tab-pane>
				  </el-tabs>
				</template>
    	</div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
	import Bottom from './Assembly/Bottom'
	
	export default {
	  name: 'Home',
	  components: {
			Bottom
		},
	  data () {
	    return {
	      imgArr:[
	      	'https://italyclassico.casacdn.com/image/prod/20180408/882726.jpg',
	      	'https://italyclassico.casacdn.com/image/prod/20180408/985150.jpg',
	      	'https://italyclassico.casacdn.com/image/prod/20180408/424512.jpg'
	      ],
	    	activeName: 'first',
	    	msg:'vue'
	    }
	  },
	  methods: {
		  asideFun:function () {
		  	
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
					}
					.more_icon{
						font-size: 24px;
					}
				}
				.title{
					text-transform: capitalize;
					font-weight: 600;
					font-size: 16px;
				}
			}
		}
		.bottom{
			.banner{
				._img{
					width: 100%;
					height: 100%;
					vertical-align: top;
				}
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
		}
	}
</style>
