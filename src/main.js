/*
 * @Author: your name
 * @Date: 2021-07-25 10:40:31
 * @LastEditTime: 2021-07-25 13:17:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './utils/ajax'
import myComponents from './components'
// import 'ant-design-vue/dist/antd.css';

import apiRequest from './apiRequest'

import { 
  Button,
  message,
  } from 'ant-design-vue';

const app = createApp(App)

app.use(Button)
app.use(message)
app.use(myComponents)
app.use(router)
app.use(store)

app.config.globalProperties.$ajax = ajax
app.config.globalProperties.$message = message
app.config.globalProperties.$api = apiRequest

app.mount('#app')
