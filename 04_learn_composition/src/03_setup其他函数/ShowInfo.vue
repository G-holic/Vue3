<template>
  <h2>Infos: {{ info }}</h2>
  <!-- 代码没有错误，但是违背规范（单项数据流） -->
  <!-- <button @click="info.name = '王五'">ShowInfo按钮</button> -->
  <!-- 正确的做法 -->
  <button @click="changeInfoClick">ShowInfo按钮</button>
  <!-- 单项数据流（规范）
    子组件拿到数据后只能使用，不能修改
    如果确实要修改，那么应该将事件传递出去，由父组件来修改数据
   -->

  <hr />
  <!-- 使用readonly的数据 -->
  <h2>ShowInfo: {{ roInfo }}</h2>
  <!-- 发现修改不了，代码就会无效（报警告） -->
  <!-- <button @click="roInfo.name = '王五'">ShowRoInfo按钮</button> -->
  <button @click="changeRoInfoClick">ShowRoInfo按钮</button>
  <!-- 如果一定要修改，正确的做法 -->
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    // readonly数据
    roInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["changeInfo", "changeRoInfo"],
  setup(props, context) {
    function changeInfoClick() {
      context.emit("changeInfo", "王五");
    }

    function changeRoInfoClick() {
      context.emit("changeRoInfo", "赵六");
    }
    return {
      changeInfoClick,
      changeRoInfoClick,
    };
  },
};
</script>

<style>
</style> 