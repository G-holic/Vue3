<template>
  <div class="tab-item">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-item-con"
        :class="{ active: currentIndex === index }"
        @click="btnClick(index)"
      >
        <span> {{ item }}</span>
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
  emits: ["tabItemControl"],
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemControl", index);
    },
  },
};
</script>

<style scoped>
.tab-item {
  display: flex;
  line-height: 44px;
  text-align: center;
}
.tab-item-con {
  flex: 1;
}
.tab-item-con.active {
  color: red;
}
.tab-item-con.active span {
  border-bottom: 3px solid red;
  padding: 8px;
}
</style>