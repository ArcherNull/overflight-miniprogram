import { apiRequest } from './hooks'

const apis = {
    // 登录 --  登录页面
    login:(data)=>{return apiRequest('login' , data , 'POST').then(res=>res)},
    // 我的 --  获取用户信息
    getUserInfo: ()=>{return apiRequest('getUserInfo').then(res=>res)}
}

export default apis