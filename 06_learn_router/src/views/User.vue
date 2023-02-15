<template>
  <div class="user">
    <!-- 在模板中获取到id -->
    <!-- route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name、meta、path、hash、query、params、fullPath、matched、redirectedFrom等 -->
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<script  setup>
// 获取route跳转id
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
console.log(route.params.id)
// 来回跳转
onBeforeRouteUpdate((to, from) => {
  console.log("from: ", from.params.id);
  console.log("to: ", to.params.id);
});
</script>


<style>
</style>