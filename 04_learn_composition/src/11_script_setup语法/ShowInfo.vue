<template>
  <h2>ShowInfo: {{ name }}--{{ age }}</h2>
  <button @click="showInfoClick">ShowInfoClick</button>
</template>

<script setup>
// 定义props
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 0,
  },
});

// 绑定函数，并且发出事件
const emits = defineEmits(["showInfoBtnClick"])
function showInfoClick(){
    emits("showInfoBtnClick","showInfo内部发生了点击")
}

// 定义foo函数
function foo(){
    console.log("foo.function")
}
defineExpose({ // 把对象暴露出来
    foo
})
</script>

<style>
</style>