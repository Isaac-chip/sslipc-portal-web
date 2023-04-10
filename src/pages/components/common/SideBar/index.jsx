
import _ from "lodash"
import { useEffect, useState } from "react";
import classNames from "classnames";
export default function SideBar() {
  const [activity, setActivity] = useState([0]);
  const [sideBarData, setSideBarData] = useState([
    {
      label: "维权流程",
      children: [
        { label: "维权援助流程" },
        { label: "人民调解流程" },
        { label: "仲裁调解流程" },
        { label: "专利侵权纠纷提交材料" },
      ],
      open: true,
    },
    {
      label: "全球维权援助网络",
      children: [
        { label: "知识产权保护中心" },
        { label: "知识产权快速维权中心" },
        { label: "知识产权维权援助中心" },
      ],
      open: false,
    },
  ]);

  const activityFn = (arr) => {
    setActivity(arr);
  };
  const handleMenu = (index)=>{
    const data = _.cloneDeep(sideBarData)
    data[index].open=!data[index].open
    setSideBarData(data) 
  }
  return (
    <div>
      {/* 一级菜单 */}
      {sideBarData.map((item, index) => {
        return (
          <div className="cursor-pointer">
            <div
              onClick={() => {
                activityFn([index]),handleMenu(index)
              }}
              className={classNames(
                "h-72px w-210px flex justify-around items-center bg-white",
                {}
              )}
              style={{
                background:
                  activity == [] || activity[0] === index
                    ? "url(/rightFlow/xuanzhong.png)"
                    : "",
              }}
            >
              <div
                className={classNames("text-xl   hover:text-gray-200", {
                  "text-white": activity[0] === index,
                })}
              >
                {item.label}
              </div>
              <img
                className=""
                src={
                  activity[0] === index ? `/icon/shangla.png` : `/icon/down.png`
                }
                alt=""
                srcset=""
              />
            </div>
            {item?.children.map((item, subIndex) => {
              return (
                <div
                  className={classNames(
                    "h-40px bg-white w-210px flex justify-center items-center text-md hover:text-blue",{"hidden":!sideBarData[index].open}
                  )}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
