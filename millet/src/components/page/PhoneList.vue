<template>
    <!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
        <meta name="author" content="order by dede58.com"/>
		<title>小米手机列表</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
	</head>
	<body class="backcolor">
	<!-- start header -->
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
	<!--end header -->

<!-- start banner_x -->
		<div class="banner_x center">
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
		</div>
  
		<div class="danpin center">
			<div class="biaoti center">小米手机
			  <div class="search fr" style="margin-right:12%">
					<form action="" method="post"  @submit.prevent="queryByFuzzySearch">
						<div class="shurukuang fl">
							<input type="text" class="shuru decarewidth weizhi" v-model="queryphonename" placeholder="手机名称">
						</div>
						<div class="shurukuang fl">
							<input type="text" class="shuru decareminwidth weizhi" v-model="minId" placeholder="最小Id">
						</div>
						<label class="weizhi" style="margin-left:-11px;line-height:44px">--</label>
						<div class="shurukuang fl">
							<input type="text" class="shuru decaremaxwidth " v-model="maxId" placeholder="最大Id">
						</div>
							<input type="submit" class="shurukuang weizhi" value="搜索"/>
						<div class="clear"></div>
					</form>
					<div class="clear"></div>
		     	</div>
			</div>
			<div class="main center">
				<div  v-for="item in phoneList"
                class="mingxing fl mb20" style="border:2px solid #fff;width:220px;cursor:pointer;" onmouseout="this.style.border='2px solid #fff'" onmousemove="this.style.border='2px solid red'">
					<div class="sub_mingxing"><a href="./xiangqing.html" target="_blank"><img src="@/assets/image/liebiao_xiaomi6.jpg" alt=""></a></div>
					<div class="pinpai"><a href="../xiangqing.html" target="_blank">{{item.phoneName}}</a></div>
					<div class="youhui">{{item.overView}}</div>
					<div class="jiage">{{item.phonePrice}}元</div>
				</div>
				 
				<!-- <div class="clear"></div> -->
			</div>
			 <el-col :span="24" class="page pagehelper">
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
			<div class="main center mb20">
				<div class="clear"></div>
			</div>
		</div>

		<footer class="mt20 center">			
			<div class="mt20">小米商城|MIUI|米聊|多看书城|小米路由器|视频电话|小米天猫店|小米淘宝直营店|小米网盟|小米移动|隐私政策|Select Region</div>
			<div>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号</div> 
			<div>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>
		</footer>

	<!-- end danpin -->
	</body>
</html>
</template>
<script>
import "@/assets/css/login.css"
import axios from 'axios';
import $ from 'jquery';
export default {
    name:'PhoneList',
    data(){
        return{
		username:'',
		login: '登录',
         queryData:{
             phoneName:'',
             minId:'',
             maxId:''
         },
         queryphonename:'',
         minId:'',
         maxId:'',
         phoneList:[],
         imageList:[],
         imageNumber:0, 
		 imagePath:'',
		 currentPage:'',
		 pageSizesList:'',
		 pageSize:'',
		 totalCount:''
        }
    },
    created:function(){

    },
    methods:{
		search() {
            this.list = [];
            var filter = {
                PageIndex: this.page.currentPage,
                PageSize: this.page.pageSize,
                Line: this.filter.Line,
                ScheduleName: this.filter.ScheduleName
            }
            var _this = this;
            queryScheduleListByFilterForPage(this.$root.asi, filter).then(function(result){
                _this.list = result.ObjectList;
                _this.page.totalCount = result.TotalCount;
            }).catch(function(err){
                _this.$message.error(_this.$t(err));
            })
		},
		//模糊查询，如果有手机名，则按手机名搜索，如果没有，则直接以手机id进行搜索
		queryByFuzzySearch:function(){
			var _this = this;
			var fuzzySearch = {
				phoneName : this.queryphonename,
				minId : this.minId,
				maxId : this.maxId
			}
			this.GLOBAL.getDataFromBack("getPhoneByFuzzySearch",fuzzySearch).then(res => {
				_this.totalCount = res;
				_this.phoneList = res.slice(0,10);
			})
		},
       changeImagePath:function(phoneName){
        //    this.imagePath = this.imageList[this.imageNumber];
           this.imageNumber = this.imageNumber + 1;
           return phoneName;
       },
       queryPhoneList(){
    
	   },
	    handleSizeChange: function(val){
            this.page.pageSize = val;
            this.search();
        },
		  //翻页,当没有搜索条件时则直接按顺序查找
        handleCurrentChange: function(pageSize){
			var _this = this;
			//当有查询条件时，则翻页是为一次查询出来的结果按顺序查找
			if(!_this.queryphonename || (!_this.minId && !_this.maxId)){
                   if(_this.totalCount.length > 10){
					    _this.phoneList = _this.totalCount.slice(10,pageSize * 10);
				   }else{
					   alert("没有更多了^^");
				   }            
			}else{
                this.GLOBAL.getDataFromBack('queryByPageSize',pageSize).then(res => {
				_this.phoneList = res;
			})
			}
        },
    },
    mounted:function(){
		this.username = this.GLOBAL.getUserName;
	    this.login = this.username == null ? '登录' : '';
		this.currentPage = 1;
        this.phoneList = this.$route.query.phonelist;
    }
    
}
</script>
<style>
.phonename{
    width: 250px;
    height: 50px;
}
.backcolor{
    background-color: #ffffff
}
 .color{
	  background: #333
  }
.decarewidth{
    height: 40px;
    width: 100px !important
}
.decareminwidth{
    height: 40px;
    width: 70px;
    margin-left:14px
}
.decaremaxwidth{
    height: 40px; 
    width: 70px;
    margin-left:5px
}
.shurukuang{
    width: 100px;
    height:44px;
    line-height: 40px;
	font-size: 12px;
	float:left
}
.weizhi{
    position: absolute;
}
.pagehelper{
    text-align: right
}
</style>


