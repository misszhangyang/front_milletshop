<template>
<html>
	<head>
		<meta charset="UTF-8">
        <meta name="author" content="order by dede58.com"/>
		<title>我的购物车-小米商城</title>
		<link rel="stylesheet" type="text/css" href="./css/style.css">
	</head>
	<body class="backcolor">
		<div class="banner_x center">
			<a href="./index.html" target="_blank"><div class="logo fl"></div></a>
			
			<div class="wdgwc fl ml40">我的购物车</div>
			<div class="wxts fl ml20">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
			<div class="dlzc fr">
				<ul>
					<li><a href="./login.html" target="_blank">{{this.username}}</a></li>
					<li>|</li>
					<li><a href="./register.html" target="_blank">{{this.login}}</a></li>	
				</ul>
				
			</div>
			<div class="clear"></div>
		</div>
		<div class="xiantiao"></div>
		<div class="gwcxqbj">
			<div class="gwcxd center">
				<div class="top2 center">
					<div class="sub_top fl">
						<input type="checkbox" @click="quanxuan" value="quanxuan" class="allselect" />全选
					</div>
					<div class="sub_top fl">商品名称</div>
					<div class="sub_top fl">单价</div>
					<div class="sub_top fl">数量</div>
					<div class="sub_top fl">小计</div>
					<div class="sub_top fr">操作</div>
					<div class="clear"></div>
				</div>
			  <div class="content2 center" v-for="item in shoppingCarList">
						<div class="sub_content fl ">
							<input type="checkbox" value="quanxuan" class="allselect" />
						</div>
						<div class="sub_content fl"><img src="@/assets/image/gwc_xiaomi6.jpg"></div>
						<div class="sub_content fl ft20">{{item.phoneName}}</div>
						<div class="sub_content fl ">{{item.phonePrice}}</div>
						<div class="sub_content fl">
							<input class="shuliang" type="number" v-model="item.count" step="1" min="1" >
						</div>
						<div class="sub_content fl">{{item.totalCount}}</div>
						<div class="sub_content fl"><a href="">×</a></div>
						<!-- <div class="clear"></div> -->
				        </div> 
			</div>
			<el-col :span="24"  class="page pagehelper">
			    <el-pagination 
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="pageSizesList"
					:page-size="pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="totalCount">
			    </el-pagination>
           </el-col>
			<div class="jiesuandan mt20 center">
				<div class="tishi fl ml20">
					<ul>
						<li><a href="./liebiao.html">继续购物</a></li>
						<li>|</li>
						<li>共<span>2</span>件商品，已选择<span>1</span>件</li>
						<div class="clear"></div>
					</ul>
				</div>
				<div class="jiesuan fr">
					<div class="jiesuanjiage fl">合计（不含运费）：<span>2499.00元</span></div>
					<div class="jsanniu fr"><input class="jsan" type="submit" name="jiesuan"  value="去结算"/></div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
     
		  <div class="main center mb20">
				<div class="clear"></div>
			</div>
		</div>
	<!-- footer -->
	<footer class="center">
			<div class="mt20">小米商城|MIUI|米聊|多看书城|小米路由器|视频电话|小米天猫店|小米淘宝直营店|小米网盟|小米移动|隐私政策|Select Region</div>
			<div>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号</div> 
			<div>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>
		</footer>

	</body>
</html>
</template>
<script>
import "@/assets/css/style.css"
import axios from 'axios';
import $ from 'jquery';
export default {
    name:'ShoppingCart',
    data (){
      return {
	    quanxuanNumber:0,
        username:'',
        login: '登录',
        password:'',
		shoppingCarPhone:{
			phoneName:'',
			phonePrice:'',
			count:'',
			totalCount:''
	    },
		shoppingCarList:[],
      }
    },
	created(){
			//在页面加载时读取数据库中的购物车信息
		    this.getPhoneListBeforePageLoading();
	},
    methods:{
	   //点击全选按钮触发的事件
            quanxuan:function(){
				if(this.quanxuanNumber == 1){
					$(".allselect").prop("checked",false);
					this.quanxuanNumber = 0
				}else{
					$(".allselect").prop("checked","checked");
					this.quanxuanNumber = 1
					 } 
				},
				getPhoneListBeforePageLoading:function(){
					var isRepeatPhoneName = false;
					var _this = this;
					_this.shoppingCarPhone = _this.$route.query.ShoppingCarPhone;
		     	    _this.shoppingCarList.push(_this.shoppingCarPhone);
					 //商品入库，名称重复等情况交给后台去判断
		    	    _this.GLOBAL.getDataFromBack("addPhoneToShoppingCar",_this.shoppingCarPhone).then(res => {
					//从数据库中查询当前的值是否已经有重复的商品，如果有，则将数量加一，没有，则入库
  					if(res != null){
						  _this.shoppingCarList = res;
					}
		        });
			}
		},
    mounted:function(){
			var _this = this;
			_this.username = _this.GLOBAL.getUserName;
			_this.login = _this.username == null ? '登录' : '';
    }
}
</script>
<style>
.backcolor{
    background-color: #ffffff
  }
</style>

