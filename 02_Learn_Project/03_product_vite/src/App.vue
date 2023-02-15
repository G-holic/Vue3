<template>
  <div>My App</div>
  <h2 class="title">我是App的标题</h2>
  <AppHeader></AppHeader>
  <app-header></app-header>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
    components: { AppHeader }
}
</script>

<style scoped>
  .title{
    color: red;
  }
</style>