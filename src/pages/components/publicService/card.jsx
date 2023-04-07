export default function Card() {
  return (
    <div className=" flex justify-between pb-10 border-b-2" style={{borderBottom:"1px solid #F0F3F7"}}>
      <div className="flex relative container">
        <img
          className="w-2/12 sm:w-4/12 h-full shadow-2xl"
          src="https://ts2.cn.mm.bing.net/th?id=ORMS.f493b8d02a263aa14f115f7a5895ca13&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=2&p=0"
          alt=""
          srcset=""
        />
        <div className="relative">
          <p className="pl-2  overflow-hidden truncate font-bold w-3/12 text-sm sm:w-2/12 md:w-3/12 lg:w-4/12 xl:w-6/12 sm:text-xl">
            再添新站点|集聚区第六个知识产权服务站点落户智汇蓝海再添新站点|集聚区第六个知识产权服务站点落户智汇蓝海
          </p>
          <div className="sm:pl-2 sm:mt-2 scale-75 transform sm:scale-100 relative -left-6   sm:left-0  line-clamp-2 text-xs sm:text-md text-gray font-medium leading-4 w-4/12 sm:w-3/12 md:w-4/12 lg:w-5/12 xl:w-7/12 sm:leading-6">
            11月3日，济南知识产权服务业集聚区——智汇蓝海互联网品牌孵化基地知识产权服务站点揭牌暨技术经纪人进园区活动圆满举办。
          </div>
          <div className="relative sm:absolute sm:bottom-4 sm:flex sm:w-full">
            <p className="absolute -left-10 scale-50 transform  sm:left-0 sm:scale-100 sm:text-sm sm:pl-2 text-gray">
              来源：新闻动态 - 活动资讯
            </p>
          </div>
        </div>
        <div className="absolute right-0 h-full flex flex-col justify-between">
          <div>
            <p className="text-xxl sm:text-30 ">04-01</p>
            <p className="text-md sm:text-xxl">2023</p>
          </div>
          <div className="relative">
            <img
              className="w-6 sm:w-12 absolute right-0 "
              src="/publicService/right.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
