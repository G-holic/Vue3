<template>
  <h2>{{ fullName }}</h2>
  <h2>{{ scoreLevel }}</h2>
  <button @click="setFullname">设置FullName</button>
</template>
 
<script>
import {reactive, computed, ref} from 'vue'
export default {
    setup(){
        // 1.第一数据
        const names = reactive({
            firstName: "kobe",
            lastName: "bryant"
        })

        // const fullName = computed(()=>{
        //     return names.firstName+" "+names.lastName
        // })

        // set,get使用(巩固)
        const fullName = computed({
            set:function(newValue){
                const tempNames = newValue.split(" ")
                names.firstName = tempNames[0]
                names.lastName = tempNames[1]
            },
            get:function(){
                return names.firstName + " "+names.lastName
            }
        })

        function setFullname(){
            fullName.value = "李四 四方"
        }

        // 2.定义score
        const score = ref(89)
        const scoreLevel = computed(()=>{
            return score.value >= 60 ? "及格":"不及格"
        })

        return{
            names,
            fullName,
            scoreLevel,
            setFullname
        }
    }
}
</script>

<style>

</style>