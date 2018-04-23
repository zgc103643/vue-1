<template>
	<div class="pos">
		<el-row>
		  <el-col :span="8" class="pos_order" id='order-list'>
		  	<el-tabs >
		  		<el-tab-pane label='点餐'>
		  			<el-table :data='tableData' border style='text-align: center !important;'>
		  				<!--当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。-->
		  				<el-table-column prop='goodsName' label='商品名称' style='text-align: center !important;'></el-table-column>
		  				<el-table-column prop='count' label='数量' style='text-align: center !important;'></el-table-column>
		  				<el-table-column prop='price' label='金额' style='text-align: center !important;'></el-table-column>
		  				<el-table-column label='操作' style='text-align: center !important;'>
			  			  <template slot-scope="scope">
			  			  	<!--注意：如果在此处需要调用 addOrderList 方法，传递的参数，必须是 scope.row 
			  			  	原因： element 插件规定的方法-->
					        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
					        <el-button type="text" size="small" v-on:click='deleteProduct(scope.row)'>删除</el-button>
					      </template>
		  				</el-table-column>
		  			</el-table>
		  			<div>
		  				
		  			</div>
		  		</el-tab-pane>
		  		<el-tab-pane label='挂单'>
		  			挂单page
		  		</el-tab-pane>
		  		<el-tab-pane label='外卖'>
		  			外卖page
		  		</el-tab-pane>
		  	</el-tabs>
		  	<div class="all">
		  		<span>数量 ：{{totalCount}} </span>
		  		<span>金额 ：{{totalMoney}} 元</span>
		  	</div>
		  	<div class="pos_btns">
		  		<el-row>
				  <el-button type="success" v-on:click = 'deleteAll()'>删除</el-button>
				  <el-button type="danger" v-on:click = 'payFun()'>结账</el-button>
				</el-row>
		  	</div>
		  </el-col>
		  <el-col :span="16" class="pos_right">
		  	<div class="often_goods">
		  		<div class="title">常用商品</div>
		  		<div class="goods_list">
		  			<ul class="vue_ul goods_ul">
		  				<li class="goods_item" v-for='item in oftenGoods' v-on:click="addOrderList(item)">
		  					<span class="">{{item.goodsName}}</span>
		  					<span class="goods_span">￥{{item.price}}元</span>
		  				</li>
		  			</ul>
		  		</div>
		  		<div class="goods_type">
		  			<template>
					  <el-tabs>
					    <el-tab-pane label="汉堡">
					    	<div>
					    		<ul class='cookList'>
								    <li v-for="item in type0Goods" v-on:click="addOrderList(item)">
								        <span class="foodImg">
								        	<!--注意：img的src不能采用插值的方式要采用 :src 的方式-->
								        	<img :src="item.goodsImg" width="100%">
								        </span>
								        <span class="foodName">{{item.goodsName}}</span>
								        <span class="foodPrice">￥{{item.price}}元</span>
								    </li>
								</ul>
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="小食">
					    	<div>
					    		<ul class='cookList'>
								    <li v-for="item in type1Goods" v-on:click="addOrderList(item)">
								        <span class="foodImg">
								        	<img :src="item.goodsImg" width="100%">
								        </span>
								        <span class="foodName">{{item.goodsName}}</span>
								        <span class="foodPrice">￥{{item.price}}元</span>
								    </li>
								</ul>
					    	</div>
					    </el-tab-pane>
					    <el-tab-pane label="饮料">
					    	<div>
					    		<ul class='cookList'>
								    <li v-for="item in type2Goods" v-on:click="addOrderList(item)">
								        <span class="foodImg">
								        	<img :src="item.goodsImg" width="100%">
								        </span>
								        <span class="foodName">{{item.goodsName}}</span>
								        <span class="foodPrice">￥{{item.price}}元</span>
								    </li>
								</ul>
					    	</div>
					    </el-tab-pane>
					  </el-tabs>
					</template>
		  		</div>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	//引入axios
	import axios from 'axios'
	
	export default{
		name:'Pos',
		data(){
			return {
				tableData: [],
				oftenGoods:[],
				type0Goods:[],
				type1Goods:[],
				type2Goods:[],
				totalMoney:0,
				totalCount:0
			}
		},
		created:function () {
			//在创建的时候直接调用axios,执行顺序参照生命周期
			axios.get('http://jspang.com/DemoApi/oftenGoods.php').then(reponce=>{
				//此处为什么用es6的箭头函数？因为为了防止操作this的混乱，这里可以直接代指this
				//console.log(reponce);
				//从后台获取数据，并赋值
				this.oftenGoods = reponce.data;
			}).catch(error=>{
				//console.log(error);
				//如果获取失败的操作
				alert('操作失败');
			});
			
			axios.get('http://jspang.com/DemoApi/typeGoods.php').then(reponce=>{
				this.type0Goods = reponce.data[0];
				this.type1Goods = reponce.data[1];
				this.type2Goods = reponce.data[2];
			}).catch(error=>{
				alert('操作失败');
			})
		},
		mounted:function(){
			//所有的虚拟DOM操作完成结束后，执行此方法，原因：生命周期的作用
			//必须将 height：100% 放到此处
			//原声设置高度为100%
			var orderHeight = document.body.clientHeight;
			document.getElementById('order-list').style.height = orderHeight+'px';
		},
		methods:{
			addOrderList(item){
				//清零,防止重复添加
				this.totalMoney = 0;
				this.totalCount = 0;
				
				//先判断商品是否已经存在于订单列表中
				let isHave = false;//默认不存在
				for (let i = 0; i < this.tableData.length; i++) {
					if (this.tableData[i].goodsId == item.goodsId) {
						//如果 id 一致，说明商品存在，就改变 isHave 值
						isHave = true;
					}
				}
				//根据判断的值，如果存在，不添加，如果不存在，就添加
				if (isHave == true) {
					//改变列表中商品的数量
					//存在
					let arr = this.tableData.filter(a=> a.goodsId == item.goodsId);
					arr[0].count++;
				}else{
					//不存在
					let newGoods = {
						goodsId:item.goodsId,
						goodsName:item.goodsName,
						price:item.price,
						count:1
					};
					this.tableData.push(newGoods);
				};
				this.getAllMoney();
			},
			//单品删除
			deleteProduct(item){
				this.tableData = this.tableData.filter(a=> a.goodsId != item.goodsId);	
				this.getAllMoney();
			},
			//删除所有商品
			deleteAll(){
				this.tableData = [];
				this.totalCount = 0;
				this.totalMoney = 0;
			},
			//结账
			payFun(){
				this.tableData = [];
				this.totalCount = 0;
				this.totalMoney = 0;
			},
			//计算汇总价格和数量
			getAllMoney:function(){
			    this.totalCount=0;
			    this.totalMoney=0;
			    if(this.tableData){
		            this.tableData.forEach((element) => {
				        this.totalCount+=element.count;
				        this.totalMoney=this.totalMoney+(element.price*element.count);   
				    });
			    };
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pos{
		.pos_order{
			/*此处的 height:100%,不管用,必须通过JS设置才可以起作用*/
			height: 100%;
			background-color: #fff;
			text-align: center;
			border-right: 1px solid #CCCCCC;
			.pos_btns{
				margin-top: 10px;
			}
			.all{
				padding-top: 20px;
				padding-bottom: 20px;
				border-bottom: 1px solid #CCCCCC;
			}
		}
		.often_goods{
			width: 100%;
			font-family: "微软雅黑";
			.title{
				text-align: left;
				font-size: 16px;
				font-weight: 600;
				color: #000000;
				padding-left: 20px;
				height: 38px;
				line-height: 38px;
				border-bottom: 2px solid #e4e7ed;
				background-color: white;
			}
			.goods_list{
				padding: 20px;
				padding-bottom: 0;
				border-bottom: 2px solid #e4e7ed;
				.goods_ul{
					overflow: hidden;
					.goods_item{
						float: left;
						background-color: white;
						border: 1px solid #CCCCCC;
						width: 160px;
						font-size: 14px;
						text-align: center;
						padding-top: 5px;
						padding-bottom: 5px;
						cursor: pointer;
						margin-right: 20px;
						margin-bottom: 20px;
						.goods_span{
							color: #409EFF;
						}
						&:hover{
							background-color: #409EFF;
							border: 1px solid #409EFF;
							color: white;
							.goods_span{
								color: white;
							}
						}
					}
				}
			}
			.goods_type{
				.cookList li{
			        list-style: none;
			        width:23%;
			        border:1px solid #E5E9F2;
			        height: auot;
			        overflow: hidden;
			        background-color:#fff;
			        padding: 2px;
			        float:left;
			        margin: 2px;
			        cursor: pointer;
			 	   	span{
				        display: block;
				        float:left;
				   	}
				   	.foodImg{
				        width: 40%;
				    }
				    .foodName{
				        font-size: 18px;
				        padding-left: 10px;
				        color:brown;
				    }
				    .foodPrice{
				        font-size: 16px;
				        padding-left: 10px;
				        padding-top:10px;
				    }
			    }
			}
		}
	}
</style>