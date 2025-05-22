// 引入axios 
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
let request = axios.create({
    // 设置请求的基准地址
    baseURL: 'https://m1.apifoxmock.com/m1/6066905-5757134-default',
    // 请求超时时间
    timeout: 5000
})



export default request;
