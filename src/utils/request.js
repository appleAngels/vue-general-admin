import axios from 'axios'
import { getToken } from '@/utils/setToken'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.token = getToken('token')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    let { status, message } = response.data
    if (status != 200) {
      Message.error({ message: message || 'error' })
    }
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
