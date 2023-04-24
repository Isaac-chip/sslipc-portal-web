import classNames from "classnames";

export default function DescItem({ isShowMask,data={光电领域: ["专利类型", "专利价格", "专利介绍"]} }) {
  return (
    <div
      className={classNames(
        "w-full h-120px box-borde"
      )}
      style={{
        // background: 'transparent'

        // background:
        //   "linear-gradient(270deg, #FFFFFF 0%, rgba(217,217,217,0) 85%)",
      }}
    >
      {Object.keys(data)?.map((item,index) => {
        return (
          <div key={index} className="ml-20">
            <div className="font-bold text-xl pt-32px text-white">{item}</div>
            <div className="pt-10px">
              <div className="bg-blak flex">
                {data[item]?.map((subItem, subIndex) => {
                  return (
                    <div key={subIndex} className="flex text-xs items-center text-gray-200">
                      <div>{subItem}</div>
                      <div
                        className={classNames(
                          "text-sm align-middle pb-1px px-1",
                          { hidden: data[item]?.length === index + 1 }
                        )}
                      >
                        {
                          data[item].length===subIndex+1?"":"|"
                        }
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
