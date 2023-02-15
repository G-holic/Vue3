<template>
  <div class="app">
    <demo-d :titles="['张三', '李四', '王五']" @tabItemControl="tab"/>
  </div>
  <h2>{{pageContents[currentIndex]}}</h2>
</template>

<script>
import DemoD from './DemoD.vue'
export default {
    components:{
        DemoD
    },
    data(){
        return{
            currentIndex: 0,
            pageContents: ["我叫张三", "我叫李四", "我叫王五"]
        }
    },
    methods:{
        tab(index){
            this.currentIndex = index
            console.log("当前索引: ",index)
        }
    }
}
</script>

<style>

</style>