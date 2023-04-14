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
            <div className="flex">
              <p className="text-xxl font-bold">
                俄罗斯经典动漫图书《宝石山-洞穴里的怪女孩》
              </p>
              <div
                className="w-52px text-sm px-2 py-1 box-border"
                style={{
                  borderRadius: "2px 2px 2px 2px",
                  opacity: "1",
                  border: "2px solid #FCBB6E",
                  color: "#FCBB6E",
                }}
              >
                多 类
              </div>
            </div>

            <img
              className="w-26px h-23px"
              src="/icon/shoucang.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="mt-6">
            <div>
              <div className="flex mb-3 items-center justify-between">
                <p className="text-lg" style={{ color: "#565656" }}>
                  商标编号：1D7BE46D18
                </p>
                <div className="flex items-center">
                    <p className="text-lg" style={{color:"#565656"}}>出售价格：<span className="text-xxl text-red-700">12300.00</span></p>
                    <img className="ml-10" src="/icon/lianxi.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-3">
                <p className="text-lg" style={{ color: "#565656" }}>
                  商标分类：第20类 家具用品
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-3">
                <p className="text-lg" style={{ color: "#565656" }}>
                  有效期限：2021-03-28 00:00:00 至 2031-03-27 00:00:00
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-3">
                <p className="text-lg" style={{ color: "#565656" }}>
                  使用范围：家具,床,沙发,衣柜,塑料线卡,画框,坚果壳制工艺品,非金属标示牌,家具用非金属脚轮,野营床垫
                </p>
              </div>
            </div>
            <div>
              <div className="flex mb-3">
                <p className="text-lg" style={{ color: "#565656" }}>
                相关分类：<span className="text-blue underline">11类20类</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
