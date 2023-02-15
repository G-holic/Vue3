import { getCityAll } from '@/services'
import {defineStore} from 'pinia'

const useCityStore = defineStore("city",{
    state:()=>({
        allCites:{},

        currentCity:{
            cityName:"广州"
        }
    }),
    actions:{
        async fetchAllCitiesData(){
            const res = await getCityAll()
            this.allCites = res.data
        }
    },
})

export default useCityStore