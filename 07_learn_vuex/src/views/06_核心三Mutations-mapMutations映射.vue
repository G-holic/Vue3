<template>
  <div class="home">
    <button @click="changeName('我是真的李四')">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo({name: '王二', level:200})">修改info</button>

    <h2>Store Name: {{ $store.state.name}}</h2>
    <h2>Store Level: {{ $store.state.level}}</h2>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { CHANGE_INFO } from "../store/mutation_types";
export default {
  computed: {},
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    // ...mapMutations(["changeName", "incrementLevel", CHANGE_INFO]), // option API
  },
};
</script>

<script setup>
import { mapMutations, useStore } from "vuex";

// 1.手动的映射和绑定
const store = useStore()
const mutations = mapMutations(["changeName", "incrementLevel", CHANGE_INFO]);
const newMutations = {}
Object.keys(mutations).forEach(key=>{
    newMutations[key] = mutations[key].bind({$store:store})
})

const {changeName, incrementLevel, changeInfo} = newMutations
</script>

<style>
</style>