<template>
  <!-- 1.展示李四的个人信息 -->
  <!-- 如果当前的属性是一个非props的attribute，那么该属性会默认添加到子组件的根元素上 -->
  <show-info name="李四" :age="18" :height="1.88" address="广东佛山" abc="cba" class="active"/>
  <!-- :age="18" js的语法，表示传入的就是该数字，传字符串可以这样 :age="'18'" -->

  <!-- 2.展示kobe的个人信息 -->
  <show-info name="kobe" :age="28" :height="1.98" />

  <show-info name="赵六" showMessage="哈哈哈" />
</template>

<script>
import ShowInfo from "./ShowInfo.vue";

export default {
  components: { ShowInfo },
};
</script>

<style>
</style>