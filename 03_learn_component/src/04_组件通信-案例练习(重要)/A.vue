<template>
  <tab-con :titles="['衣服', '鞋子', '裤子']" @tabItemClick="tabItemClick"/>
    
    <h2>{{pageContent[currentIndex]}}</h2>

</template>

<script>
import TabCon from './TabCon.vue'
export default {
    components: {
        TabCon
    },
    data(){
        return{
            pageContent: ["衣服页面", "鞋子页面", "裤子页面"],
            currentIndex:0
        }
    },
    methods:{
        tabItemClick(index){
            this.currentIndex = index
        }
    }
}
</script>

<style>

</style>