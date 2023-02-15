<template>
  <div>
    <h2>info: {{ name }} -- {{ age }} -- {{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height = 0.88">修改height</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const info = reactive({
      name: "李四",
      age: 18,
      height: 1.88
    });
    // reactive被解构后会变成普通的值，失去响应式
    // const { name, age } = info;
    // 加上toRefs解构，不会失去响应式（一次多个）
    const { name, age } = toRefs(info); 
    const height = toRef(info, "height") // 加上toRef解构，不会失去响应式（一次一个）

    return {
      info,
      name,
      age,
      height
    };
  },
};
</script>

<style>
</style>