<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <!-- <teleport to="body">
          <hello-world/>
        </teleport> -->
        <!-- index.html -->
        <teleport to="#abc">
          <hello-world />
        </teleport>
      </p>
    </div>
  </div>
</template>

<script setup>

import HelloWorld from './HelloWorld.vue'
</script>

<style lang="less" scoped>
</style>