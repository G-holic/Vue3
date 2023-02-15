<template>
  <div class="home">
    <h2>当前计数: {{$store.state.counter}}</h2>
    <button @click="incrementAction">发起action修改counter</button>
    <button @click="increment">递增counter</button>
    <h2>当前名字: {{$store.state.name}}</h2>
    <button @click="changeNameAction('我是真正的李四')">发起action修改name</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // counterBtnClick(){
    //   this.$store.dispatch("incrementAction") // dispatch 派发（在action中）
    // },
    // nameBtnClick(){
    //   this.$store.dispatch("changeNameAction","我是真正的李四")
    // }
    // ...mapActions(["incrementAction","changeNameAction"])
  },
};
</script>

<script setup>
import { useStore, mapActions } from "vuex";

// 1.在setup中使用mapActions辅助函数
// const store = useStore();
// const actions = mapActions(["incrementAction", "changeNameAction"]);
// const newActions = {};
// Object.keys(actions).forEach((key) => {
//   newActions[key] = actions[key].bind({ $store: store });
// });
// const { incrementAction, changeNameAction } = newActions;

// 2.使用默认的做法
const store = useStore();
function increment(){
  store.dispatch("incrementAction")
}
</script>

<style>
</style>