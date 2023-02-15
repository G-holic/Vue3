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

    <tab-control
      :titles="['衣服', '鞋子', '裤子']"
      @tabItemClick="tabItemClick"
    >
    <!-- 作用域插槽父访问子 -->
    <!-- props是自己定义的名字 -->
    <template v-slot:default="props">
    <!-- 2.<template v-slot="props"> 独占默认插槽的简单写法（了解）-->
    <button>{{ props.item }}</button>
    </template> 
    </tab-control>

    <tab-control
      :titles="['衣服', '鞋子', '裤子']"
      @tabItemClick="tabItemClick"
    >
    <!-- 重要写法 -->
    <template #default="props">
    <a href="#">{{ props.item }}</a>
    </template>
    
    </tab-control>
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