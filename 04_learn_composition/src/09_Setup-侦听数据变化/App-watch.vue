<template>
  <div>App: {{ message }}</div>
  <div>App: {{ info.name }}--{{ info.age }}</div>
  <button @click="message = 'hello vue3'">修改message</button>
  <button @click="info.name = '王五'">修改info.name</button>
  <button @click="info.friend.name = 'kobe'">修改info.friend.name</button>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
  setup() {
    // 1.定义数据
    const message = ref("hello world");
    const info = reactive({
      name: "李四",
      age: 18,
      friend: {
        // watch默认有进行深度监听
        name: "赵六",
      },
    });
    // 2.侦听数据的变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log(newValue === oldValue); // false
    });
    // watch(
    //   info,
    //   (newValue, oldValue) => {
    //     // newValue,oldValue是同一个对象，只是在改info.name的值
    //     console.log(newValue, oldValue);
    //     console.log(newValue === oldValue); // true
    //   },
    //   {
    //     immediate: true, // 设置为true的话会直接进行一次监听（默认为false）
    //   }
    // );

    // 3.监听reactive数据变化后，获取普通对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { immediate: true, deep: true } // 发现无法监听，加入deep:true，即可监听(注意是点击修改info.friend.name，看其是否被深度监听)
    );

    // 返回
    return {
      message,
      info,
    };
  },
};
</script>

<style>
</style>