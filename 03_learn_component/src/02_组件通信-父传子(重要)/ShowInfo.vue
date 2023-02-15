<template>
  <div class="infos">
    <!-- :class="$attrs,abc" 拿取非props的attribute的元素 -->
    <h2 :class="$attrs.abc">姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>

    <h2>Message: {{ showMessage }}</h2>
  </div>

  <!-- 出现多个根节点的attribute时，必须手动指定要绑定到哪一个属性上 -->
  <div class="other" v-bind="$attrs"></div>
</template>

<script>
export default {
  // 作用: 接受父组件传递过来的属性
  // 1.props数组语法
  // 弊端: 1.不能对类型进行验证  2.没有默认值的
  //   props: ["name", "age", "height"],

  // 2.对象语法 （开发中经常使用，必须掌握）
  //   inheritAttrs: false, // 禁用 非props的attribute
  props: {
    name: {
      type: String,
      required: true, // 表示这个name值必须传入，否则报警告
      default: "我是默认的name",
      //  required 和  default 一般选一个
    },
    age: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    // 重要原则: 对象类型写默认值时。需要编写default的函数，函数返回默认值
    friend: {
      type: Object, // 如果类型是对象类型，必须返回一个函数，不可以直接返回对象
      default: () => ({ name: "james" }),
      //   default() { // 这种方法也可以
      //     return {};
      //   },
    },
    hobbies: {
      type: Array, // 数组也是一个对象，所有同上
      default: () => ["篮球", "rap", "唱跳"],
    },
    showMessage: {
      type: String,
      default: "我是默认值",
    },
  },
};
</script>

<style>
</style>