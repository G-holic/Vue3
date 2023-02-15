<template>
  <div class="home">
    <!-- 1.在模板中使用多个状态 -->
    <h2>name: {{ $store.state.name}}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>avater: {{ $store.state.avatarURL }}</h2>

    <!-- 2.计算属性（映射状态:数组语法） -->
    <!-- <h2>name: {{ name}}</h2>
    <h2>level: {{ level }}</h2>
    <h2>avater: {{ avatarURL }}</h2> -->

    <!-- 3.计算属性（映射状态:对象语法） -->
    <!-- <h2>name: {{ sName}}</h2>
    <h2>level: {{ sLevel }}</h2> -->

    <!-- 4.计算属性（setup使用） -->
    <!-- <h2>name: {{ cName}}</h2>
    <h2>level: {{ cLevel }}</h2> -->

    <!-- 5.计算属性（setup使用封装函数） -->
    <!-- <h2>name: {{ name}}</h2>
    <h2>level: {{ level }}</h2> -->

    <!-- 5.计算属性（直接解构（建议使用，不会那么复杂）） -->
    <h2>name: {{ name}}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="incrementLevel">修改level</button>
  </div>
</template>

<script>
// import {mapState} from 'vuex'

// mapState(["name", "level", "avatarURL"])

// export default {
//   computed: {
//     fullname(){
//         return "xxxx"
//     },
//     ...mapState(["name", "level", "avatarURL"]),
//     ...mapState({
//         sName: state => state.name,
//         sLevel: state => state.level
//     })
//   },
// };
</script>

<script setup>
    import {computed,toRefs} from 'vue'
    import {mapState, useStore} from 'vuex'
    import useState from '../hooks/useState'

    // 1. 一步一步完成
    // const {name, level} = mapState(["name","level"])
    // // console.log(name,level)
    // const store = useStore()
    // const cName = computed(name.bind({$store:store}))
    // const cLevel = computed(level.bind({$store:store}))

    // 2. 使用useState（自己定义的封装函数）
    // const {name, level} = useState(["name","level"]) // 返回对象都是computed，computed解构出来也是响应式的，所有可以直接解构

    // 3.直接对store.state进行解构
    const store = useStore()
    const {name, level} = toRefs(store.state) // toRefs把它变为响应式的
    // const {name:sName, level:sLevel} = toRefs(store.state) // 取别名

    function incrementLevel(){
        store.state.level++
    }

</script>

<style>
</style>