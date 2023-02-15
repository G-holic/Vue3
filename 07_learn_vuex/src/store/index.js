import { createStore } from "vuex";
import { CHANGE_INFO } from "./mutation_types";

import homeModule from './modules/home'
import counterModule from './modules/counter'

const store = createStore({
    state: () => ({
        // counter: 100, // vuex创建的对象默认是响应式的
        rootCounter: 100,
        name: "李四",
        level: 100,
        avatarURL: "http://xxxxx",
        friends: [
            { id: 111, name: "李四", age: 20 },
            { id: 112, name: "王五", age: 25 },
            { id: 113, name: "赵六", age: 35 }
        ],

        // // 服务器数据
        // banners: [],
        // recommends: []
    }),
    getters: {
        // 1.基本使用（基本操作）
        doubleCounter(state) {
            return state.counter * 2
        },
        // 1.基本使用（复杂操作）
        totalAge(state) {
            return state.friends.reduce((preValue, item) => {
                return preValue + item.age
            }, 0)
            // 0是给它的初始化的值
        },
        // 2.在该getters属性中，获取其他的getters
        message(state, getters) {

            return `name:${state.name} level:${state.level} friendTotalage:${getters.totalAge}`
        },
        // 3.getters是可以返回一个函数的，调用这个函数可以传入参数
        getFriendById(state) {
            // 根据id获取一个朋友的信息
            return function (id) {
                const friend = state.friends.find(item => item.id === id)
                return friend
            }
        }

    },
    mutations: {
        increment(state) {
            state.counter++
        },
        // mutations的基本使用
        changeName(state, payload) {
            state.name = payload
        },
        incrementLevel(state) {
            state.level++
        },
        // mutations常量用法  
        [CHANGE_INFO](state, newInfo) {
            state.level = newInfo.level
            state.name = newInfo.name

            // 重要原则：不要再mutation方法中执行异步操作
            // fetch("xxx").then(res=>{
            //     res.json().then(res=>{
            //         state.name = res.name
            //     })
            // })
        },

        // mutations创建逻辑，由后面的actions提交   
        // changeBanners(state, banners) {
        //     state.banners = banners
        // },
        // changeRecommends(state, recommends) {
        //     state.recommends = recommends
        // }
    },
    actions: {
        incrementAction(context) {
            // console.log(context.commit)// 用于提交mutation
            // console.log(context.getters)// 获取getters的东西
            // console.log(context.state)// 获取state的东西
            context.commit("increment")
        },
        changeNameAction(context, payload) {
            context.commit("changeName", payload)
        },

        // Actions-发送网络请求拿取数据
        // async fetchHomeMultidataAction(context) { // async异步函数的返回值是一个Promise
        // 1.返回Promise，给promise设置then
        // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //     res.json().then(data => {
        //         console.log(data)
        //     })
        // })

        // 2.Promise链式调用
        // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //     return res.json()
        // }).then(data => {
        //     console.log(data)
        // })

        // 3.await/async (使用await需要在fetchHomeMultidataAction函数前加async使其变为异步函数，才可使用)
        // const res = await fetch("http://123.207.32.32:8000/home/multidata")
        // const data = await res.json()
        // // console.log(data)

        // // 修改state数据
        // context.commit("changeBanners", data.data.banner.list)
        // context.commit("changeRecommends", data.data.recommend.list)
        // resolve()
        // 手动返回一个Promise
        //     return new Promise(async (resolve, reject) => {
        //         const res = await fetch("http://123.207.32.32:8000/home/multidata")
        //         const data = await res.jso n()
        //         // console.log(data)

        //         // 修改state数据
        //         context.commit("changeBanners", data.data.banner.list)
        //         context.commit("changeRecommends", data.data.recommend.list)
        //         resolve("aaa")// 也可以传数据：data.data
        //     })
        // }
    },
    modules: {
        home: homeModule,
        counter: counterModule
    }

})

export default store