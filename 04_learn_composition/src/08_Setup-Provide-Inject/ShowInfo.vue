<template>
  <h2>ShowInfo: {{ name }}--{{ age }}--{{ height }}</h2>
</template>

<script>
import { inject } from "vue";
export default {
  // inject的options的 api注入，那么依然需要手动来解包
  // inject:["name","age"], 上面template需要name.value
  setup() {
    const name = inject("name");
    const age = inject("age");

    const height = inject("height", 1.88); // 1.88是给的默认值

    return {
      name,
      age,
      height
    };
  },
};
</script>

<style>
</style>