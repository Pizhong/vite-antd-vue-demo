<!--
 * @file: 
-->
<template>
  <div>{{msg}}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'child',
  setup(){
    const msg = ref('我是子组件')
    return{
      msg
    }
  }

}
</script>

<style>

</style>