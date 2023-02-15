<template>
  <h2>Home计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <button @click="popularClick">首页-流行</button>
  <button @click="hotClick">首页-热门</button>
  <button @click="songClick">首页-歌单</button>

  <div class="scroll">
    <h2>x: {{ scrollPosition.x }}</h2>
    <h2>y: {{ scrollPosition.y }}</h2>
  </div>
</template>

<script>
import useCounter from "../hooks/useCounter";
import useTitle from "../hooks/usTitle";
import useScrollPosition from "../hooks/useScrollPosition";
export default {
  setup() {
    // 1.counter 逻辑
    const { counter, increment, decrement } = useCounter();

    // 2.修改标题
    const title = useTitle("首页");

    // 3.监听按钮点击
    function popularClick() {
      title.value = "首页-流行";
      console.log(title.value);
    }
    function hotClick() {
      title.value = "首页-热门";
    }
    function songClick() {
      title.value = "首页-歌单";
    }

    // 4.获取滚动位置
    const { scrollPosition } = useScrollPosition(); // scrollPosition对这个对象解构
    console.log(scrollPosition);
    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick,
      scrollPosition,
    };
  },
};
</script>

<style>
</style>