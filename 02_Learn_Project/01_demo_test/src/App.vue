<template>
  <h2>{{ title }}</h2>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>

  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components:{
    HelloWorld
  },
  data(){
    return {
      title: "我是标题",
      counter: 0
    }
  },
  methods:{
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
    }
  }
}
</script>

<style>

</style>
