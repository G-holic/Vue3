<script setup>
// 1.所有编写在顶层中的代码，都是默认暴露给template可以使用
import { ref,onMounted } from "vue";
import ShowInfo from "./ShowInfo.vue"; // 组件直接导入就可以使用
// 2.定义响应式数据
const message = ref("hello wrold");
console.log(message.value);
// 3.定义绑定的函数
function changeMessage() {
  message.value = "你好，李四";
}

function showInfoBtnClick(){
    console.log("监听到shoInfo内部的点击")
}
// 4. 组件实例
const showInfoRef = ref()
onMounted(()=>{
    showInfoRef.value.foo()
})
</script>
<template>
  <div>App: {{ message }}</div>
  <button @click="changeMessage">修改message</button>
  <show-info name="李四" :age="18" @showInfoBtnClick="showInfoBtnClick" ref="showInfoRef"></show-info>
 
</template>
    
<style>
</style>