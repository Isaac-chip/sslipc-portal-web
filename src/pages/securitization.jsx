import Summary from "./components/financial/summary";
import classNames from "classnames";
export default function securitizationPage() {
  return (
    <>
      <img
        className="w-full"
        src="/securitization/banner@2x.png"
        alt=""
        srcset=""
      />
      <div className="container mx-auto">
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/sdts@2x.png"
          titleImg="/securitization/title1@2x.png"
        >
          <div className="mt-33px grid grid-cols-2">
            {[
              {
                icon: "/securitization/wudiya@2x.png",
                title: "盘活IP资产",
                content:
                  "增强知识产权资产的收益性和流动性，扩展该类资产的价值实现方式，使其成为科创型中小企业融资的有效途径工具。",
              },
              {
                icon: "/securitization/gaoxiaolv@2x.png",
                title: "提升IP资产价值",
                content:
                  "以知识产权在公开渠道获得融资，能够体现资本市场对企业IP资产的高认可度，有利于凸显资产价值、提升品牌影响力。",
              },
              {
                icon: "/securitization/dichengben@2x.png",
                title: "降低融资成本",
                content:
                  "以公开市场作为融资渠道，能够帮助企业获得成本更低、效 率更高、风险更小的资金融入。",
              },
              {
                icon: "/securitization/gaoxiaolv@2x (1).png",
                title: "保持经营自主权",
                content:
                  "通过债务融资获得稳定资金支持，从而降低初创期企业出让股权以获取融资的需要，帮助企业保持精英管理的自主权。",
              },
              {
                icon: "/securitization/wudiya@2x.png",
                title: "保持专利所有权稳定",
                content:
                  "通过有效的机制设计，可以在专利所有权不发生转移的情况 下产生必要现金流。",
              },
              {
                icon: "/securitization/gaoxiaolv@2x (2).png",
                title: "增强资金稳定性",
                content:
                  "产品运作周期长，企业用款时间久，较之银行贷款具有更强的稳定性，无资金过桥成本。",
              },
            ]?.map((item, index) => {
              return (
                <div key={index} className="flex mb-20px max-w-lg">
                  <img
                    className="w-80px h-80px"
                    src={item.icon}
                    alt=""
                    srcset=""
                  />
                  <div className="ml-20px">
                    <div className="font-bold text-xl">{item.title}</div>
                    <p
                      className="text-sm font-medium mt-8px"
                      style={{ color: "#818181", lineHeight: "19px" }}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Summary>
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/BASE CASE@2x.png"
          titleImg="/securitization/zhengce@2x.png"
        >
          <div className="py-6">
            {[
              "产品期限：1年；",
              "融资成本：4%左右（预估本只产品融资成本不超4%）；",
              "发行规模：储架规模3亿元，首期规模1.5亿元左右；",
              "还本付息：按季度付息，到期一次性还本；",
              "发行场所：深交所；",
            ].map((item, index) => {
              return (
                <div className={classNames("flex items-center  px-2 py-2",{"bg-gray-100":index%2==0})}>
                  <div
                    className="w-25px h-25px rounded-full text-white flex justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(136deg, #548FFB 0%, #345EE8 100%)",
                    }}
                  >
                    {index+1}
                  </div>
                  <p className="pl-4">{item}</p>
                </div>
              );
            })}
          </div>
        </Summary>
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/cpms@2x.png"
          titleImg="/securitization/chanpin@2x.png"
        >
        <div className="py-6 mt-30px bg-slate-100 flex justify-center w-full">
            <img  src="/securitization/liucheng@2x.png" alt="" srcset="" />
        </div>
        </Summary>
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/LCJS@2x.png"
          titleImg="/securitization/liucheng@2x (1).png"
        >
        <div className="py-6  flex justify-center w-full">
            <img  src="/securitization/jindu@2x.png" alt="" srcset="" />
        </div>
        </Summary>
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/FWJG@2x.png"
          titleImg="/securitization/fuwu@2x.png"
        >
        <div className="py-6  flex justify-center w-full">
            <img  src="/securitization/fuwu@2x (1).png" alt="" srcset="" />
        </div>
        </Summary>
        <Summary
          rootClass={"mt-30px"}
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/securitization/RZSQ@2x.png"
          titleImg="/securitization/rongzi@2x.png"
        >
            <img className="py-2" src="/securitization/click@2x.png" alt="" srcset="" />
            <p className="text-xl pt-2 pb-8">联系我们：0769-26990216</p>
        </Summary>
      </div>
    </>
  );
}
