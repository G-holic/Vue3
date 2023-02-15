<template>
  <div class="home">
    <h2>home 页面</h2>
    <h2>count:{{counterStore.count}}</h2>
    <button @click="changeState">修改state</button>
    
    <!-- 展示数据 -->
    <h2>轮播的数据</h2>
    <ul>
        <template v-for="item in homeStore.banners" :key="item.acm">
            <li>{{item.title}}</li>
        </template>
    </ul>
    <ul>
        <template v-for="item in homeStore.recommends" :key="item.acm">
            <li>{{item.title}}</li>
        </template>
    </ul>
  </div>
</template>

<script setup>
import useCounter from '../stores/counter'
import useHome from '../stores/home'

const counterStore = useCounter()

function changeState(){
    // counterStore.increment()
    counterStore.incrementNum(10)
}

const homeStore = useHome()

// homeStore.fetchHomeMultidata()
homeStore.fetchHomeMultidata().then(res=>{
    console.log("fetchHomeMultidata的action已经完成了")
})
</script>

<style>
</style>