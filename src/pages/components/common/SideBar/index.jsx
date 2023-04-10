
import _ from "lodash"
import { useEffect, useState } from "react";
import classNames from "classnames";
export default function SideBar({sideBar}) {
  const [activity, setActivity] = useState({
    menuActivity:0,
    subMenuActivity:0,
    activity:[0,0]
  });

  const [sideBarData, setSideBarData] = useState(sideBar);


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
                handleMenu(index)
               const data = _.cloneDeep(activity)
               data.menuActivity=index
               if(sideBarData[index].children.length==0){
                    data.activity=[index]
               }
         
               setActivity(data)
              }}
              className={classNames(
                "h-72px w-210px flex justify-around items-center bg-white"
              )}
              style={{
                background:
                  activity.menuActivity === index
                    ? "url(/rightFlow/xuanzhong.png)"
                    : "",
              }}
            >
              <div
                className={classNames("text-xl   hover:text-gray-200", {
                  "text-white":  activity.menuActivity=== index,
                })}
              >
                {item.label}
              </div>
              <img
                className={classNames({"hidden":sideBar[index].children.length==0})}
                src={
                    activity.menuActivity === index ? `/icon/shangla.png` : `/icon/down.png`
                }
                alt=""
                srcset=""
              />
            </div>
            {item?.children.map((item, subIndex) => {
              return (
                <div
                  onClick={()=>{
                    const data = _.cloneDeep(activity)
                    data.menuActivity=index
                    data.subMenuActivity=subIndex
                    data.activity=[index,subIndex]
                    setActivity(data)
                  }}
                  className={classNames(
                    "h-40px bg-white w-210px flex justify-center items-center text-md hover:text-blue",{"hidden":!sideBarData[index].open},{"text-blue":activity.activity[0]==index && activity.activity[1]==subIndex}
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
