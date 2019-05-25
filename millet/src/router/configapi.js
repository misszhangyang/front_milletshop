import axios from 'axios';
import $ from 'jquery'

import {DataInit} from './dataInit'

//获取所有Line信息
export const queryLineList = function (asi) {
    return axios.post(asi.Url + '/api/Config/QueryLineList').then(res => DataInit(res.data)).catch(err => {return Promise.reject(err)})
}

//根据Line查询OP列表
export const queryOPListByLineForPage = function (asi, params) {
    return axios.post(asi.Url + '/api/Config/QueryOPListByLineForPage', params).then(res => DataInit(res.data)).catch(err => {return Promise.reject(err)})
}

//查找Line是否包含OP
export const hasOPByLine = function (asi, params) {
     debugger
     $.ajax({
        type:'get',
        url:'http://127.0.0.1:8083/milletshop/queryByPageSize',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:function(res){
            if(res != null){
              return  _this.toPhoneListPage(res);
            }
        }
    })
}
