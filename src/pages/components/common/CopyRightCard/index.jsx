import classNames from "classnames";
export default function CopyRightCard({ onClick, className, data }) {
  if(!data){
    return null
  }
  const { url, title, desc, price } = data;

  return (
    <div
      onClick={onClick}
      className={classNames("w-240px h-320px box-border px-2 pt-2", className)}
      style={{
        background: "#F8FBFF",

        border: "1px solid #D6E4F4",
      }}
    >
      {url && <img className="w-222px h-180px" src={url} alt="" srcset="" />}
      <div className="flex items-center mt-2 justify-between">
        <div className="font-bold text-xl line-clamp-1">{title}</div>
      </div>
      <p className="text-14 mt-2" style={{ color: "#818181" }}>
        {desc}
      </p>
      <div className="mt-10 flex justify-between items-center">
        <div className="text-xxl font-bold" style={{ color: "#FF0000" }}>
          ￥{price}
        </div>
        <img className="w-26px h-23px" src="/icon/talk.png" alt="" srcset="" />
      </div>
    </div>
  );
}
