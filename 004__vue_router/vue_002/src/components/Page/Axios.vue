<template>
	<div class="module_Jquery">
		<ul class="link">
			<li class="item">全局安装<span class="redObj">Axios -- Axios从远程读取数据</span>的流程 : </li>
			<li class="item">
				1.cnpm install axios --save
			</li>
			<li class="item">
				2.在哪个.vue文件中使用，就在哪个页面中引入
			</li>
			<li class="item">
				3.import axios from 'axios'
			</li>
			<li class="item">
				4.安装完毕，接下来可以直接使用,详情见 006_demo/pos/src/components/Pos.vue 文件 123 行
			</li>
		</ul>
		<div class="worp">
			<el-row>
				<ul class="vue_ul">
					<li v-for="item in axiosArr">
						<el-button type="primary">{{item.goodsName}}</el-button>
					</li>
				</ul>
			</el-row>
		</div>
	</div>
</template>

<script>	
	import axios from 'axios'
	export default{
		name:'Axios',
		data(){
			return {
				axiosArr:[]
			}
		},
		created:function () {
			//在创建的时候直接调用axios,执行顺序参照生命周期
			axios.get('http://jspang.com/DemoApi/oftenGoods.php').then(reponce=>{
				//此处为什么用es6的箭头函数？因为为了防止操作this的混乱，这里可以直接代指this
				//console.log(reponce);
				//从后台获取数据，并赋值
				this.axiosArr = reponce.data;
			}).catch(error=>{
				//console.log(error);
				//如果获取失败的操作
				alert('操作失败');
			});
		},
	}
</script>

<style scoped>
	.link{
		width: calc(100% - 40px);
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.item{
		margin-bottom: 15px;
		font-size: 14px;
	}
</style>