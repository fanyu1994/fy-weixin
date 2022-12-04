// axios
import axios from "axios";

const service = axios.create({
  baseURL: process.env.VITE_APP_BASE_URL,
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    const cf = config
    cf.headers = {
        'Content-Type':'application/json',
        'VERSION': 'v1',
        Authoriaztion: `Bearer ${localStorage.get('access_token')}`

    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
    response => {
        const xhr = response.data
        let res = null
        if(response.status === 200) {
            if(xhr.code === 0) {
                res = Promise.resolve(xhr)
            }else{
                // 全局错误消息提示

                res = Promise.resolve(xhr)
            }
        }
        return res
    },
    error => {
        Promise.reject(error)
    }
)
