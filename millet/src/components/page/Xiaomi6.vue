<template>
<body class="backcolor">
	<!-- 头部 -->
	<header>
			<div class="top center color">
				<div class="left fl">
					<ul>
						<li><a href="http://www.mi.com/" target="_blank">小米商城</a></li>
						<li>|</li>
						<li><a href="">MIUI</a></li>
						<li>|</li>
						<li><a href="">米聊</a></li>
						<li>|</li>
						<li><a href="">游戏</a></li>
						<li>|</li>
						<li><a href="">多看阅读</a></li>
						<li>|</li>
						<li><a href="">云服务</a></li>
						<li>|</li>
						<li><a href="">金融</a></li>
						<li>|</li>
						<li><a href="">小米商城移动版</a></li>
						<li>|</li>
						<li><a href="">问题反馈</a></li>
						<li>|</li>
						<li><a href="">Select Region</a></li>
						<div class="clear"></div>
					</ul>
				</div>
				<div class="right fr">
					<div class="gouwuche fr"><a href="">购物车</a></div>
					<div class="fr">
						<ul>
							<li><a href="./login.html" target="_blank">{{this.username}}</a></li>
							<li>|</li>
							<li><a href="./register.html" target="_blank" >{{this.login}}</a></li>
							<li>|</li>
							<li><a href="">消息通知</a></li>
						</ul>
					</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
		</header>
        <!-- 导航条 -->
		<div class="banner_x center backcolor">
			<a href="./index.html" target="_blank"><div class="logo fl"></div></a>
			<a href=""><div class="ad_top fl"></div></a>
			<div class="nav fl">
				<ul>
					<li><a href="">小米手机</a></li>
					<li><a href="">红米</a></li>
					<li><a href="">平板·笔记本</a></li>
					<li><a href="">电视</a></li>
					<li><a href="">盒子·影音</a></li>
					<li><a href="">路由器</a></li>
					<li><a href="">智能硬件</a></li>
					<li><a href="">服务</a></li>
					<li><a href="">社区</a></li>
				</ul>
			</div>
			<div class="search fr">
				<form action="" method="post">
					<div class="text fl">
						<input type="text" class="shuru"  placeholder="小米6">
					</div>
					<div class="submit fl">
						<input type="submit" class="sousuo" value="搜索"/>
					</div>
					<div class="clear"></div>
				</form>
				<div class="clear"></div>
			</div>
		</div>

		<form action="post" method="">
	<div class="xiangqing">
		<div class="neirong w">
			<div class="xiaomi6 fl">小米6</div>
			<nav class="fr">
				<li><a href="">概述</a></li>
				<li>|</li>
				<li><a href="">变焦双摄</a></li>
				<li>|</li>
				<li><a href="">设计</a></li>
				<li>|</li>
				<li><a href="">参数</a></li>
				<li>|</li>
				<li><a href="">F码通道</a></li>
				<li>|</li>
				<li><a href="">用户评价</a></li>
				<div class="clear"></div>
			</nav>
			<div class="clear"></div>
		</div>	
	</div>
	<!-- 详情 -->
	<div class="jieshao mt20 w">
		<div class="left fl"><img src="@/assets/image/liebiao_xiaomi6.jpg"></div>
		<div class="right fr">
			<div class="h3 ml20 mt20">{{this.phone.phoneName}}</div>
			<div class="jianjie mr40 ml20 mt10">{{this.phone.overView}}</div>
			<div class="jiage ml20 mt10">{{this.phone.phonePrice}}</div>
			<div class="ft20 ml20 mt20">选择版本</div>
			<div class="xzbb ml20 mt10">
				<div v-for="item in this.phoneVersion" class="banben fl version" :class="'versionsection' + item.id">
					<a @click="chooseVersion(item.phone_ram,item.phone_rom,item.id)">
						<span>{{item.phone_ram}} + {{item.phone_rom}}G</span>
					</a>
				</div>
				<div class="clear"></div>
			</div>
			<div class="ft20 ml20 mt20">选择颜色</div>
			<div class="xzbb ml20 mt10">
				<div v-for="item in this.phoneColor" class="banben fl version" :class="'colorsection' + item.id" style="text-align:center">
					<a @click="chooseColor(item.color,item.id)">
						<span>{{item.color}}</span>
					</a>
				</div>
			  <div class="clear"></div>
			</div>
			<div class="xqxq mt20 ml20">
				<div class="top1 mt10">
					<div class="left1 fl">{{this.phone.phoneName}} {{this.select.ram}}  {{this.select.rom}}  {{this.select.color}}</div>
					<div class="right1 fr">{{this.phone.phonePrice}} 元</div>
					<div class="clear"></div>
				</div>
				<div class="bot mt20 ft20 ftbc">总计：{{this.phone.phonePrice}}元</div>
			</div>
			<div class="xiadan ml20 mt20">
					<input class="jrgwc"  type="button" name="jrgwc" value="立即选购" />
					<input class="jrgwc" @click="addShoppingCart" type="button" name="jrgwc" value="加入购物车" />
				
			</div>
		</div>
		<div class="clear"></div>
	</div>
	</form>
	<!-- 尾部 -->
	<footer class="mt20 center">
			
			<div class="mt20">小米商城|MIUI|米聊|多看书城|小米路由器|视频电话|小米天猫店|小米淘宝直营店|小米网盟|小米移动|隐私政策|Select Region</div>
			<div>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号</div> 
			<div>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>

		</footer>
