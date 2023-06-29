// import { useRequest } from "ahooks";
import request from'./axios'//后期将验证码组件改造成函数组件再统一用ahooks
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// export function register(){
//     console.log(process.env)
//     console.log(publicRuntimeConfig.NEXT_PUBLIC_API)
//     // const { data, error, loading } = useRequest({
//     //     url:apiUrl+'/app-api/member/auth/register',
//     //     method: 'POST',
        
//     // });
//     const { data, error, loading } = useRequest('/app-api/member/auth/register');
// }
// 用户app-验证码接口不行 换成管理后台的
export async function getPicture(params) {
    console.log(apiUrl)
    console.log(publicRuntimeConfig.NEXT_PUBLIC_API)
    console.log(process.env.NODE_ENV)
    return request('admin-api/system/captcha/get',{
      method: 'POST',
      data:{"captchaType":"clickWord","clientUid":"point-672dabe0-b3d7-405c-8c65-ef213778ec86","ts":1684725864304},
    });
  }
  export async function reqCheck(params) {
    return request('admin-api/system/captcha/check',{
      method: 'POST',
      data: params,
    });
  }

