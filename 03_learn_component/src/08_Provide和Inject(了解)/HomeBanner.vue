<template>
  <div class="homeBanner">
    <!-- message.value 手动解包 -->
    <h2>HomeBanner: {{ name }}-{{ age }}-{{ message.value }}</h2>
  </div>
</template>

<script>
export default {
  // 子接受父的数据
  inject: ["name", "age", "message"],
};
</script>

<style>
</style>