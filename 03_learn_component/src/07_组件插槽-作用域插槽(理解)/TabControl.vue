<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <!-- 预留插槽，为改成其他元素的提供便捷方法 -->
        <slot :item="item">
          <!-- 将子组件的中的数据传递给父组件的插槽来使用 -->
          <!-- 插槽绑定:  :（自己去取的名字）="（绑定的变量名）" -->
          <span> {{ item }} </span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  emits: ["tabItemClick"],

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemClick", index);
    },
  },
};
</script >

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active {
  color: red;
  font-weight: 700px;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 8px;
}
</style>