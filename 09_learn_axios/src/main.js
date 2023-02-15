import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import hyRequest from './service'

createApp(App).mount('#app')

hyRequest.request({
    url:"/lyric?id=500665346"
}).then(res=>{
    console.log("res:",res)
})

hyRequest.request({
    url:"/lyric",
    params:{
        id:500665346
    }
}).then(res=>{
    console.log("res:",res)
})