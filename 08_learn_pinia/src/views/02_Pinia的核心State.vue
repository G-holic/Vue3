<template>
  <div class="home">
    <h2>home 页面</h2>
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>level: {{level}}</h2>
    <button @click="changeState">修改State</button>
    <button @click="resetState">重置State</button>

  </div>
</template>

<script setup>
import useUser from "@/stores/user";
import { storeToRefs } from "pinia";

const useStore = useUser();

const { name, age, level } = storeToRefs(useStore);

function changeState(){
    // 1.一个个修改状态（常用）
    // useStore.name = "张三"
    // useStore.age = 20
    // useStore.level = 100
    // 2. 一次性修改多个
    // useStore.$patch({ // 对象形式
    //     name:"王五",
    //     age:37
    // })
    // 3.替换state为新的对象
    useStore.$state = {
        name:"赵六",
        level: 200
    }

}
function resetState(){ // 默认提供的方法加$reset
    useStore.$reset()
}
</script>

<style>
</style>