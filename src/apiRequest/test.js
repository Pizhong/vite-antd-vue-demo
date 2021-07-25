/*
 * @Author: your name
 * @Date: 2021-07-25 12:53:51
 * @LastEditTime: 2021-07-25 13:06:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\src\apiRequest\test.js
 */
import ajax from '../utils/ajax'
import {message} from 'ant-design-vue'

export default {
  /**
   * @description: 获取测试接口的数据
   * @param {*}
   * @return {*}
   */  
  getTestData(){
    return ajax.get({
      url:'https://api.xygeng.cn/one'
    }).then(res=>{
      if(res.code && res.code==200){
        return res.data
      }
      else{
        message.error(res.message)
      }
    }).catch(err=>{
      console.log(err);
    })
  },
  do(){
    console.log('api');
  }
}