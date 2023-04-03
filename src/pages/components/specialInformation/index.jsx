import { Card } from "flowbite-react";
import IntroTitle from "../common/IntroTitle";

export default function SpecialInformation() {
  return (
    <div>
      <div className="mt-73px mb-42px">
        <IntroTitle title="专题资讯" desc={"Special Information"}></IntroTitle>
      </div>
      <div className="container mx-auto sm:flex justify-between box-border">
        <div className="relative w-400px h-300px bg-black sm:mr-2 mx-auto mb-1 sm:mb-0">
          <img
            className="w-full h-full"
            src="https://ts3.cn.mm.bing.net/th?id=ORMS.2d6d7f75944705cb4a16d5fe73585eec&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
            alt=""
          />
          <div
            className="absolute bottom-0 h-50px w-full flex"
            style={{
              background: "rgba(48, 120, 236, 0.3)",
            }}
          >
            <div
              className="w-60px h-50px flex flex-col justify-center items-center"
              style={{
                background: "linear-gradient(270deg, #3078EC 0%, #4B73FA 100%)",
              }}
            >
              <div className="text-xl text-white font-bold leading-none">
                16
              </div>
              <div className="scale-75 transform leading-none text-white">
                2023.3
              </div>
            </div>
            <div className="text-white ml-20px mr-20px truncate" style={{lineHeight:"50px"}}>
              外国驻穗领团参观考察南方中心点赞知识产权运外国驻穗领团参观考察南方中心点赞知识产权运
            </div>
          </div>
        </div>

        <div className="w-720px h-300px bg-black">2</div>
      </div>
    </div>
  );
}
