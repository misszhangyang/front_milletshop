<template>
		<body> 
		 <div class="top center">
			<div class="logo center">
				<a href="./index.html" target="_blank"><img src="../assets/image/mistore_logo.png" alt=""></a>
			</div>
		</div>
		<form  method="post" @submit.prevent="showData"  class="form center">
		<div class="login">
			<div class="login_center">
				<div class="login_top">
					<div class="left fl">会员登录</div>
					<div class="right fr">您还不是我们的会员？<a style="cursor:pointer" @click="toRegisterPage" target="_self" >立即注册</a></div>
					<div class="clear"></div>
					<div class="xian center"></div>
				</div>
				<div class="login_main center">
					<div class="username">用户名:&nbsp;<input v-model="username" class="shurukuang" placeholder="请输入你的用户名"/></div>
					<div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input v-model="password" class="shurukuang"  placeholder="请输入你的密码"/></div>
					<div class="username">
						<div class="left fl">验证码:&nbsp;<input class="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
						<div class="right fl"><img :src="this.imagepath"></div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="login_submit">
					<input class="weixin"  @click="weixinSubmit"  value="微信登录" >
					<input class="qq"   @click="qqSubmit" value="QQ登录" >
				</div>
				<div class="login_submit">
					<input class="submit" type="submit" name="submit" value="立即登录" >
				</div>
			</div>
		</div>
		</form>
		<footer>
			<div class="copyright">简体 | 繁体 | English | 常见问题</div>
			<div class="copyright">小米公司版权所有-京ICP备10046444-<img src="../assets/image/ghs.png" alt="">京公网安备11010802020134号-京ICP证110507号</div>
		</footer>
	</body> 
</template>

<script>
import "../assets/css/login.css"
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'Login',
  data () {
    return {
      username:"",
			password:"",
			imagepath: require("../assets/image/yanzhengma.jpg"),
    }
  },
  methods:{
    showData:function(){
		var _this = this;
		var user = {
			username : this.username,
			password : this.password
		}
		var url = "user/login";
		debugger
		this.GLOBAL.getDataFromBack(url,user).then(res => {
			    var result = res.result;
                if (result.resultCode == 100) {
					debugger
					_this.toIndexPagte(result.resultValue);
				}else{
					alert("提交数据失败,用户或则密码错误，请注册再登录");
				}
		})
		},
	toIndexPagte(resultValue){
		this.GLOBAL.getUserName = resultValue.username;
		this.GLOBAL.user_id = resultValue.id;
		var userName = resultValue.username;
		this.$router.push({path:'/IndexPage',query:{userName}});
	},
	toRegisterPage:function(){
		this.$router.push({
			path:"/Register"
		});
	},
	weixinSubmit:function(){
		$.ajax({
			type: "POST",
			url: "https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=ACCESS_TOKEN",
			contentType: "application/json; charset=utf-8",
			data:{
			access_token:'',
			path:'',
			width:'',
			},
			dataType: "json",
			success: function (result) {
				if (null != result) {
					// alert("你好，" + result +",登陆成功，正在跳转开始界面");
					this.$router.push({	path:'/Index',query:{key:"key",username:result}});
				}else{
					alert("提交数据失败,用户或则密码错误，请注册再登录");
					}
			}
	});
	},
	weixinSubmit:function(){

	},
	qqSubmit:function(){

	}
  }
}
</script>
<style scoped>
</style>
