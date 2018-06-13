<template>
	<div class="collection_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="content">
			<div class="left">
				<i class="iconfont icon-shoucang1 coll_icon" v-bind:class="isCollection ? 'active_red' : 'active_black' "></i>
			</div>
			<div class="right" @click="collectionFun">
				{{collectionText}}
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Collection',
		data(){
			return{
				isCollection:false,
				collectionText:'收藏商品'
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == 'coll') {
				isTitle.innerText = '收藏'
			}
		},
		methods:{
			collectionFun:function () {
				this.isCollection = !this.isCollection;
				if (this.isCollection == true) {
					this.collectionText = '取消收藏'
				} else{
					this.collectionText = '收藏商品'
				}
			}
		}
	}
</script>

<style lang="scss">
	.collection_content{
		.content{
			overflow: hidden;
			.left{
				float: left;
				height: 30px;
				line-height: 30px;
				.coll_icon{
					font-size: 20px;
				}
			}
			.right{
				float: left;
				margin-left: 10px;
				height: 30px;
				line-height: 30px;
			}
			.active_red{
				color: red;
			}
			.active_black{
				color: black;
			}
		}
	}
</style>