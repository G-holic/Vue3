<template>
  <div>
    <!-- store中的counter -->
    <h2>App当前记数:{{ $store.state.counter }}</h2>
    <!-- home组件 -->
    <hr>
    <home/>
  </div>
</template>

<script setup>
import Home from './views/Home'


</script>

<style>
</style>