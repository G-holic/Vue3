<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo">修改info</button>

    <h2>Store Name: {{ $store.state.name}}</h2>
    <h2>Store Level: {{ $store.state.level}}</h2>
  </div>
</template>
<script>
import {CHANGE_INFO} from '../store/mutation_types'
export default {
  computed: {},
  methods: {
    changeName() {
      // this.$store.state.name = "我是真正的李四"//不规范
      this.$store.commit("changeName", "我是真正的李四");
    },
    incrementLevel() {
      this.$store.commit("incrementLevel");
    },
    changeInfo() {
      this.$store.commit(CHANGE_INFO, {
        name: "王二",
        level: 200,
      });
    },
  },
};
</script>

<script setup>
import { mapGetters, useStore } from "vuex";
import { computed, toRefs } from "vue";
</script>

<style>
</style>