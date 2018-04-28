<template>
	<div class="index_content">
		<!--tab切换-->
		<div class="tab_content">
			<template>
				<el-tabs v-model="tabName" @tab-click="handleClick">
				    <el-tab-pane label="模块1" name="first">1</el-tab-pane>
				    <el-tab-pane label="模块2" name="second">2</el-tab-pane>
				    <el-tab-pane label="模块3" name="third">3</el-tab-pane>
				    <el-tab-pane label="模块4" name="fourth">4</el-tab-pane>
				</el-tabs>
			</template>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		data() {
			return {
				tabName: 'first'
			}
		},
		methods:{
			handleClick(tab, event) {
	        	
	      	}
		}
	}
</script>

<style lang="scss">
	.index_content {
		.tab_content{
			.el-tabs__nav{
				width: 100%;
				.el-tabs__item{
					padding: 0;
					width: 25%;
					text-align: center;
				}
			}
			.el-tabs__content{
				height: 300px;
				border-bottom: 1px solid #ccc;
				text-align: center;
				line-height: 300px;
			}
		}
	}
</style>