<!--
 * @Author: your name
 * @Date: 2021-07-25 10:40:31
 * @LastEditTime: 2021-07-25 13:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\README.md
-->
<!--
 * @file: 
-->
# 说明
本项目是使用vite+vue3+vuex+vue-router+axios+ant-design-vue的初始化工程

# 工程目录
|-- 目录
    |-- index.html     模板html
    |-- package.json   相关依赖
    |-- vite.config.js   vite设置
    |-- public  
    |-- src
        |-- App.vue
        |-- main.js  //工程入口文件
        |-- apiRequest  //api层，用于管理接口请求
        |-- assets  //放置静态资源
        |-- components  //放置公共组件
        |-- router  //路由
        |-- store  //store管理层
        |-- utils  //放置工具类sdk
        |-- views //放置页面
# 运行
终端运行 
```
npm install
```
```
npm run dev
```

# 注意
如果运行过程中出现如下错误，需运行命令: node ./node_modules/esbuild/install.js 
```
  errno: -4058,
  code: 'ENOENT',
  syscall: 'spawn D:\\code\\vite-antd-vue-demo\\node_modules\\esbuild\\esbuild.exe',
  path: 'D:\\code\\vite-antd-vue-demo\\node_modules\\esbuild\\esbuild.exe',
  spawnargs: [ '--service=0.12.15', '--ping' ]
```