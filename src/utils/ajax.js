/*
 * @Author: your name
 * @Date: 2021-07-25 11:00:14
 * @LastEditTime: 2021-07-25 12:49:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\src\utils\ajax.js
 */
import axios from 'axios'
import {message} from 'ant-design-vue'
import store from '../store'

message.config({
  duration:2 // 提示时常单位为s
})

axios.defaults.timeout = 50000 //请求超时时间
axios.defaults.timeoutErrorMessage = '请求超时，请稍后重试'

//请求拦截器
axios.interceptors.request.use(
  config => {
    store.commit('global/setIsLoading',true)
    store.commit('global/setLoadingTip',config.loadingTip || '加载中...')
    config.metadata = { startTime: new Date()}
    return config;
  },
  error => {
    store.commit('global/setIsLoading',false)
    return Promise.error(error);
}
)

//响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误

    store.commit('global/setIsLoading',false)
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
  },
  error => {
    store.commit('global/setIsLoading',false)
    if (error.response.status) {
      switch (error.response.status) {
          case 500:
              message.error("内部服务器错误")
              break
          case 501:
              message.error("页眉值指定了未实现的配置")
              break
          case 502:
              message.error("Web服务器用作网关或代理服务器时收到了无效响应")
              break
          case 503:
              message.error("服务不可用")
              break
          case 504:
              message.error("网关超时")
              break
          case 505:
              message.error("HTTP版本不受支持")
              break
          default:
              message.error("未知错误")
              break
      }
      return Promise.reject(error.response);
    }
  }
)

export default {
  // headers: application/json;charset=utf-8
  get(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'get',
                  url: params.url,
                  params: params.data || '',
                  headers: {
                      "Content-Type": 'application/json;charset=utf-8',
                  },
                  loadingTip: params.loadingTip
              })
              .then(res => {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/x-www-form-urlencoded;charset=UTF-8
  getForm(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'get',
                  url: params.url,
                  params: params.data || '',
                  // data: params.data || '',
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip
              })
              .then(res => {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  getFile(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'get',
                  url: params.url,
                  params: params.data || '',
                  responseType: 'blob',
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip
              })
              .then(res => {
                  resolve(res)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/json;charset=utf-8
  post(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'post',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": 'application/json;charset=utf-8'
                  },
                  timeout: params.timeout || 30000,
                  loadingTip: params.loadingTip
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/x-www-form-urlencoded;charset=UTF-8
  postForm(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'post',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip,
                  timeout: params.timeout || 30000
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  postFile(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'post',
                  url: params.url,
                  data: params.data || '',
                  responseType: 'blob',
                  headers: {
                      "Content-Type": "application/json;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip
              })
              .then(res => {
                  resolve(res)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/json;charset=utf-8
  del(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'delete',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": 'application/json;charset=utf-8'
                  },
                  loadingTip: params.loadingTip
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/x-www-form-urlencoded;charset=UTF-8
  delForm(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'delete',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/json;charset=utf-8
  put(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'put',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": 'application/json;charset=utf-8'
                  },
                  loadingTip: params.loadingTip
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  // headers: application/x-www-form-urlencoded;charset=UTF-8
  putForm(params) {
      return new Promise((resolve, reject) => {
          axios({
                  method: 'put',
                  url: params.url,
                  data: params.data || '',
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                  },
                  loadingTip: params.loadingTip
              })
              .then(function(res) {
                  resolve(res.data)
              })
              .catch(err => {
                  reject(err.data)
              })
      })
  },
  do(){
    console.log('ajax');
  }
}