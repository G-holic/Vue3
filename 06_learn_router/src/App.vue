<template>
  <div class="app">
    <!-- router占位（放到哪个位置就替换哪里） -->
    <!-- <router-view></router-view> -->
    <h2>app</h2>
    <div class="nav">
      <!-- router-link默认保存历史记录，replace设置为不保存  -->
      <!-- <router-link to="/home" replace="">首页</router-link> -->
      <!-- 对象形式 -->
      <!-- <router-link :to="{path:'./home'}"></router-link> -->
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/user/123">用户123</router-link>
      <router-link to="/user/321">用户321</router-link>

      <router-link to="/order">订单</router-link>
      <!-- 给他的默认的class改名字 -->
      <!-- <router-link to="/home" active-class="link-active">首页</router-link> -->

      <!-- 其他元素跳转 -->
      <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

// 先定义router对象
const router = useRouter();

// 监听元素的点击
function homeSpanClick() {
  // 跳转到首页
  // router.push("/home")
  router.push({ 
    // name: "home"
    path: "/home",
  });
}
function aboutBtnClick() {
  // 跳转到关于
  router.push({
    path: "/about",
    query: {
      name: "why",
      age: 18,
    },
  });
}
</script>

<style scoped>
/* 有默认class */
.router-link-active {
  color: orange;
  font-size: 20px;
}
/* .link-active{
  color: orange;
  font-size: 20px;
} */
</style>
