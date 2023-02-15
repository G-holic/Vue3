<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <h2>doubleCounter:{{ doubleCounter}}</h2>
    <h2>totalAge:{{ totalAge }}</h2>
    <h2>message:{{ message }}</h2>

    <!-- 根据id获取一个朋友的信息 -->
    <h2>id-111的朋友信息: {{getFriendById(111)}}</h2>
    <h2>id-112的朋友信息: {{getFriendById(112)}}</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "totalAge"]),
    ...mapGetters(["getFriendById"]),
  },
};
</script>

<script setup>
import { mapGetters, useStore } from "vuex";
import { computed, toRefs } from "vue";

// 1.使用mapGetters
//    const {message:messageFn} = mapGetters(["message"])
//    const store = useStore()
//    const message = computed(messageFn.bind({$store:store}))

// 2.直接解构，并且包裹成ref
// const { message } = toRefs(store.getters);// 会报警告
const store = useStore();
// 3.针对某一个getters属性使用computed 
const message = computed(() => store.getters.message);

function changeName() {
  store.state.name = "我是真正的李四";
}
</script>

<style>
</style>