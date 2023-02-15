<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control
      :titles="['衣服', '鞋子', '裤子']"
      @tabItemClick="tabItemClick"
    />

    <!-- <tab-control :titles="['春天', '夏天', '冬天']"/> -->
    <!-- 2.展示内容 -->
    <h2>{{ pageContent[currentIndex] }}</h2>
  </div>
</template>

<script>
import TabControl from "./TabControl.vue";
export default {
  components: {
    TabControl,
  },
  data() {
    return {
      pageContent: ["衣服页面", "鞋子页面", "裤子页面"],
      currentIndex: 0,
    };
  },
  methods: {
    tabItemClick(index) {
      console.log("app", index), (this.currentIndex = index);
    },
  },
};
</script>

<style>
</style>