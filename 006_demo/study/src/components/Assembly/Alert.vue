<template>
	<div class="alert_content">
		<div class="alert_mak" v-show="isShow == true" @click="toHide">
			{{message}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'Alert',
		data(){
			return {

			}
		},
		props: ['isShow','message'],
		methods:{
			toHide:function () {
				this.$emit('layer');
			}
		}
	}
</script>

<style lang="scss">
	.alert_content{
		.alert_mak{
			width: 100vw;
			height: 100vh;
			text-align: center;
			line-height: 100vh;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 9999;
			background-color: rgba(0,0,0,0.5);	
			color: white;
		}
	}
</style>