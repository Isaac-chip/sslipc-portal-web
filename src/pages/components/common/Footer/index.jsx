export default function Footer() {
  return (
    <div
      className="w-screen h-70 xs:h-50 fixed bottom-0"
      style={{
        background: "#15244E",
      }}
    >
      <div className="container mx-auto block sm:flex justify-between box-border pt-38px ">
        <div className="flex justify-center sm:justify-start">
          <div>
            <div className="font-bold text-md text-white">相关链接</div>
            <div className="mt-33px font-medium text-gray-400">
              <div className="text-xs mb-13px">国家知识产权局</div>
              <div className="text-xs mb-13px">南方中心知识产权运营中心</div>
              <div className="text-xs mb-13px">南方中心知识产权运营中心</div>
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
            
            <img className="w-full h-full bg-black" src="" alt="" srcset="" />
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
