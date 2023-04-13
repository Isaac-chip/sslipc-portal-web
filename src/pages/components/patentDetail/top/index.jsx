import classNames from "classnames";


export default function Top() {
  return (
    <>
      <div
        // onClick={onClick}
        className={classNames(
          "bg-white cursor-pointer flex px-3 py-6 border-b border-gray-200",
          
        )}
      >
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
        
          <div>
            <div
              className="grid grid-cols-2 gap-3 mt-6"
              style={{ color: "#818181" }}
            >
              <p>专利号：CN108938619B</p>
              <p>专利权人：莆田学院</p>
              <p>专利类型：发明专利</p>
              <p>技术领域：</p>
              <p>成熟度：无</p>
              <p>发布日期：2022-12-22</p>
              <p>
                交易价格：<span className="text-red-500">免费</span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
