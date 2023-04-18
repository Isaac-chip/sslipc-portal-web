import { useState } from "react";

export default function Checkbox({data}) {
  const [activity,setActivity] = useState(false)
  return (
    <>
      <div onClick={()=>{
        setActivity(!activity)
      }} className="flex items-center cursor-pointer">
        <img
          className="w-18px h-18px"
          src={`/icon/${activity?"xuanzhong":"weixuanzhong"}.png`}
          alt=""
          srcset=""
        />
        <div className="ml-1 mr-2">{data?.label}</div>
      </div>
    </>
  );
}
