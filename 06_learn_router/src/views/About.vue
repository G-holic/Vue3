<template>
  <div class="about">
    <!-- route是一个跳转的路由对象，
    每一个路由都会有一个route对象，是一个局部的对象，
    可以获取对应的name、meta、path、hash、query、params、fullPath、matched、redirectedFrom等 -->
    <h2>About: {{ $route.query }}</h2>
    <button @click="backBtnClick">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function backBtnClick() {
  // router.back()
  // router.forward()

  // go(delta)
  // go(1) -> forward()
  // go(-1) -> back()
  router.go(-1);// 向后一步
}
</script>

<style>
</style>