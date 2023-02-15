<template>
  <div class="home">
    <h2>home 页面</h2>
    <h2>doubleCounter:{{counterStore.doubleCount}}</h2>
    <h2>doubleCounterAddOne:{{counterStore.doubleCountAddOne}}</h2>
    <h2>friend-111:{{counterStore.getFriendById(111)}}</h2>
    <h2>showMessage:{{counterStore.showMessage}}</h2>
    
  </div>
</template>

<script setup>
import useCounter from '../stores/counter'

const counterStore = useCounter()

</script>

<style>
</style>