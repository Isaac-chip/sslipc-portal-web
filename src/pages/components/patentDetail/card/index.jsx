import { useRouter } from "next/router";
export default function Card({data}) {
  if(!data){
    return null
  }
  const router = useRouter()
  const {url,title,desc} = data
  return (
    <div
      onClick={()=>router.push("/patentDetail?id=123")}
      className="w-240px mb-20px h-308px box-border px-2 pt-2 relative mr-2"
      style={{
        background: "#F8FBFF",

        border: "1px solid #D6E4F4",
        minWidth: "240px"
      }}
    >
      <img
        className="w-222px h-180px"
        src={url}
        alt=""
        srcset=""
      />
      <div className="mt-2 ">
        <div className="font-bold text-xl line-clamp-1 overflow-hidden  w-full">{title}</div>
       
      </div>
     <p className="line-clamp-2 text-sm mt-1 " style={{color:"#565656"}}>{desc}</p>
      <div className="absolute -bottom-1 flex justify-between items-center">
        <div className="text-xxl font-bold text-red-700 absolute bottom-3" style={{color:"#FF0000"}}>￥14080.00</div>
       
      </div>
    </div>
  );
}
