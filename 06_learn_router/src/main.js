import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

localStorage.setItem("token","code")

const app = createApp(App)
app.use(router)
app.mount('#app')
