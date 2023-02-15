<template>
  <div>
    <h2>App</h2>
    <button @click="changeTitle">修改title</button>

    <!-- 1.计数器 -->
    <!-- <hr />
    <home />
    <hr />
    <about /> -->

    <!-- 2.home页面和about页面的切换 -->
    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>
    <!-- 使用动态组件切换 -->
    <component :is="currentPage"></component>
    <div class="content"></div>

    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import useTitle from "./hooks/usTitle";
import { ref } from "vue";

export default {
  components: {
    Home,
    About,
  },
  setup() {
    const currentPage = ref("home");
    // 修改标题（原生写法）
    // document.title = "我的练习"
    function changeTitle() {
      useTitle("app title");
    }
    return {
      changeTitle,
      currentPage,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 100px;
  background-color: orange;
}
</style>
