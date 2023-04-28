import Banner from "./banner";
import Summary from "./summary";
import PolicyCard from "./policyCard";
export default function Financial() {
  const data = [
    {
      sortNum: 1,
      title: "业务申请",
      content:
        "通过松山湖IP中心官方网站、微信公众号、银行等途径提交融资业务申请。",
    },
    {
      sortNum: 2,
      title: "需求调查",
      content:
        "松山湖IP中心委派项目经理预立项，企业填写《中小企业知识产权质押融资需求调查表》。",
    },
    {
      sortNum: 3,
      title: "银行沟通",
      content:
        "松山湖IP中心正式立项并进行首次企业实地尽调，与银行渠道沟通企业资质情况，形成融资方案。",
    },
    {
      sortNum: 4,
      title: "授信尽调",
      content:
        "合作银行在中心项目组的陪同下对企业进行实地走访，完成贷前尽调程序，出具尽调报告。        ",
    },
    {
      sortNum: 5,
      title: "价值评估",
      content:
        "松山湖IP中心整合资源，协调内外部专家团队为企业拟质押专利出具《知识产权价值评估报告书》。",
    },
    {
      sortNum: 6,
      title: "信审&协议签署      ",
      content:
        "银行根据审批权限范围提交尽调材料，履行信审程序；银行、企业、松山湖IP中心完成各类协议的签署。        ",
    },
    {
      sortNum: 7,
      title: "质押登记",
      content:
        "松山湖IP中心协助银企双方向国家知识产权局外派代办机构提交知识产权质押登记申请，办理质押手续。        ",
    },
  ];
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Summary
          rootClass={"mt-30px"}
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
          rootClass={"mt-40px"}
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
      <Summary
        rootClass="container mx-auto mt-20px"
        bgImgClass="h-26px"
        titleImgClass="w-88px h-60px"
        bgImg="/financial/cpms.png"
        titleImg="/financial/chanpin.png"
      >
        <div className="mt-33px w-full  bg-blue-light py-10">
          <img
            className="mx-auto"
            src="/financial/liucheng(1).png"
            alt=""
            srcset=""
          />
        </div>
      </Summary>
      <Summary
        rootClass={"mt-40px container mx-auto"}
        bgImgClass="h-26px"
        titleImgClass="w-88px h-60px"
        bgImg="/financial/LCJS.png"
        titleImg="/financial/liucheng.png"
      >
        <div className="mt-33px mx-auto container">
          <div className="flex flex-1 flex-wrap justify-between">
            {data?.map((item) => {
              return (
                <div key={item}>
                  <div className="flex  box-border mb-30px">
                    <div
                      className="text-28 text-white font-bold flex justify-center items-center w-67px h-67px  flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(315deg, #335BE7 0%, #5693FC 100%)",
                        boxShadow: "2px 4px 4px 0px rgba(83,142,251,0.4)",
                        borderRadius: " 5px 5px 5px 5px",
                      }}
                    >
                      0{item.sortNum}
                    </div>
                    <div className="pl-2 max-w-xl">
                      <div className="text-lg font-bold">{item.title}</div>
                      <div className="text-md font-medium mt-1">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Summary>
      <Summary
        rootClass={"mt-40px container mx-auto"}
        bgImgClass="h-26px"
        titleImgClass="w-88px h-60px"
        bgImg="/financial/FWJG.png"
        titleImg="/financial/fuwu.png"
      >
        <div className="mt-33px mx-auto container">
          <div className="flex flex-1 flex-wrap">
            <div
              className="mb-4"
              style={{
                width: "200px",
                height: "127px",
                boxShadow: "0px 0px 4px 4px rgba(195,195,195,0.15)",
                borderRadius: " 0px 0px 0px 0px",
                opacity: 1,
                background:"url(/financial/dongguan.png)",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
              }}
            >
        
            </div>
            <div
              className="ml-0 sm:ml-28 "
              style={{
                width: "280px",
                height: "127px",
                boxShadow: "0px 0px 4px 4px rgba(195,195,195,0.15)",
                borderRadius: "0px 0px 0px 0px",
                opacity: 1,
                background:"url(/financial/jianshe.png)",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
          </div>
        </div>
      </Summary>
      {/* 融资申请 */}
      <Summary
        rootClass={"mt-40px container mx-auto"}
        bgImgClass="h-26px"
        titleImgClass="w-88px h-60px"
        bgImg="/financial/RZSQ.png"
        titleImg="/financial/rongzi.png"
      >
       <div className="container mx-auto">
       <div className="text-xxxl pb-141px pt-27px">联系我们：0769-26990216</div>
       </div>
      </Summary>
    </div>
  );
}
