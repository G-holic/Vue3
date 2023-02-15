import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// import函数导入，npm run build之后可以看到分包
// /* webpackChunkName: 'home' */ 取名字，
// 路由的懒加载(用的最多的)
// const Home = () => import(/* webpackChunkName: 'home' */"../views/Home.vue")
// const About = () => import(/* webpackChunkName: 'About' */"../views/About.vue")


// 创建一个路由: 映射关系
const router = createRouter({
    // 指定采用的模式
    history: createWebHashHistory(), // hash模式 #/
    // history: createWebHistory(), // /
    // 映射关系
    routes: [
        {
            path: "/",
            redirect: "/home"
        },// redirect把指定路径重定向
        {
            name: "home",
            path: "/home",
            component: () => import(/* webpackChunkName: 'home' */"../views/Home.vue"),
            meta: {
                name: "李四",
                age: 18
            },
            // 嵌套
            children: [
                {
                    path: "/home",
                    redirect: "/home/recommend"
                },
                {
                    path: "recommend", // /home/recommend
                    component: () => import("../views/HomeRecommend.vue")
                },
                {
                    path: "ranking", // /home/ranking
                    component: () => import("../views/HomeRanking.vue")
                },
            ]
        },// meta自定义数据 // 路由记录独一无二的名称；
        {
            name: "about",
            path: "/about",
            component: () => import(/* webpackChunkName: 'About' */"../views/About.vue")
        },
        {
            path: "/user/:id",
            component: () => import("../views/User.vue")
        },// "/user/:id" 动态路由的匹配
        // 订单
        { 
            path: "/order",
            component: () => import("../views/Order.vue")
        },
        // 登录
        {
            path: "/login",
            component: () => import("../views/Login.vue")
        },

        {// 如果匹配到任何一个不存在的路径，那么就自动显示下面的这个组件
            // abc/cba/nba 测试下面括号加*有啥变化 [ "abc", "cba", "nba" ]
            path: "/:pathMatch(.*)*",
            component: () => import("../views/NotFound.vue")
        }
    ]
})
// 1.动态管理路由 
let isAdmin = true // 是否是管理员
if (isAdmin) {
    // 一级路由
    router.addRoute({
        path: "/admin",
        component: () => import("../views/Admin.vue")
    })

    // 添加vip页面
    router.addRoute("home", {
        path: "vip",
        component: () => import("../views/HomeVip.vue")
    })
}
// 路由添加 router.addRoute 路由删除 router.removeRoute

console.log(router.getRoutes())//获取所有路由记录

// 2. 路由导航守卫
// beforeEach：在进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调

// 需求: 进入到订单（order）页面时，判断用户是否登录（isLogin -> localStorage保存token）
// 情况一: 用户没有登录，那么跳转到登录页面，进入登录的操作
// 情况而: 用户已经登录，那么直接进入到订单页面
router.beforeEach((to, from) => {//to是要跳转的路径，from是从哪个路径开始跳转（to:即将进入的路由Route对象；from:即将离开的路由Route对象；）
    // console.log("beforeEach传入的函数被回调")
    // console.log(to, from)
    // 1.进入到任何别的页面时，都跳转到login页面
    // if (to.path !== "/login") {
    //     return "/login" // 返回值（String类型的路径，对象，false。。。）
    // }

    // 2.进入到订单页面时，判断用户是否登录
    const token = localStorage.getItem("token")
    if (to.path === "/order" && !token) {
        return "/login"
    }

})


export default router // 导出去