</body>
</template>
<script>
import "@/assets/css/style.css"
import axios from 'axios';
import $ from 'jquery';
export default{
    name:'Xiaomi6',
    data(){
      return{
				username:'',
				login: '登录',
				phone:{
					phoneName:'',
					phonePrice:'',
					overView:'',
					imagePath:'',
		    },
				select:{
          rom:'',
					ram:'',
					color:'',
				},
				changePrice:'',
				clickVersionId:[],
				clickColorId:[],
				phoneVersion:[]
      }
    },
    methods:{
     	addShoppingCart:function(){
			var _this = this;
			debugger
			//加入购物车是先进行配置校验
			if(!_this.select.rom || !_this.select.ram || !_this.select.color){		
        alert("加入购物车时请先选择手机配置信息");
				return;
			}
		  var ShoppingCarPhone = {
				   phoneName:_this.phone.phoneName + " " + _this.select.rom + "G"+ _this.select.ram + _this.select.color,
					 phonePrice:_this.phone.phonePrice,
					 count:1,
					 totalCount:_this.phone.phonePrice,
					 user_id:_this.GLOBAL.user_id,
			 };
			 _this.$router.push({
		  	     path:'/ShoppingCart',query:{ShoppingCarPhone}
		   })
		
		  },
		  chooseVersion:function(phone_ram,phone_rom,id){
				debugger
				var _this = this;
				_this.select.rom = phone_rom; 
				_this.select.ram = phone_ram;
				var int_rom = parseInt(phone_rom);				_this.phone.phonePrice = _this.phone.phonePrice - _this.changePrice;
				//依据不同的版本计算价格
				if(int_rom > 16){
					_this.changePrice = 1000;
				}
				if(int_rom == 16){
					_this.changePrice = 500;
				}
				_this.phone.phonePrice = _this.phone.phonePrice + _this.changePrice;
				//选择版本是的css样式变化，依据循环中不同的id来区分不同的手机版本，并动态的添加css样式
         if(_this.clickVersionId.indexOf(id) == -1){

           $(".versionsection"+id).addClass("clickversion");

					 for(let i = 0; i < _this.clickVersionId.length; i ++){

						   $(".versionsection"+_this.clickVersionId[i]).removeClass("clickversion");

							 let index = _this.clickVersionId.indexOf(_this.clickVersionId[i]);

							 _this.clickVersionId.splice(index,1);

					 }
					 _this.clickVersionId.push(id);

				 }else{

				  $(".versionsection"+id).removeClass("clickversion");

					_this.clickVersionId.splice(id,1);

				 }
			},
			chooseColor:function(phone_color,id){
				debugger
				var _this = this;
				_this.select.color = phone_color;
         if(_this.clickColorId.indexOf(id) == -1){
           $(".colorsection"+id).addClass("clickversion");
					 for(let i = 0; i < _this.clickColorId.length; i ++){
						   $(".colorsection"+_this.clickColorId[i]).removeClass("clickversion");
							 let index = _this.clickColorId.indexOf(_this.clickColorId[i]);
							 _this.clickColorId.splice(index,1);
					 }
					 _this.clickColorId.push(id);
				 }else{
				  $(".colorsection"+id).removeClass("clickversion");
					_this.clickColorId.splice(id,1);
				 }
			}
     
    },
    mounted:function(){
    //  this.username = this.$route.query.res.username;
		 this.username = this.GLOBAL.getUserName;
   	 this.login = this.username == null ? '登录' : '';
		 this.phone = this.$route.query.res.phone;
		 this.phoneColor = this.$route.query.res.colors;
		 this.phoneVersion = this.$route.query.res.versions;
    }
}
</script>
<style scoped>
  .backcolor{
    background-color: #ffffff
  }
  .color{
	  background: #333
  }
	.version{
		height: 50px !important; 
		width: 190px !important;
		
	}
	.clickversion{
		  background-color: #ff670045 !important;
			border:1px solid #ff6700 !important; 
	}
</style>





