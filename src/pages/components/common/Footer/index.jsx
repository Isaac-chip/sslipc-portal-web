import { Pagination } from "flowbite-react";
import Link from "next/link";
export default function Footer() {
  return (
    <div
      className="w-screen h-70 sm:h-50 "
      style={{
        background: "#15244E",
      }}
    >
      <div className="container mx-auto block sm:flex justify-between box-border pt-38px pb-20px">
        <div className="flex justify-center sm:justify-start">
          <div>
            <div className="font-bold text-md text-white">相关链接</div>
            <div className="mt-33px font-medium text-gray-400">
              <Link
                target={"_bank"}
                href={"http://www.sipc26.com/"}
              >
                <div className="text-xs mb-13px">南方中心</div>
              </Link>
              <Link target={"_bank"} href={"https://www.gpic.gd.cn/"}>
                <div className="text-xs mb-13px"> 粤港澳大湾区知识产权</div>
              </Link>
              <Link target={"_bank"} href={"http://amr.gd.gov.cn/"}>
                <div className="text-xs mb-13px">市场监督管理局</div>
              </Link>
            </div>
          </div>
          <div className="ml-100px">
            <div className="font-bold text-md text-white">其他</div>
            <div className="mt-33px font-medium text-gray-400">
              <div className="text-xs mb-13px">关于我们</div>
              <div className="text-xs mb-13px">联系我们</div>
            </div>
          </div>
        </div>
        <div className="flex text-white justify-center sm:justify-start mt-2 sm:mt-0">
          <div className="w-87px h-87px bg-white p-1">
            <img className="w-full h-full bg-black" src="/home/erqweima.png" alt="" srcset="" />
          </div>
          <div className="pl-20px">
            <div className="text-sm">周一周五： 08：30-17:00</div>
            <div className="text-lg mt-14px">0769-26990216</div>
          </div>
        </div>
      </div>
    </div>
  );
}
