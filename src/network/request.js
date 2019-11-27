import axios from 'axios'

export function request(options){

  // 1、创建实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/vip',
    timeout:5000
  })

  // 2、请求拦截
  instance.interceptors.request.use(
    config=>{
      return config
    },
    err=>{
      return err
    }
  )

  // 3、响应拦截
  instance.interceptors.response.use(
    res=>{
      return res.data
    },
    err=>{
      return err
    }
  )

  // 3、传入对象进行网络请求
  return instance(options)

}
