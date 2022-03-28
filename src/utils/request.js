import axios from 'axios'
import {useUserStore} from '../store/user-store'
import router from '../router'

console.log('111')
// 请求 OSS | axios
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    baseURL,
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
})



instance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    let userInfo = userStore.userInfo;
    // 判断是否有token
    if(userInfo.token){
        config.headers.Authorization = `Bearer ${userInfo.token}`
    }
    return config
}, (err) => {
    return Promise.reject(err)
})

instance.interceptors.response.use((response) => {
    return response.data
}, (err) => {
    // if 401 code
    // 清除无效信息 跳转登录页(带当前地址)
    if(err.response && err.response.status === 401){
        const userStore = useUserStore()
        userStore.userInfo = {}
        // currentRoute 类型是Ref
        let fullPath = router.currentRoute.value.fullPath
        // 转url 编码
        router.push('/login?redirectUrl='+encodeURIComponent(fullPath))
    }
    return Promise.reject(err)
})


const request = (url,method,data) => {
    return instance({
        url,
        method,
       /* params:{

        },
        // 请求体
        data:{

        }*/
        // 动态属性
        [method.toLowerCase() === 'get' ? 'params' : 'data'] : data
    })

}


export default request
