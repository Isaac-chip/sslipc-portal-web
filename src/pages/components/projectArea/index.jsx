import CopyRightCard from "../common/CopyRightCard";
import TradeMarkCard from "../common/TradeMarkCard";
import PatentDetailCard from "../patentDetail/card";

export default function ProjectArea() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <img
          className="w-240px h-308px"
          src="/projectArea/zhuanli.png"
          alt=""
          srcset=""
        />
        {new Array(4).fill("")?.map((item) => {
          return <PatentDetailCard></PatentDetailCard>;
        })}
      </div>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <img
          className="w-240px h-350px"
          src="/projectArea/shangbiao.png"
          alt=""
          srcset=""
        />
        {new Array(4).fill("")?.map((item) => {
          return <TradeMarkCard></TradeMarkCard>;
        })}
      </div>
      <div className="grid grid-cols-5 gap-4 mb-4">
        <img
          className="w-240px h-320px"
          src="/projectArea/shangbviao.png"
          alt=""
          srcset=""
        />
        {new Array(4).fill("")?.map((item) => {
          return <CopyRightCard></CopyRightCard>;
        })}
      </div>
    </>
  );
}
