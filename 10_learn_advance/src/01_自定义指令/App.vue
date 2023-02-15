<template>
  <div class="app">
    <!-- 时间格式化 -->
    <h2 v-ftime="'YYYY/MM/DD'">{{timeStamp }}</h2>
    <h2 v-ftime>{{1555555161565 }}</h2>
  </div>
</template>

<script setup>

const timeStamp = 1231355453
</script>

<style scoped>
</style>