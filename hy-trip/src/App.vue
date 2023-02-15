<template>
  <div class="app">
    <!-- 路由占位 -->
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <!-- 隐藏tabbar的第一种方法 -->
    <tab-bar v-show="!route.meta.hideTabBar" />
    <!-- <tab-bar/> -->
    <loading />

  </div>
</template>

<script setup>
// 导入tabbar组件
import TabBar from '@/components/tab-bar/tabbar.vue'
import { useRoute } from 'vue-router'
import Loading from '@/components/loading/loading.vue'
const route = useRoute()

</script>

<style lang="less" scoped>
</style>