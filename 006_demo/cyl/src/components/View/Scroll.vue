<template>
	<div class="scroll_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<div class="s_content">
			<div class="p_worp">
				<p v-for="item in p_arr">{{item}}</p>
			</div>
			<div class="more_btn">
				<el-button type="primary" v-on:click = 'moreFun'>加载更多</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Scroll',
		data(){
			return{
				//假设为原始数组
				p_arr:['A','B','C']
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == 'scroll') {
				isTitle.innerText = '加载更多'
			}
		},
		methods:{
			moreFun:function () {
				//模拟从后台接收的数组
				var new_arr = ['A','B','C','D','E','F','G','H','I','J','K','L'];
				this.p_arr = new_arr;
			}
		}
	}
</script>

<style lang="scss">
	.scroll_content{
		.s_content{
			.p_worp{
				p{
					height: 30px;
					line-height: 30px;
					border-bottom: 1px solid #CCCCCC;
				}	
			}
			.more_btn{
				text-align: center;
				margin-top: 20px;
			}
		}
	}
</style>