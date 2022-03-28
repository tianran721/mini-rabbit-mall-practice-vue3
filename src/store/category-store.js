import {defineStore} from 'pinia'
export const useCategoryStore = defineStore('category',{
    state(){
        return{
            categoryList:[]
        }
    },
    // 同步 + 异步
    actions:{

    },
    getters:{
    },
    persist: {
        enabled: true
    }
})

