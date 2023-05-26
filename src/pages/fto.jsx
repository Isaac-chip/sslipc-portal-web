import FTO from "./components/fto";
export default function FTOPage() {
  return (
    <>
      <img
        className="w-full"
        src="/fto/banner4.png"
        alt=""
        srcset=""
      />
      <div
        className="container mx-auto grid grid-cols-2 mt-4"
        style={{ background: "url(/fto/bg3.png)" }}
      >
        <div className="h-174px box-border pt-4 pl-4">
          <div className="flex items-center">
            <img
              className="w-36px h-36px"
              src="/fto/fto.png"
              alt=""
              srcset=""
            />
            <p className="text-xxl font-bold ml-12px">FTO调查（产品防侵权调查）</p>
          </div>
          <p
            style={{ color: "#818181" }}
            className="pl-52px text-16px leading-6 max-w-xl"
          >
          对企业计划研发、生产或参展的产品进行专利检索，评估侵犯他人专利权的概率和侵权纠纷发生的可能性，便于及早制定防御策略和应对措施。
          </p>
        </div>
        <div className="h-174px box-border pt-4 pl-4">
          <div className="flex items-center">
            <img
              className="w-36px h-36px"
              src="/fto/fuwu.png"
              alt=""
              srcset=""
            />
            <p className="text-xxl font-bold ml-12px">我们的服务</p>
          </div>
          <p
            style={{ color: "#818181" }}
            className="pl-52px text-16px leading-6 max-w-xl"
          >
          基于客户提供的技术构想/方向,进行专利检索，帮助客户将难以读懂的专利信息转化为技术信息，讲解给客户，帮助客户研发立项。可以达到的效果:减少研发支出/了解竞争对手的专利技术情况/降低侵权风险。
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <FTO></FTO>
      </div>
    </>
  );
}
