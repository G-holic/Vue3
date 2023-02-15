// 定义关于counter的store
import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore("counter", {
    state: () => ({
        count: 99,
        friends: [
            { id: 111, name: "李四" },
            { id: 112, name: "王五" },
            { id: 113, name: "赵六" },
        ]
    }),
    getters: {
        // 1.基本使用
        doubleCount(state) {
            return state.count * 2
        },
        // 2.一个getter 引入另外一个getter
        doubleCountAddOne() {
            // this是store实例
            return this.doubleCount + 1
        },
        // 3.getters他支持返回一个函数
        getFriendById(state) {
            return function (id) {
                for (let i = 0; i < state.friends.length; i++) {
                    const friend = state.friends[i]
                    if (friend.id === id) {
                        return friend
                    }
                }
            }
        },
        // 4.getters中用到别的store中的数据
        showMessage(state) {
            // 1.获取user信息
            const useStore = useUser()
            // 2.获取自己的信息
            // 3.拼接信息
            return `name:${useStore.name}-count:${state.count}`

        }
    },
    actions: {
        increment() { 
            this.count++
        },
        incrementNum(num) {
            this.count += num
        }
    }
})// defineStore返回的是一个函数

export default useCounter