import { createApp } from 'vue'
// 01_自定义指令
// import App from './01_自定义指令/01_自定义指令的基本使用.vue'
// import App from './01_自定义指令/02_自定义指令生命周期.vue'
// import App from './01_自定义指令/03_自定义指令参数修饰符值.vue'
// import App from './01_自定义指令/App.vue'

// 02_内置组件补充
// import App from './02_内置组件补充/App_teleport.vue' // teleport内置组件
// import App from './02_内置组件补充/App.vue' // Suspense

// 03_安装插件
// import App from './03_安装插件/App.vue' 

// 04_Render函数
// import  App  from './04_Render函数/01_Render函数的基本使用.vue'
// import  App  from './04_Render函数/02_render函数计数器实现.vue'
// import App from './04_Render函数/App.vue' // compositionAPI的使用

// 05_JSX的语法
// import App from './05_JSX的语法/01_jsx语法基本使用.vue'
// import App from './05_JSX的语法/02_jsx语法实现计数器.vue'
// import App from './05_JSX的语法/App.vue' // compositionAPI的使用

// 06_过渡动画
// import App from './06_过渡动画/01_transition动画.vue'  
// import App from './06_过渡动画/03_动画属性设置(一).vue'
// import App from './06_过渡动画/04_动画属性设置(二).vue'
// import App from './06_过渡动画/05_动画组件动画.vue' 
import App from './06_过渡动画/App.vue'  // 动画的过渡：移动。。。

// import useDirectives from './01_自定义指令/directives/index'

// import routers from './router'

// const app = createApp(App)
// useDirectives(app)
// app.mount('#app')
// 使用插件
// createApp(App).use(useDirectives).mount("#app")

createApp(App).mount("#app")

