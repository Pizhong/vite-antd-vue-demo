/*
 * @file: store层入口文件
 */
import { createStore } from 'vuex'
import modules from './modules'

const store = createStore({
  modules,
})

export default store
