<template>
    <body>
		<form  method="post" @submit.prevent="register">
		<div class="regist">
			<div class="regist_center">
				<div class="regist_top">
					<div class="left fl">会员注册</div>
					<div class="right fr"><a href="./index.html" target="_self">小米商城</a></div>
					<div class="clear"></div>
					<div class="xian center"></div>
				</div>
				<div class="regist_main center">
					<div class="username">用&nbsp;&nbsp;户&nbsp;&nbsp;名:&nbsp;&nbsp;<input class="shurukuang" v-model="username" type="text" name="username" placeholder="请输入你的用户名"/><span>请不要输入汉字</span></div>
					<div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;&nbsp;<input v-model="password"  class="shurukuang" type="password" name="password" placeholder="请输入你的密码"/><span>请输入6位以上字符</span></div>
					
					<div class="username">确认密码:&nbsp;&nbsp;<input  v-model="confpard" class="shurukuang" type="password" name="repassword" placeholder="请确认你的密码"/><span>两次密码要输入一致哦</span></div>
					<div class="username">手&nbsp;&nbsp;机&nbsp;&nbsp;号:&nbsp;&nbsp;<input v-model="phonenumber"  class="shurukuang" type="text" name="tel" placeholder="请填写正确的手机号"/><span>填写下手机号吧，方便我们联系您！</span></div>
					<div class="username">
						<div class="left fl">验&nbsp;&nbsp;证&nbsp;&nbsp;码:&nbsp;&nbsp;<input class="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
						<div class="right fl"><img src="@/assets/image/yanzhengma.jpg"></div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="regist_submit">
					<input class="submit" type="submit"  name="submit" value="立即注册" >
				</div>
				
			</div>
		</div>
		</form>
	</body>
</template>
<script>
import "@/assets/css/login.css"
import axios from 'axios';
import $ from 'jquery';
export default {
    name:'Register',
    data (){
      return {
        username:'',
        password:'',
        confpard:'',
        phonenumber:''
      }
    },
    methods:{
      register:function(){
          var _this = this;
          if(!_this.confirmPassword)
           alert("密码输入不一致，请重新输入");
           return;
          var user = {
            username:_this.username,
            password:_this.password,
            phoneNumber:_this.phonenumber
          }

          this.GLOBAL.getDataFromBack("user/register",user).then(res => {
                  if(res > 0){
                      alert('注册成功，请登录');
                      _this.$router.push({ path:"/"});
                  }else{
                      alert('注册失败，请检查用户名或密码是否重复');
                  }
          })
      },

      confirmPassword:function(){
          return this.password == this.confpard;
      }    
    }
}
</script>
