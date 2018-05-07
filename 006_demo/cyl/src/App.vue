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
		font-size: 14px;
	}
	#app {
	  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  .vue_a{
	  	text-decoration: none;
	  }
	  .vue_button{
	  	border: none;
	  	outline: none;
	  	&:focus{
	  		outline: none;
	  	}
	  }
	  .vue_input{
	  	border: 1px solid #CCCCCC;
	  	outline: none;
	  }
	  .vue_textarea{
	  	border: 1px solid #CCCCCC;
	  	outline: none;
	  }
	  .vue_link{
	  	margin: 0;
	  	padding: 0;
	  	list-style-type: none;
	  	/*http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html*/
	  	display: flex;
	  	display: -webkit-flex;
	  	/*方向 row 水平 column垂直*/
	  	flex-direction: row;
	  	/*是否换行 nowrap 不换行 wrap 换行*/
	  	flex-wrap: nowrap;
	  	/*对齐方式 默认有五个值*/
	  	/*flex-start（默认值）：左对齐
			flex-end：右对齐
			center： 居中
			space-between：两端对齐，项目之间的间隔都相等。
			space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。*/
	  	justify-content: space-between;
	  	.vue_item{
	  		display: flex;
	  		display: -webkit-flex;
	  		flex-direction: column;
	  		justify-content: center;
	  	}
	  }
	  .vue_opacity{
	  	opacity: 0;
	  	-webkit-opacity: 0;
	  	-moz-opacity: 0;
	  }
	}
</style>
