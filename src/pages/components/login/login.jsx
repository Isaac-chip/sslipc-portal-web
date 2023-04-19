import React from "react";
import Input from "../common/Input/Input";
export default function Login() {
  return (
    <>
      <img className="h-screen w-screen" src="/login/bg.png" alt="" srcset="" />

      <p
        className="absolute text-38 text-blue"
        style={{ left: "62%", top: "16%" }}
      >
        欢迎登录
      </p>
      <div
        className="absolute top-4  w-400px"
        style={{ left: "53%", top: "26%" }}
      >
        <Input type={"text"} placeholder="请输入账号"></Input>
      </div>

      <div
        className="absolute top-4  w-400px"
        style={{ left: "53%", top: "34%" }}
      >
        <Input
          type={"password"}
          placeholder="请输入密码"
          icon="/input/mima.png"
        ></Input>
      </div>
      <div
        className="w-400px absolute py-4  rounded-md flex justify-center items-center text-white text-xxl"
        style={{
          left: "53%",
          top: "44%",
          background: "linear-gradient(132deg, #538EFA 0%, #3A66EB 100%)",
          boxShadow: "4px 4px 9px 2px rgba(64,112,239,0.3)",
        }}
      >
        登录
      </div>
      <div
        className=" absolute"
        style={{ color: "#B9BED1", left: "53%", top: "52%" }}
      >
        忘记密码
      </div>
      <div
        className=" absolute"
        style={{ color: "#3C76F3", left: "78%", top: "52%" }}
      >
        立即注册
      </div>
    </>
  );
}
