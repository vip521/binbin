import axios from "axios"

const request = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 5000,
})

//1请求拦截器
request.interceptors.response.use(config => {
    return config
}, error => {
    //出现异常---抛出去
    return Promise.reject(error)
})
//2相应拦截
request.interceptors.response.use(response => {
    return response
}, error => {
    //出现异常---抛出去
    return Promise.reject(error)
})


export default request