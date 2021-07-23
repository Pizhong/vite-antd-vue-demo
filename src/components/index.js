/*
 * @file: 自定义组件入口文件
 */
import Child from './test/child.vue'

const components = [
  Child
]
export default{
  install(Vue){
    components.map(component=>{
      Vue.component(component.name,component)
    })
  }
}