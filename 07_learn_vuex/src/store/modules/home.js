export default{
    state:()=>({
        // 服务器数据
        banners: [],
        recommends: []
    }),
    mutations:{
        // mutations创建逻辑，由后面的actions提交   
        changeBanners(state, banners) {
            state.banners = banners
        },
        changeRecommends(state, recommends) {
            state.recommends = recommends
        }
    },
    actions:{
        // Actions-发送网络请求拿取数据
        async fetchHomeMultidataAction(context) { // async异步函数的返回值是一个Promise
            // // 修改state数据
            // context.commit("changeBanners", data.data.banner.list)
            // context.commit("changeRecommends", data.data.recommend.list)
            // resolve()
            // 手动返回一个Promise
            return new Promise(async (resolve, reject) => {
                const res = await fetch("http://123.207.32.32:8000/home/multidata")
                const data = await res.json()
                // console.log(data)

                // 修改state数据
                context.commit("changeBanners", data.data.banner.list)
                context.commit("changeRecommends", data.data.recommend.list)
                resolve("aaa")// 也可以传数据：data.data
            })
        }
    }
}