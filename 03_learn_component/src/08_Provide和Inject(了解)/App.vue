<template>
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <!-- 真实开发不要再响应式里面不要写赋值语句 -->
    <button @click="message = 'hello app'">改变message</button>
  </div>
</template>

<script>
import { computed } from "vue";

import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: "hello World",
    };
  },
  // 父给子提供数据
  // provide:{
  //     name: "李四",
  //     age: 18
  // }
  // 函数形式，从data 获取return的数据提供给子组件 (一般都是写成函数形式)
  provide() {
    return {
      name: "李四",
      age: 18,
      //   message: this.message,
      message: computed(() => {
        //箭头函数的this是绑定当前provide的this
        return this.message;
      }),
    };
  },
};
</script>

<style>
</style>