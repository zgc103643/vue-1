<template>
	<div class="alert_content">
		<div class="alert_mak" v-show="isShow == true">
			<el-button type="primary" @click="toHide">关闭弹框</el-button>
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
		props: ['isShow'],
		methods:{
			toHide:function () {
				this.$emit('hide');
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
		}
	}
</style>