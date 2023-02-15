<template>
  <div>App</div>
</template>

<script>
import {onMounted, onUpdated, onUnmounted} from 'vue'
export default {
  // created(){},
  // beforeMount(){},
  // mounted(){},
  // beforeUpdate(){},
  // updated(){}
  setup() {
    // 在执行setup函数的过程中，你需要注册别的生命周期函数
    onMounted(()=>{
        console.log("onMounted")
    })
   onMounted(()=>{
        console.log("onMounted")
    })
    onMounted(()=>{
        console.log("onMounted")
    })
  },
};
</script>

<style>
</style>