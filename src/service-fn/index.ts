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
    const { method = 'GET', data = {} } = config

    switch (method.toUpperCase()) {
      // 获取数据
      case 'GET':
        return config
      // 添加数据
      case 'POST':
        // 表单提交 content-type = application/x-wwH-form-url-encoded
        if (
          config.headers['Content-Type'] ===
          'application/x-wwH-form-url-encoded'
        ) {
          // 转参数 URLSearchParams/第三⽅库qs
          const p = new URLSearchParams()
          for (const key in data) {
            p.append(key, data[key])
          }
          config.data = p
          return config
        }
        // ⽂件提交 content-type = multipart/form-data
        if (config.headers['Content-Type'] === 'multipart/form-data') {
          const p = new FormData()
          for (const key in data) {
            p.append(key, data[key])
          }
          config.data = p
          return config
        }
        // 默认 content-type = application/json
        return config
      // 修改数据 - 所有的数据的更新
      case 'PUT':
        return config
      //删除数据
      case 'DELETE':
        return config
      // 修改数据 - 部分的数据的更新
      case 'PATCH':
        return config
      // 默认返回实例
      default:
        return config
    }
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
