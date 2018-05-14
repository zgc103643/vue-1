<template>
	<div class="info_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		 {{user_data}}
	</div>
</template>

<script>
	export default{
		name:'Info',
		data(){
			return {
				user_data:'登录用户名'
			}
		},
		mounted:function(){
			var isBool = document.querySelector('.hide'),
				isTitle = document.querySelector('.view_title');
			if (isBool.innerText == '08') {
				isTitle.innerText = '个人中心';
			}
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.info_content{
		
	}
</style>