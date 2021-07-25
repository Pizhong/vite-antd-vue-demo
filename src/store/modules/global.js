/*
 * @Author: your name
 * @Date: 2021-07-25 11:15:35
 * @LastEditTime: 2021-07-25 11:19:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\src\store\modules\global.js
 */
const state = () =>({
  isLoading: false,
  loadingTip: '加载中',
})

const getters = {
  getIsLoading:state=> state.isLoading, // 获取是否加载中
  getLoadingTip:state=> state.loadingTip, // 获取加载文案
}
const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setLoadingTip(state,loadingTip){
    state.loadingTip = loadingTip
  },
}

export default{
  namespaced:true,
  state,
  getters,
  mutations,
}