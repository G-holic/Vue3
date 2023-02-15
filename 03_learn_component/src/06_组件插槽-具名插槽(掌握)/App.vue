<template>
  <nav-bar>
    <!-- <template v-slot:left> -->
    <!-- 语法糖写法 -->
    <template #left>
      <button>{{ leftText }}</button>
    </template>
    <template v-slot:center>
      <span>内容</span>
    </template>
    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

  <!-- nav-bar只给一个插槽传入数据 -->
  <!-- 动态插槽名的使用 -->
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>
  <button @click="position = 'left'">左边</button>
  <button @click="position = 'center'">中间</button>
  <button @click="position = 'right'">右边</button>
</template> 

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      position: "center",
      leftText: "呵呵",
    };
  },
  methods: {},
};
</script>

<style>
</style>