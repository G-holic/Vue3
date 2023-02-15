<template>
  <h2>Home组件</h2>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
export default {
  // keep-alive里的include 要对应每个组件的name
  name: "home",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  created() {
    console.log("home created");
  },
  unmounted() {
    console.log("home unmounted");
  },
  // 对于保持keep-alive组件，监听有没有进行切换
  // keep-alive组件
  activated() {
    console.log("home activated");
  },
  deactivated() {
    console.log("home deactivated");
  },
};
</script>

<style>
</style>