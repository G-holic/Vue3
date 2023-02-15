<template>
  <h2>Home组件: {{ name }}-{{ age }}</h2>
  <button @click="homeClick">HomeBtn</button>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:""
        },
        age:{
            type:Number,
            default:0
        }
    },
    emits:["homeClick"],
    methods:{
        homeClick(){
            this.$emit("homeClick", "home")
        }
    }
};
</script>

<style>
</style>