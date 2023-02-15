<template>
  <div class="app">

    <!-- 1.参数-修饰符-值 -->
    <h2 v-why:kobe.abc.cba="message">哈哈哈哈哈</h2>

    <!-- 2.价格拼接单位符号 -->
    <h2 v-unit>{{111}}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = '你好啊，李四'
const vWhy = {
  mounted (el, bindings) {
    console.log(bindings)
    // el.textContent
  }
}
</script>

<style scoped>
</style>