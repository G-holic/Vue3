<template>
  <div class="home">
   <h2>当前计数: {{$store.state.counter}}</h2>
   <h2>当前名字: {{$store.state.name}}</h2>
   <button @click="counterBtnClick">发起action修改counter</button>
   <button @click="nameBtnClick(我是真正的李四)">发起action修改name</button>
  </div>
</template>
<script>

export default {
  methods:{
    counterBtnClick(){
      this.$store.dispatch("incrementAction") // dispatch 派发（在action中）
    },
    nameBtnClick(){
      this.$store.dispatch("changeNameAction","我是真正的李四")
    }
  }
}
</script>

<script setup>

</script>

<style>
</style>