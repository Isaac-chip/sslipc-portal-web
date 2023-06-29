import { useEffect, useState } from "react";
import Input from "./components/common/Input/Input";
import LoginDialogWraper from "./components/common/LoginDialogWraper";
import { Alert } from "flowbite-react";
import VerifyPointFixed from "./components/verifyPointFixed";
export default function RegisterPage() {

 
  const [isPointShow, setIsPointShow] = useState(false);


  const submit = () => {
    setIsPointShow(true);
  };

  return (
    <div className="relative">
          <div className="pointPopup">
           
            {
            isPointShow ?
            (<VerifyPointFixed isPointShow={isPointShow} closeFn={(e)=>setIsPointShow(e)} />)
            : ''
            }
          </div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 ">
        <Alert color="failure" onDismiss={() => alert("Alert dismissed!")}>
          <span>
            <p>Change a few things up and try submitting again.</p>
          </span>
        </Alert>
      </div>
      <LoginDialogWraper>
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "26%" }}
        >
          <Input
            icon="/input/yonghu.png"
            type={"text"}
            placeholder="请输入用户名"
          ></Input>
        </div>
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "34%" }}
        >
          <Input
            icon="/input/phone.png"
            type={"text"}
            placeholder="请输入您的手机号"
          ></Input>
        </div>
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "42%" }}
        >
          <div className="relative">
            <Input
              type={"text"}
              placeholder="请输入验证码"
              icon="/input/mima.png"
            ></Input>
            <p
              className="cursor-pointer absolute -translate-y-2/4 right-2 text-blue underline"
              style={{ top: "50%" }}
            >
              获取验证码
            </p>
          </div>
        </div>
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "50%" }}
        >
          <Input
            type={"password"}
            placeholder="请输入登录密码"
            icon="/input/mima.png"
          ></Input>
        </div>
        <div
          className=" top-4  w-400px mt-4"
          style={{ left: "53%", top: "58%" }}
        >
          <Input
            type={"password"}
            placeholder="再次输入登录密码"
            icon="/input/mima.png"
          ></Input>
        </div>
        <div
          onClick={submit}
          className="cursor-pointer mt-8 w-400px  py-4  rounded-md flex justify-center items-center text-white text-xxl"
          style={{
            left: "53%",
            top: "66%",
            background: "linear-gradient(132deg, #538EFA 0%, #3A66EB 100%)",
            boxShadow: "4px 4px 9px 2px rgba(64,112,239,0.3)",
          }}
        >
          注册
        </div>
        <div
          className="flex items-center mt-3"
          style={{
            left: "53%",
            top: "74%",
          }}
        >
          <img className="" src="/icon/weixuanzhong.png" alt="" srcset="" />
          <p className="ml-1" style={{ color: "#B9BED1" }}>
            已阅读并同意
            <span style={{ color: "#3C76F3" }}>
              《知识产权运营公共服务平台服务协议》
            </span>
          </p>
        </div>
      </LoginDialogWraper>
    </div>
  );
}
