<template>
  <div class="home">
    <h2>home 页面</h2>
    <h2>count:{{counterStore.count}}</h2>
    <h2>count:{{count}}</h2>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<script setup>
import {toRefs} from 'vue' // vue库中的响应式方法
import {storeToRefs} from 'pinia' // pinia库中的响应式方法
import useCounter from "@/stores/counter"; // @是代表src文件夹

const counterStore = useCounter();

// const { count } = counterStore;// 解构将失去响应式

// const { count } = toRefs(counterStore) // 转为ref对象响应式
const { count } = storeToRefs(counterStore)

function incrementCount() {
  counterStore.count++;
}
</script>

<style>
</style>