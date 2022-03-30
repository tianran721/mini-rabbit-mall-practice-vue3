import {defineStore} from 'pinia'
import {topCategory} from '@/api/const.js'
import {getCategory} from '@/api/home.js'
export const useCategoryStore = defineStore('category',{
    state(){
        return {
            list:topCategory.map(item=>({name:item}))
        }
    },
    // 同步 + 异步
    actions:{
        setList(payload){
            this.list = payload
        },
        async getList(){
            this.list = await getCategory()
        }
    },
    getters:{
    },
    persist: {
        enabled: true
    }
})

