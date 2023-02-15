<template>
  <!-- npm install hy-event-store 终端去操作安装它 -->
  <div class="app">
    <h2>App Message: {{ message }}</h2>
    <home></home>
    <button @click="isShowCategory = false">是否显示Category</button>
    <category v-if="isShowCategory"></category>
  </div>
</template>

<script>
import eventBus from "./utils/event-bus";
import Home from "./Home.vue";
import Category from "./Category.vue";

export default {
  components: {
    Home,
    Category,
  },
  data() {
    return {
      message: "hello World",
      isShowCategory: true,
    };
  },
  created() {
    // fetch()

    // 事件监听
    eventBus.on("whyEvent", (name, age, height) => {
      console.log("whyEvent事件在App.vue的监听", name, age, height);
      this.message = `name:${name}, age:${age}, height:${height}`; // 注意符号是``
    });
  },
};
</script>

<style>
</style>