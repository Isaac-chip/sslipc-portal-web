import Login from "./components/login/login";
import Input from "./components/common/Input/Input";
export default function LoginPage() {
  return (
    <>
      <div className="relative w-full h-full">
        {/* <Login></Login> */}
        <div
          className="absolute top-4  w-400px"
          style={{ left: "53%", top: "34%" }}
        >
          <div className="relative">
            <Input
              type={"password"}
              placeholder="请输入密码"
              icon="/input/mima.png"
            ></Input>
            <p className="cursor-pointer absolute -translate-y-2/4 right-2" style={{top:"50%"}}>获取验证码</p>
          </div>
        </div>
      </div>
    </>
  );
}
