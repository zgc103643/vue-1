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

<style>
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
</style>
