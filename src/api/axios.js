import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.baseURL = '192.168.0.123:48080';

const service = axios.create({
  withCredentials: true,
  timeout: 40000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/json; charset=UTF-8',
    "Content-Type": "application/json",
    "tenant-id":"1"
  },
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
    
  },
)

export default service