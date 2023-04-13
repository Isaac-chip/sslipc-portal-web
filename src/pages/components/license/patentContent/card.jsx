import classNames from "classnames";
export default function Card({className,onClick}) {
  return (
    <div onClick={onClick} className={classNames("cursor-pointer flex pb-29px border-b border-gray-200",className)}>
      <img
        className="w-248px h-160px"
        src="https://th.bing.com/th/id/OIP.22tPt9bi1FRyjOYQI8irPQHaD4?w=314&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
        alt=""
        srcset=""
        style={{
          boxShadow: " 4px 4px 4px 0px rgba(122,122,122,0.25)",
        }}
      />
      <div className="ml-4 w-800px">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">
            7-(2,4-二氟苯基)-1,3-二羟基氧杂蒽酮在制备抗肿瘤药物方面的应用。
          </p>
          <img className="w-28px h-28px ml-20" src="/icon/shoucang.png" />
        </div>
        <p className="mt-18px text-md" style={{ color: "#565656" }}>
          肿瘤活性，因此在制备抗肿瘤药物方面有新的应用，特别是肝癌、肺癌(紫杉醇耐药)和乳腺癌以及广谱抗癌药物方面的应用。
        </p>
        <div>
          <div
            className="grid grid-cols-3 gap-2 mt-8"
            style={{ color: "#818181" }}
          >
            <p>专利类型：发明专利</p>
            <p>技术领域：无</p>
            <p>技术领域：无</p>
            <p>
              交易价格：<span className="text-red-500">免费</span>
            </p>
            <p>发布日期：2022-12-22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
