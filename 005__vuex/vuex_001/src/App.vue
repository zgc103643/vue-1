<template>
  <div id="app">
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
	}
	.vue_a{
		color: white;
		text-decoration: none;
	}
	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.redObj{
		color: red;
		margin-left: 5px;
		margin-right: 5px;
	}
	.vue_btn{
		width: 60px;
		height: 30px;
		border: none;
		background-color: #000000;
		color: white;
		font-size: 14px;
		cursor: pointer;
		outline: none;
		&:hover{
			background-color: #0CBC56;
			-webkit-border-radius: 15px;
			-moz-border-radius: 15px;
			border-radius: 15px;
			-webkit-transition: all .3s;
			-moz-transition: all .3s;
			-ms-transition: all .3s;
			-o-transition: all .3s;
			transition: all .3s;
		}
		&:focus{
			outline: none;
		}
	}
	.vue_view{
		font-size: 16px;
		color: red;
		font-weight: 600;
		margin-left: 8px;
		margin-right: 8px;
	}
	.vue_span{
		margin-left: 10px;
		color: red;
	}
</style>
