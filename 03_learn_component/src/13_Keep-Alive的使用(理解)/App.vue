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

      <!-- 保持存活状态  keep-alive  include=后面不可以加空格-->
      <!-- include: 组件的名称 -->
      <!-- include-string|RegExp|Array。只有名称匹配的组件会被缓存； -->
      <!-- <keep-alive include="/home|about/"></keep-alive> -->
      <!-- <keep-alive include="['home'.'about']" -->
      <!-- exclude-string|RegExp|Array。.任何名称匹配的组件都不会被缓存 -->
      <!-- number string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁： -->
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Category from "./views/Category.vue";

export default {
  components: {
    Home,
    About,
    Category,
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