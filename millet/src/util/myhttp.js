import axios from 'axios'

export function get(url,params){
    return new  Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        }).then(res => {
            resolve(res,data);
        }).catch(err =>{
           reject(err.data);
        })
    });
}