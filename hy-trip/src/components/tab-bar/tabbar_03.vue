<template>
  <div class="tab-bar">
    <van-tabbar
      v-model="currentIndex"
      active-color="#ff9854"
    >
      <template v-for="(item,index) in tabbarData">
        <!-- <van-tabbar-item :to="item.path"> -->
        <van-tabbar-item
          :to="item.path"
          icon="home-o"
        >
          <span>{{item.text}}</span>
          <!-- <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetURL(item.image)"
            >
            <img
              v-else
              :src="getAssetURL(item.imageActive)"
            >
          </template> -->
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from "vue";
// 导入tabbar.js
import tabbarData from "@/assets/data/tabbar.js";
// 导入utils下的load_assets_img.js
import { getAssetURL } from "@/utils/load_assets_img.js";

const currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  // 局部定义一个变量：只针对.tab-bar子元素才生效
  // --van-tabbar-item-font-size:30px !important;

  // 找到类，对类中的CSS属性重写
  // .van-tabbar-item__icon{// 发现没有效果，原因：scoped作用域
  //   font-size: 50px;
  // }
  // 解决办法
  // :deep()找到子组件的类，让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }
  img {
    height: 30px; // 覆盖ui组件默认的样式
  }
}
</style>