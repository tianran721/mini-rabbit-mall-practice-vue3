import {defineStore} from 'pinia'
export const useUserStore = defineStore('user',{
    state(){
        return{
            // 记录用户信息
            userInfo:{
                id:'',
                avatar:'',
                nickname:'',
                account:'',
                mobile:'',
                token:''
            }
        }
    },
    // 同步 + 异步
    actions:{
        setUserInfo(payload){
            this.userInfo = payload
        }
    },
    getters:{
    },
    persist: {
        enabled: true
    }
})

