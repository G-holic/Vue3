<template>
  <h2>Counter: {{modelValue}}</h2>
  <button @click="changeCounter">修改Counter</button>


</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits:["update:modelValue"],
  methods:{
    changeCounter(){
        this.$emit("update:modelValue",999)
    }
  }
};
</script>

<style>
</style>