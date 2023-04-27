import classNames from "classnames";

export default function Top() {
  return (
    <>
      <div
        className={classNames(
          "bg-white cursor-pointer flex px-3 py-6 border-b border-gray-200"
        )}
      >
        <img
          className=" h-160px"
          src="/patentProject/tupian.png"
          alt=""
          srcset=""
          style={{
            boxShadow: " 4px 4px 4px 0px rgba(122,122,122,0.25)",
          }}
        />
        <div className="ml-4 w-full pr-20px">
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl">
              胃癌术后严重并发症风险度的预测方法
            </p>
            <img className="w-28px h-28px ml-20" src="/icon/shoucang.png" />
          </div>

          <div>
            <div
              className="grid grid-cols-2 gap-3 mt-6"
              style={{ color: "#818181" }}
            >
              <p>专利号：CN200610098290.3</p>
              <p>专利权人：南京大学</p>
              <p>专利类型：发明专利</p>

              <p>技术领域：医疗器械</p>
              <p>成熟度：无</p>
              <p>发布日期：2007-06-06</p>
              <div className="flex items-center">
                <p>
                  交易价格：<span className="text-red-500">免费</span>
                </p>
                <img className="ml-8" src="/icon/lianxi.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
