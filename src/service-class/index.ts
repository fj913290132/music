import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      return res
    },
    responseFailureFn(err) {
      return err
    }
  }
})

export default hyRequest
