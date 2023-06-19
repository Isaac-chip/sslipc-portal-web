import React, { useEffect } from "react";
import Input from "../common/Input/Input";
import LoginDialogWraper from "../common/LoginDialogWraper";

import { useRouter } from "next/router"
export default function Login() {
  const router = useRouter()
  return (
    <div>
      <LoginDialogWraper title="欢迎登陆">
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "26%" }}
        >
          <Input
            icon="/input/zhanghao.png"
            type={"text"}
            placeholder="请输入账号"
            rules={{ required: "请填写企业名称" }}
          ></Input>
        </div>

        <div
          className="top-4  w-400px mt-4"
          style={{ left: "53%", top: "50%" }}
        >
          <Input
            type={"password"}
            placeholder="请输入密码"
            icon="/input/mima.png"
          ></Input>
        </div>

        <div
          className="mt-8 w-400px  py-4  rounded-md flex justify-center items-center text-white text-xxl"
          style={{
            left: "53%",
            top: "66%",
            background: "linear-gradient(132deg, #538EFA 0%, #3A66EB 100%)",
            boxShadow: "4px 4px 9px 2px rgba(64,112,239,0.3)",
          }}
        >
          登录
        </div>
        <div className="flex w-full justify-between mt-3">
          <p style={{ color: "#B9BED1" }}>忘记密码</p>
          <p onClick={()=>router.push("/register")} className="text-blue cursor-pointer">立即注册</p>
        </div>
      </LoginDialogWraper>
    </div>
  );
}
