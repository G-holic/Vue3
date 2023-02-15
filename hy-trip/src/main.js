import { createApp } from 'vue'
import App from './App.vue'
// css重置
import "normalize.css "
import "./assets/css/index.css"
// 路由
import router from './router'
// pinia
import pinia from './stores'
// UI组件使用
import { Button, Rate, Tabbar, TabbarItem, Search, Tab, Tabs, IndexBar, IndexAnchor, Cell, Calendar, NavBar, Swipe, SwipeItem,Icon  } from 'vant'
createApp(App).use(router).use(pinia)
    // .use(Button)
    .use(Tabbar).use(TabbarItem)
    .use(Search).use(Tab).use(Tabs).use(IndexBar).use(IndexAnchor).use(Cell)
    .use(Calendar)
    .use(Rate)
    .use(NavBar)
    .use(Swipe).use(SwipeItem)
    .use(Icon)
    .mount('#app') 
