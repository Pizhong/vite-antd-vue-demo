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
  <a-button type="primary">111</a-button>
  <a-button type="danger">111</a-button>
  <a-button type="href">111</a-button>
</template>

<script>
import { computed , onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const input = ref('234')
    const count = ref(21)
    const store = useStore()
    const name = computed(()=>store.state.test.name)
    const afterName = computed(()=>store.getters['test/changeName'])
 
    const addCount=(()=>count.value++)
    return{
      name,
      afterName,
      input,
      count,
      addCount
    }
  }
}
</script>

<style>

</style>