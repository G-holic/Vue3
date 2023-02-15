<template>
  <div class="app">
    <h2 class="title">我是App.vue中的h2元素</h2>

    <!-- AppHeader -->
  <AppHeader></AppHeader>
  <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'; // 脚手架默认.vue已经配置好了
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
  /* scoped 作用域，只对当前.vue有效 */
  .title{
    color: red;
  }
</style>
