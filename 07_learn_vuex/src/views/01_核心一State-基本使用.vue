<template>
  <div class="home">
    <h2>Home当前记数: {{ $store.state.counter}}</h2>
    <h2>Computed当前记数: {{ storeCOunter }}</h2>
    <h2>setup当前记数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    
  </div>
</template>

<script>
export default {
  computed: {
    storeCOunter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<script setup>
import { useStore } from "vuex";
import {ref,toRefs} from 'vue'

const store = useStore();

// const setupCounter = store.state.counter // 不可以这样做，不是响应式的
const {counter} = toRefs(store.state) // 可以

function increment() {
  // console.log(store.state.counter)
  // store.state.counter++ // vuex不可以这样做，要用mutations
  store.commit("increment");
}
</script>

<style>
</style>