<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = '王五'">修改name</button>
  </div>
</template>

<script>
import { watchEffect, ref, watch } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const name = ref("李四");

    // watch(counter,(newValue,oldValue) = > {})

    // 1.watchEffect传入的函数默认会被执行
    // 2.在执行的过程中，会自动的收集依赖（依赖那些响应式的数据）
    // watchEffect有返回值
    const stopWatch = watchEffect(() => {
      console.log("---------", counter.value, name.value);

      // 判断counter.value >= 10
      if (counter.value >= 10) {
        stopWatch(); // 停止监听
      }
    });
    return {
      counter,
      name,
    };
  },
};
</script>

<style>
</style>