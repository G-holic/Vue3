<template>
  <div class="homeBanner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<script>
import eventBus from "./utils/event-bus";
export default {
  methods: {
    bannerBtnClick() {
      console.log("bannerBtnClick");
      // 组件发出事件
      eventBus.emit("whyEvent", "why", 18, 1.88);
    },
  },
};
</script>

<style>
</style>