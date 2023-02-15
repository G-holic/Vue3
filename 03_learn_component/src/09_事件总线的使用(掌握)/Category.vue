<template>
  <div>category</div>
</template>

<script>
import eventBus from "./utils/event-bus";
export default {
  methods: {
    whyEventHandler() {
      console.log("whyEvent事件在Category.vue中的监听");
    },
  },
  created() {
    eventBus.on("whyEvent", this.whyEventHandler);
  },
  unmounted() {
    // 当组件被移除的时候
    console.log("category unmounted");
    eventBus.off("whyEvent", this.whyEventHandler);
  },
};
</script>

<style>
</style>