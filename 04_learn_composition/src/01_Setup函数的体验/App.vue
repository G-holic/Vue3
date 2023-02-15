<template>
  <div class="app">
    <!-- templater中的ref对象会自动解包 -->
    <h2>当前计数 ：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref } from "vue";
import useCounter from "./hooks/useCounter";

export default {
  setup() {
    // 定义counter内容
    // 默认定义的数据都不是响应式数据
    // let counter = ref(100);
    // const increment = () => {
    //   counter.value++;
    // };
    // const decrement = () => {
    //   counter.value--;
    // };

    // const { counter, increment, decrement } = useCounter();

    return {
      // counter,
      // increment,
      // decrement,
      // 或者
      ...useCounter()
    };
  },
};
</script>

<style>
</style>