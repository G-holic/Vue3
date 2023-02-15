<template>
  <div class="tab-item">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-item-con"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
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
  emits:["tabItemControl"],
  methods: {
    itemClick(index) {
      console.log("click", index);
      this.currentIndex = index;
      this.$emit("tabItemControl", index)
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>

<style scoped>
.tab-item {
  display: flex;
  line-height: 44px;
}
.tab-item-con {
  flex: 1;
  text-align: center;
}
.tab-item-con.active{
    color: red;
}
.tab-item-con.active span{
    border-bottom: 3px solid red;
    padding: 8px;
}
</style>