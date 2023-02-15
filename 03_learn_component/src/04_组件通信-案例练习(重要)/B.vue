<template>
  <div class="app">
    app
    <demo-b :titles="['衣服', '鞋子', '裤子']" @tabItemControl="tabItemControl"/>
  </div>
  <h2>{{pageContent[currentIndex]}}</h2>
</template>

<script>
import DemoB from './DemoB.vue'
export default {
    components:{
        DemoB
    },
    data(){
        return{
            currentIndex: 0,
            pageContent: ["衣服页面", "鞋子页面", "裤子页面"]
        }
    },
    methods:{
        tabItemControl(index){
            console.log("item", index)
            this.currentIndex = index
        }
    }
}
</script>

<style>

</style>