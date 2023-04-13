export default function TitleCard() {
  return (
    <>
      <div className="mt-4 bg-white flex flex-grow box-border pt-20px pl-20px pr-20px pb-22px">
        <div className="w-290px h-230px bg-black">
          <img
            className="w-full h-full"
            src="https://www.bing.com/th?id=OVFT.pqaa6XQZhATd2mUMrvnY1C&pid=News&w=120&h=80&c=14&rs=2&qlt=90"
            alt=""
            srcset=""
          />
        </div>
        <div className="ml-8 flex-grow">
          <div className="flex justify-between flex-grow">
            <p className="text-xxl font-bold">
              俄罗斯经典动漫图书《宝石山-洞穴里的怪女孩》
            </p>
            <img className="w-26px h-23px" src="/icon/shoucang.png" alt="" srcset="" />
          </div>
          <div className="mt-10">
            <div>
              <div className="flex mb-4">
                <p className="text-lg" style={{ color: "#565656" }}>
                  授权期限：12个月
                </p>
                <p className="text-lg ml-40" style={{ color: "#565656" }}>
                  授权范围：线上+线下
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <p className="text-lg" style={{ color: "#565656" }}>
                  到期缓冲：3个月
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <p className="text-lg" style={{ color: "#565656" }}>
                  权利类型：营销授权
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-4">
                <p className="text-lg flex items-center" style={{ color: "#565656" }}>
                    <p>交易价格：</p><p className="text-red-500">免费</p>
                    <img className="w-86px h-27px ml-10" src="/icon/lianxi.png" alt="" srcset="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
