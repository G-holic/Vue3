import {defineStore} from 'pinia'

const useUser = defineStore("user",{
    state:()=>({
        name: "我是userUser里的李四",
        age: 18,
        level: 99
    })
})

export default useUser