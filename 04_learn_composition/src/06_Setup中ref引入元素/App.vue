<template>
  <!-- 1.获取元素 -->
  <h2 ref="titleRef">我是标题</h2>
  <button ref="btnRef">按钮</button>
  <button @click="getElements">获取元素</button>

  <!-- 获取组件实例 -->
  <show-info ref="ShowInfoRef" />
</template>

<script>
import { ref, onMounted } from "vue";
import ShowInfo from "./ShowInfo.vue";
export default {
  components: {
    ShowInfo,
  },
  setup() {
    const titleRef = ref();
    const btnRef = ref();
    const ShowInfoRef = ref();

    // mounted生命周期函数
    onMounted(() => {
      console.log(titleRef.value);
      console.log(btnRef.value);
      console.log(ShowInfoRef.value);

      ShowInfoRef.value.showInfoFoo( );
    });

    function getElements() {
      console.log(titleRef.value);
    }

    return {
      titleRef,
      getElements,
      btnRef,
      ShowInfoRef,
    };
  },
};
</script>

<style>
</style>