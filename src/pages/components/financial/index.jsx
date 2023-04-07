import Banner from "./banner";
import Summary from "./summary";
import PolicyCard from "./policyCard";
export default function Financial() {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Summary
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/financial/sdts.png"
          titleImg="/financial/title1.png"
        >
          <div className="mt-33px">
            <div className="flex mb-20px">
              <img
                className="w-80px h-80px"
                src="/financial/wudiya.png"
                alt=""
                srcset=""
              />
              <div className="ml-20px">
                <div className="font-bold text-xl">无抵押</div>
                <p
                  className="text-sm font-medium mt-8px"
                  style={{ color: "#818181", lineHeight: "19px" }}
                >
                  仅需以专利、版权等知识产权资产进行质押即可获得银行等机构的信贷资金支持，不需提供不动产抵押等传统措施。
                </p>
              </div>
            </div>
            <div className="flex mb-20px">
              <img
                className="w-80px h-80px"
                src="/financial/dichengben.png"
                alt=""
                srcset=""
              />
              <div className="ml-20px">
                <div className="font-bold text-xl">低成本</div>
                <p
                  className="text-sm font-medium mt-8px"
                  style={{ color: "#818181", lineHeight: "19px" }}
                >
                  企业通过“知易贷”，综合相关政府支持政策，可以实现利率在3%左右。松山湖企业在符合条件的情况下可享受最高9
                  成贴息。
                </p>
              </div>
            </div>
            <div className="flex mb-20px">
              <img
                className="w-80px h-80px"
                src="/financial/gaoxiaolv.png"
                alt=""
                srcset=""
              />
              <div className="ml-20px">
                <div className="font-bold text-xl">高效率</div>
                <p
                  className="text-sm font-medium mt-8px"
                  style={{ color: "#818181", lineHeight: "19px" }}
                >
                  松山湖IP中心通过有效的渠道资源整合，能够将“知易贷”模式的贷前运作周期（自授信尽职调查开始，至授信完成、融
                  资方与资金方签订相关贷款协议为止）缩短至22个工作日以内。
                </p>
              </div>
            </div>
          </div>
        </Summary>
        <Summary
          bgImgClass="h-26px"
          titleImgClass="w-88px h-60px"
          bgImg="/financial/zcbt.png"
          titleImg="/financial/zhengce.png"
        >
          <div className="mt-33px">
            <div className="flex flex-1 flex-wrap justify-between">
              <PolicyCard icon={"/financial/money.png"}>
                <p>
                  补息贴额利息不超
                  <span className="text-xxxl font-medium">50%</span>
                </p>
                <p className="">
                  倍补贴金额不超过
                  <span className="text-xxxl font-medium">50万</span>元；
                </p>
              </PolicyCard>
              <PolicyCard icon={"/financial/pinggu.png"}>
                <p>
                  评估费不超
                  <span className="text-xxxl font-medium">50%</span>
                  补贴
                </p>
                <p className="">
                  资助不超过
                  <span className="text-xxxl font-medium">30万</span>元；
                </p>
              </PolicyCard>
              <PolicyCard icon={"/financial/money.png"}>
                <p>
                贷融资成本补贴
                  <span className="text-xxxl font-medium">50%</span>
           
                </p>
                <p className="">
                最高资助
                  <span className="text-xxxl font-medium">100万</span>元；
                </p>
              </PolicyCard>
            </div>
          </div>
        </Summary>
      </div>
    </div>
  );
}
