import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'

// 创建 Axios 实例
const instance = axios.create({
  baseURL: 'http://codercba.com:9002', // 设置基础 URL
  timeout: 5000 // 设置请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如，添加请求头、身份验证等
    // config.headers.Authorization = 'Bearer ' + token;
    return config
  },
  (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    // 例如，检查状态码、处理错误等
    return response.data
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    // 例如，统一处理错误、返回自定义错误信息等
    return Promise.reject(error)
  }
)

// 导出封装好的 Axios 实例
export default instance.request
