export default function Card() {
  return (
    <div
      className="w-240px mb-20px h-308px box-border px-2 pt-2 relative mr-2"
      style={{
        background: "#F8FBFF",

        border: "1px solid #D6E4F4",
        minWidth: "240px"
      }}
    >
      <img
        className="w-222px h-180px"
        src="https://ts1.cn.mm.bing.net/th?id=ORMS.489733b3df8049dd11021dfab850925e&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
        alt=""
        srcset=""
      />
      <div className="mt-4 ">
        <div className="font-bold text-xl line-clamp-2 overflow-hidden h-48px w-full">7-(2,4-二氟苯基)-1,3-二羟基氧杂蒽酮在制备抗7-(2,4-二氟苯基)-1,3-二羟基氧杂蒽酮在制备抗</div>
       
      </div>
     
      <div className="mt-3 flex justify-between items-center">
        <div className="text-red-700 absolute bottom-3">￥14080.00</div>
       
      </div>
    </div>
  );
}
