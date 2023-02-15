<template>
  <div class="home">
    <button>修改level</button>
    <h2>doubleCounter:{{ $store.getters.doubleCounter}}</h2>
    <h2>totalAge:{{ $store.getters.totalAge }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>

    <!-- 根据id获取一个朋友的信息 -->
    <h2>id-111的朋友信息: {{$store.getters.getFriendById(111)}}</h2>
    <h2>id-112的朋友信息: {{$store.getters.getFriendById(112)}}</h2>
  </div>
</template>
<script setup>
</script>

<style>
</style>