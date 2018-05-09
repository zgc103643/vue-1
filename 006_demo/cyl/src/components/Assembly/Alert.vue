<template>
	<div class="alert_content" v-show="isShow == true" v-on:click="alertFun">
		
	</div>
</template>

<script>
	export default{
		name:'Alert',
		data(){
			return {
				isShow:true
			}
		},
		methods:{
			alertFun:function () {
				this.isShow = false;
			}
		}
	}
</script>

<style lang="scss">
	.alert_content{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		background-color: rgba(0,0,0,0.5);
	}
</style>