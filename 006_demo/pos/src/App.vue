<template>
	<div id="app">
		<leftNav></leftNav>
		<div class="main">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import leftNav from '@/components/Common/LeftNav'
	
	export default {
		name: 'App',
		components:{
			leftNav
		}
	}
</script>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
	}
	html,body,#app {
		height: 100%;
		font-family: "微软雅黑";
		.vue_a {
			text-decoration: none;
		}
		.vue_btn {
			border: none;
			outline: none;
		}
		.vue_btn:focus {
			outline: none;
		}
		.vue_input {
			outline: none;
			border: 1px solid #CCCCCC;
		}
		.vue_ul{
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		.main{
			float: left;
			width: 95%;
			overflow: hidden;
			height: 100%;
			background-color: #F2F2F2;
		}
	}
</style>