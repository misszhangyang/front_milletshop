<script type="text/javascript">
import axios from 'axios';
import $ from 'jquery';
/**
    全局变量的引用
 */
const username = '';
const user_id = '';
const shoppingCarList = [];
const colorList = [
  '#F9F900',
  '#6FB7B7',
  '#9999CC',
  '#B766AD',
  '#B87070',
  '#FF8F59',
  '#FFAF60',
  '#FFDC35',
  '#FFFF37',
  '#B7FF4A',
  '#28FF28',
  '#1AFD9C',
  '#00FFFF',
  '#2894FF',
  '#6A6AFF',
  '#BE77FF',
  '#FF77FF',
  '#FF79BC',
  '#FF2D2D',
  '#ADADAD'
]
const colorListLength = 20;
const globalUrl = "http://127.0.0.1:8083/milletshop/";

function getRandColor () {
  var tem = Math.round(Math.random() * colorListLength)
  return colorList[tem];
}
function getUserName(){
  return username;
}
function getUserId(){
  return user_id;
}
function getShoppingCarList(){
  return shoppingCarList;
}
//异步加载数据
function getDataFromBack(url,param){
    return $.ajax({
       type:'post',
       data: JSON.stringify(param),
       url: "http://127.0.0.1:8083/milletshop/" + url,
			 contentType: "application/json; charset=utf-8",
			 dataType: "json",
			 success:function(res){
				 if(res != null){
					  return res;
				}
			 }
		 })
}
//axios加载数据
function getDateFromBackByAxios(url,param){
  debugger
  return new Promise((resolve,reject) => {
       axios.post("http://127.0.0.1:8083/milletshop/" + url,param).then((result) => {
         if(result != null){
         return resolve(result);
         }
       })
       .catch((err) => {
          return reject(err);
       })
  }) 
}
 

export default
{
  colorList,
  colorListLength,
  getRandColor,
  getUserName,
  globalUrl,
  getDataFromBack,
  getDateFromBackByAxios,
  getShoppingCarList,
  getUserId,
  shoppingCarList,
  username,
  user_id,
}
</script>