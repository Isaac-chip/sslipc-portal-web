import classNames from "classnames";
export default function Card({className,onClick,data}) {
  if(!data){
    return null
  }
  const {url,title,desc} = data
  return (
    <div onClick={onClick} className={classNames("flex pb-29px border-b border-gray-200",className)}>
      <img
        className="w-248px h-160px"
        src={url}
        alt=""
        srcset=""
        style={{
          boxShadow: "4px 4px 4px 0px rgba(122,122,122,0.25)",
        }}
      />
      <div className="ml-4 w-full">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">
            {title}
          </p>
          <img className="w-28px h-28px ml-20" src="/icon/shoucang.png" />
        </div>
        <p className="mt-18px text-md leading-6 line-clamp-2" style={{ color: "#565656" }}>
          {desc}
          
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
