<template>
  <!-- 使用top-page隐藏tabbar -->
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        shape='round'
        placeholder="城市/区域/位置"
        show-action
        @cancel="cancelClick"
      />
      <!-- Tab标签页 -->
      <!-- tabActive默认绑定是索引 -->
      <van-tabs
        v-model:active="tabActive"
        color="#ff9854"
        line-height="3"
      >
        <template
          v-for="(value, key, index) in allCites"
          :key="key"
        >
          <van-tab
            :title="value.title"
            :name="key"
          ></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup"/>
      <city-group :group-data="currentGroup"/> -->
      <!-- 优化切换渲染 -->
      <template v-for="(value, key, index) in allCites">
        <!-- <h2 v-show="tabActive === key">{{value.title}}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
// import hyRequest from '@/services/request'
// import {getCityAll} from '@/services/index'
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
// city-group
import CityGroup from './cpns/city-group.vue'

const router = useRouter();

// 搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};
// Tab的切换
const tabActive = ref();

/**
 * 这个位置发生网络请求有两个缺点：
 *  1.如果网络请求太多，那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *  2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传递过去（props）
 */
// 网络：请求城市数据
// hyRequest.get({
//   url:"/city/all"
// }).then(res=>{
//   console.log(res)
// })
// const allCity = ref({})
// getCityAll().then(res=>{
//   allCity.value = res.data
// })

// 从stores中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();// 发起action
const { allCites } = storeToRefs(cityStore);

// 目的：获取选中标签后的数据
//  1.获取正确的key：将tabs中绑定的tabAction正确绑定
//  2.根据key从allCites获取数据，默认直接获取的数据不是响应式的，所有必须包裹computed
const currentGroup = computed(() => allCites.value[tabActive.value]); 
</script>

<style lang="less" scoped>
.city {
  //     /* 局部修改tab底部线条颜色 */
  //     --van-tabs-bottom-bar-color: var(--primary-color) !important;
  // top固定定位
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content{
  //   margin-top: 98px;
  // }

  // 局部滚动
  .top{
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>