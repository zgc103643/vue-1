<template>
	<div class="delect_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="d_content">
			<div class="list" v-for="(item,index) in delectArr" v-if="isShow == true">
				<el-button type="primary" class='del_btn' @click='delFun(index)'>{{item}}</el-button>
			</div>
			<div class="content" v-if="isShow == false">
				暂无收藏
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Delect',
		data(){
			return {
				delectArr:['删除1','删除2','删除3','删除4'],
				isShow:true
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == 'del') {
				isTitle.innerText = '删除'
			}
			if (this.delectArr.length > 0) {
				this.isShow = true;
			} else{
				this.isShow = false;
			}
		},
		methods:{
			delFun(index) {
				// 此处采用 JS原声的 splace 方法
				// X.splace(index,howmany)
				//index	   必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置
				//howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目
				this.delectArr.splice(index,1);
				if (this.delectArr.length == 0) {
					this.isShow = false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.delect_content{
		.d_content{
			.list{
				text-align: right;
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #CCCCCC;
				.del_btn{
					margin-right: 20px;
				}
			}
			.content{
				text-align: center;
				margin-top: 50px;
				font-size: 30px;
			}
		}
	}
</style>