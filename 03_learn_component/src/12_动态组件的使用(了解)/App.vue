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
      <!-- 1.第一种写法: v-if进行判断逻辑，决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.第二种写法: 动态组件component（推荐） -->
      <!-- is中的组件需要来自两个地方： 1.全局注册的组件 2.局部注册的组件 -->
      <!-- :is="tabs[currentIndex]"动态绑定 -->
      <!-- <component :is="tabs[currentIndex]"></component> -->
      <component name="why" :age="18" @homeClick="homeClick" :is="currentTab"></component>
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
    homeClick(payload){
      console.log("homeClick: ", payload)
    }
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>