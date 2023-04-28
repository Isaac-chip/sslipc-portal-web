import classNames from "classnames";
import { useRouter } from "next/router";
export default function Card({onClick,data}) {
  if(!data){
    return null
  }
    const {url,title,desc,price,subTitle,labelFlag} = data
    const router = useRouter()
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
            src={url}
            alt=""
            srcset=""
          />
          <div className="flex items-center mt-2 justify-between">
            <div className="font-bold text-xl">{title}</div>
            <div
              className={classNames("w-54px text-sm px-2 py-1 box-border",{"hidden":!labelFlag})}
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
           {subTitle} 
          </p>
          <p
            className="mt-2 text-14px line-clamp-2 overflow-hidden leading-5"
            style={{ color: "#818181" }}
          >
            {desc}
          </p>
          <div className="mt-3 flex justify-between items-center">
            <div className="text-xxl font-bold" style={{color:"#FF0000"}}>￥{price}</div>
            <img className="w-26px h-23px" src="/icon/talk.png" alt="" srcset="" />
          </div>
        </div>
      </>
    );
  }
  