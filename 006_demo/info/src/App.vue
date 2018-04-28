<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: '微软雅黑', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 14px;
		.cyl_ul{
			list-style-type: none;
			padding: 0;
			margin: 0;
		}
		.cyl_button{
			outline: none;
			&:focus{
				outline: none;
			}
		}
		.cyl_input{
			border: 1px solid #ccc;
			outline: none;
			text-indent: 1em;
		}
		.cyl_a{
			text-decoration: none;
			color: #000;
			font-size: 14px;
		}
		.cyl_textarea{
			border: 1px solid #ccc;
			outline: none;
			text-indent: 1em;
		}
		.cyl_border{
			background-color: #f2f2f2;
			height: 10px;
			width: 100%;
		}
	}
</style>