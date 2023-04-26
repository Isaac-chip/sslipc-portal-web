export default function Card({onClick}) {
    return (
      <>
        <div
          onClick={onClick}
          className="cursor-pointer w-240px h-350px box-border px-2 pt-2"
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
            <div
              className="w-54px text-sm px-2 py-1 box-border"
              style={{
                borderRadius: "2px 2px 2px 2px",
                opacity: "1",
                border: "2px solid #FCBB6E",
                color: "#FCBB6E",
              }}
            >
              多 类 
            </div>
          </div>
          <p className="text-16px mt-2" style={{ color: "#565656" }}>
            第24类 布料床单
          </p>
          <p
            className="mt-2 text-14px line-clamp-2 overflow-hidden leading-5"
            style={{ color: "#818181" }}
          >
            丝绸（布料）,布,织物,无纺布,卸妆用布,丝绸（布料）,布,织物,无纺布,卸妆用布,丝绸（布料）,布,织物,无纺布,卸妆用布,丝绸（布料）,布,织物,无纺布,卸妆用布,
          </p>
          <div className="mt-3 flex justify-between items-center">
            <div className="text-xxl font-bold" style={{color:"#FF0000"}}>￥14080.00</div>
            <img className="w-26px h-23px" src="/icon/talk.png" alt="" srcset="" />
          </div>
        </div>
      </>
    );
  }
  