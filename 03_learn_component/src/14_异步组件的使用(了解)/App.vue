<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button
          :class="{ active: currentTab === item }"
          @click="btnClick(item)"
        >
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"; // 调用vue准备好的函数 defineAsyncComponent

import Home from "./views/Home.vue";
import About from "./views/About.vue";
// import Category from "./views/Category.vue"; // 让Category进行webpack分包
// const Category = import('./views/Category.vue') // 不可以，import函数返回的是Promise对象，下面将不能注册为组件
const AsyncCategory = defineAsyncComponent(() =>
  import("./views/Category.vue")
);

export default {
  components: {
    Home,
    About,
    Category: AsyncCategory, //Category局部组件名字不变，AsyncCategory是它的异步组件名字
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      // currentIndex: 0,
      currentTab: "home",
    };
  },
  methods: {
    // btnClick(index) {
    //   this.currentIndex = index;
    // },
    btnClick(tab) {
      this.currentTab = tab;
    },
    homeClick(payload) {
      console.log("homeClick: ", payload);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>