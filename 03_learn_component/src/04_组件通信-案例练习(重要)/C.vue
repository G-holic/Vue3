<template>
<div class="app">
<demo-c :titles="['Java', 'Python', 'Spark','MySQL']" @tabItemControl="tab"/>
</div>
<h2>{{ pageContent[currentIndex]}}</h2>


</template>

<script>
import DemoC from './DemoC.vue'

export default {
  components: { DemoC },
  data(){
    return{
        currentIndex: 0,
        pageContent:["欢迎学习JAVA","欢迎学习Python",'欢迎学习Spark','欢迎学习MySQL']
    }
  },
  methods:{
    tab(index){
        this.currentIndex = index
        console.log("当前索引: ", this.currentIndex)
    }
  }

}
</script>

<style>

</style>