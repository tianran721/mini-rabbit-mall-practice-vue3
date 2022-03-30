import {defineStore} from 'pinia'
export const useUserStore = defineStore('user',{
    state(){
        return{
                id:'',
                avatar:'',
                nickname:'',
                account:'',
                mobile:'',
                token:''
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

