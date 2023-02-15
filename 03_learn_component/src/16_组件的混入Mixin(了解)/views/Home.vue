<template>
  <h2>Home组件:</h2>
</template>

<script>
import messageMixin from '../mixins/message-mixin'
export default {
  // options api
  mixins:[messageMixin],
  data() {
    return {
      homeNames: ["abc", "cba"],
      message: "hello message"
      //如果返回data对象，它与mixin混入发生冲突，会保留组件自身的数据，也就是data的数据
    };
  },
  methods: {},
  created(){
    console.log("home created")
  }
};
</script>

<style>
</style>