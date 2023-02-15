<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">

      <div
        class="tab-bar-item"
        :class="{active: currentIndex === index}"
        @click="itemClick(index,item)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(item.image)"
        >
        <img
          v-else
          :src="getAssetURL(item.imageActive)"
        >
        <span class="text">{{item.text}}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// 导入tabbar.js
import tabbarData from "@/assets/data/tabbar.js";
// 导入utils下的load_assets_img.js
import { getAssetURL } from "@/utils/load_assets_img.js";

const currentIndex = ref(0);
const router = useRouter();

const itemClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};
// 或
// function itemClick(){

// }
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column; // 上下结构

    &.active {
      color: var(--primary-color);
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
    img {
      width: 32px;
    }
  }
}
</style>