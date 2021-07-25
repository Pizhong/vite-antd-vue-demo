<!--
 * @Author: your name
 * @Date: 2021-07-25 10:40:31
 * @LastEditTime: 2021-07-25 13:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-antd-vue-demo\src\views\index.vue
-->
<!--
 * @file: 
-->
<template>
  <input type="text" v-model="input">
  <p>{{input}}</p>
  <div>{{name}}</div>
  <div>{{afterName}}</div>
  <div>count:{{count}}</div>
  <child></child>
  <button @click="addCount">click</button>
 <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <p>{{testContent}}</p>
</template>

<script>
import { computed , onMounted, ref ,getCurrentInstance} from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const {proxy} = getCurrentInstance()
    const input = ref('234')
    const count = ref(21)
    const store = useStore()
    const name = computed(()=>store.state.test.name)
    const afterName = computed(()=>store.getters['test/changeName'])
 
    const addCount=(()=>count.value++)
    const testContent = ref()
    const testApi = ()=>{
      proxy.$api.TestApi.getTestData().then(res=>{
        console.log(res);
        testContent.value=res.content
      })
    }
    onMounted(()=>{
      console.log(11111);
      testApi()
    })
    return{
      name,
      afterName,
      input,
      count,
      testContent,
      addCount,
      testApi
    }
  }
}
</script>

<style>

</style>