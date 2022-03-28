import {defineStore} from 'pinia'
export const useCartStore = defineStore('cart',{
    state(){
        return{
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

