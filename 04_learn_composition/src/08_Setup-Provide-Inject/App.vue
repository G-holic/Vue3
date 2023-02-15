<template>
  <div>App: {{ name }}</div>
  <button @click="name = '张三'">app btn 改变姓名</button>
  <show-info />
</template>

<script>
import { provide, ref } from "vue";
import ShowInfo from "./ShowInfo.vue";

export default {
  components: {
    ShowInfo,
  },
  setup() {
    const name = ref("李四");

    provide("name", name);
    provide("age", 22);

    return {
      name,
    };
  },
};
</script>

<style>
</style>