<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{ color: titleColor }">
      {{ message }}
    </h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner"/>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: {
    Banner,
  },
  data() {
    return {
      message: "Hello World",
      titleColor: "red",
    };
  },
  methods: {
    changeTitle() {
      // 1.不要主动的去获取DOM，并且修改DOM内容（就是不要使用原生的DOM去做命令式编程）
      this.message = "你好李四";
      this.titleColor = "blue";

      //2.获取h2/button元素
      console.log(this.$refs.title);
      console.log(this.$refs.btn);

      // 3.获取banner组件: 拿到的是组件实例
      console.log(this.$refs.banner)

      // 3.1在父组件中可以主动的调用子组件的对象方法
      this.$refs.banner.bannerClick()

      // 3.2 获取banner组件实例，获取banner中的元素
      console.log(this.$refs.banner.$el)

      // 3.3 如果banner template是多个根，拿到的是第一个node节点 #text
      // 注意：开发中不推荐一个组件的template中有多个根元素
      console.log(this.$refs.banner.$el.nextElementSibling) // 拿取第一个根


      // 4.组件实例还有两个属性（了解）：
      console.log(this.$parent) // 获取父组件
      console.log(this.$root) // 获取根组件
    },
  },
};
</script>

<style>
</style>