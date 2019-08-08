#小米商城简介
#前端主要使用vue.js搭建整个页面，后台部署使用nginx代理部署，端口号默认为80

#整个页面与后台的交互统一使用Global.vue中的
//异步加载数据
function getDataFromBack(url,param){
    return $.ajax({
       type:'post',
       data: JSON.stringify(param),
       url: "http://47.101.133.16:8082/milletshop/" + url,
			 contentType: "application/json; charset=utf-8",
			 dataType: "json",
			 success:function(res){
				 if(res != null){
					  return res;
				}
			 }
		 })
}
方法获取后台数据，其中Global中还包含一些全局使用的变量，如登陆名，登陆id等等，由于时间的关系，
只是做了一个大概的框架以及一些常用页面的展示如（具体物品的展示，手机列表，购物车页面等等）
