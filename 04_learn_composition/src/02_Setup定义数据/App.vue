<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeClick">修改message</button>
    <hr>
    <h2>帐号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeAccount">修改帐号信息</button>
    <hr>
    <!-- 默认情况下在template中使用ref时，vue会自动对其进行解包（取出其中的value） -->
    <h2>当前计数: {{ counter }}</h2> 
    <button @click="increment">+1</button>
    <button @click="counter++">+1</button>
    <hr>
    <!-- 使用时不需要写.value -->
    <h2>当前计数: {{ info.counter }}</h2>
    <!-- info.counter.value -->
    <!-- 修改的时候需要写.value -->
    <button @click="info.counter.value++">+1</button>
    <!-- info.counter++会失败 -->

  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    setup(){
        // 1.定义普通的数据: 可以正常的使用 ！！重点
        // 缺点: 数据不是响应式的
        let message = ref("hello wrold")

        function changeClick(){
            message = "你好，李四"
            console.log(message)
        }

        // 2.定义响应式数据
        // 2.1.reactive函数：定义复杂类型的数据(对象类型或数组类型等)
        // const account = reactive("why") // 非复杂数据
        const account = reactive({
            username: "李四",
            password: "123"
        })

        function changeAccount(){
            account.username = "张三",
            account.password ="123456"
        }

        // 2.2.ref函数: 定义简单类型的数据（也可以定义复杂类型的数据）！！！重点
        // counter定义响应式数据
        const counter = ref(0)
        function increment(){
            console.log("incremenr")
            counter.value++
        }

        // 3.ref是浅层解包
        const info = {
            // counter: counter
            // 语法糖写法
            counter // 直接指向上面定义的counter
        }

        return{
            message,
            changeClick,
            account,
            changeAccount,
            counter,
            increment,
            info
        }
    }
}
</script>

<style scoped>

</style>