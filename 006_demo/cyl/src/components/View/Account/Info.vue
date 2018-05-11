<template>
	<div class="info_content vue_content">
		<div class="hide vue_hide">{{$route.params.id}}</div>
		<el-button type="primary" v-on:click="isLoginFun">更改状态值为 1</el-button>
		状态值 : {{$store.state.count}}
	</div>
</template>

<script>
	export default{
		name:'Info',
		data(){
			return {
				
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
			isLoginFun() {
				this.$store.commit('changeLogin');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info_content{
		
	}
</style>