import classNames from "classnames";
export default function CopyRightCard({onClick,className}) {
    return (
      <div
        onClick={onClick}
        className={classNames("w-240px h-320px box-border px-2 pt-2",className)}
        style={{
          background: "#F8FBFF",
  
          border: "1px solid #D6E4F4",
        }}
      >
        <img
          className="w-222px h-180px"
          src="https://ts1.cn.mm.bing.net/th?id=ORMS.489733b3df8049dd11021dfab850925e&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
          alt=""
          srcset=""
        />
        <div className="flex items-center mt-2 justify-between">
          <div className="font-bold text-xl">唐匠布乙</div>
        </div>
        <p className="text-14 mt-2" style={{ color: "#818181" }}>
          动漫作品
        </p>
        <div className="mt-10 flex justify-between items-center">
          <div className="text-red-700 text-16 font-bold">￥面议</div>
          <img className="w-26px h-23px" src="/icon/talk.png" alt="" srcset="" />
        </div>
      </div>
    );
  }
  