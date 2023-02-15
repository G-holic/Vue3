<template>
  <div
    class="home"
    ref="homeRef"
  >
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <!-- <home-search-box :hotSuggests="hotSuggests"/> -->
    <home-search-box />
    <home-categories />
    <div
      class="search-bar"
      v-if="isShowSearchBar"
    >
      <search-bar />
    </div>
    <home-content />
    <!-- <button @click="moreBtnClick">加载更多</button> -->

  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import useHomeStore from "@/stores/modules/home";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll";
import { watch, ref, computed, onActivated } from "vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

// import hyRequest from '@/services/request/index'

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCateGoriesData();
// let currentPage = 1
homeStore.fetchHouseListData();

// 1.热门建议
// const hotSuggests = ref([])
// hyRequest.get({
//   url:'/home/hotSuggests'
// }).then(res=>{
//   hotSuggests.value = res.data
//   console.log(hotSuggests.value)
// })
// 2.热门建议
// const categories = ref([])
// hyRequest.get({
//   url:"/home/categories"
// }).then(res => {
//   categories.value = res.data
// })

// 默认加载更多
const moreBtnClick = () => {
  console.log("加载更多的数据");
  // currentPage++
  homeStore.fetchHouseListData();
};

// 监听window窗口的滚动
// 第一种方法：回调函数的使用
// useScroll(()=>{
//   homeStore.fetchHouseListData()
// })

// 第二种方法：(更方便管理)  监听滚动到底部
const homeRef = ref()
const { isReachBottom } = useScroll(homeRef);
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 搜索框显示的控制
// 第一种做法
// const isShowSearchBar = ref(false);
// const { scrollTop } = useScroll();
// watch(scrollTop,(newTop)=>{
//   isShowSearchBar.value = newTop >100
// })
// 第二种做法
// 定义的可响应式数据，依赖另外一个可响应式的数据，那么可以使用计算属性（computed）
const { scrollTop } = useScroll();
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360;
});

// 跳转回home时，保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script> 

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: 60px;
}
.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>