import {defineStore} from 'pinia'


export const useStore = defineStore('main',{
    state(){
        return{
            name:'zs'
        }
    },
    // 同步 + 异步
    actions:{
        setName (value) {
            setTimeout(() => {
                this.name = value
            },2000)
        }
    },
    getters:{
        addName(state){
            return state.name + 'ww'
        }
    },
    persist: {
        enabled: true
    }
})

