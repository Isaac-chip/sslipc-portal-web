import { Card } from "flowbite-react";
import Image from "next/image";
export default function ExpertCard() {
 
  return (
    <div className="w-240px">
        <img className=" h-300px" src="https://ts1.cn.mm.bing.net/th?id=ORMS.ecf01f2fbc92af7a9326e8c7ddbacd2d&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=2&p=0" alt="" srcset="" />
        <p className="font-bold text-xxl mt-10px">金翔龙</p>
        <p className="text-sm text-gray-400">JIN XIANG LONG</p>
        <p className="text-md font-normal mt-11px">中国工程院院士</p>
        <p className="mt-6px leading-7">中国著名海洋地质与地球物理学家中国海底科学奠基人之一</p>
        <div className="flex items-center mt-19px">
          <div className="font-bold text-md text-blue">查看更多</div>
          <img className="" src="/expert/right.png" alt="" srcset="" />
        </div>
    </div>
  );
}
