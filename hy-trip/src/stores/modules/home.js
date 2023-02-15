import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/services'
const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage: 1,
        houselist: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            // console.log(res)
            this.hotSuggests = res.data
        },
        async fetchCateGoriesData() {
            const res = await getHomeCategories()
            // console.log(res)
            this.categories = res.data
        },
        async fetchHouseListData() {
            const res = await getHomeHouseList(this.currentPage)
            // console.log(res)
            // 追加数据而不是赋值
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})

export default useHomeStore