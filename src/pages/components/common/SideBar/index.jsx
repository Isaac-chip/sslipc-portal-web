import _ from "lodash";
import { useEffect, useState, useCallback, useMemo } from "react";
import classNames from "classnames";

export default function SideBar({ sideBar, setComponent }) {
  const [{ menuActivity, subMenuActivity, activity }, setActivity] = useState({
    menuActivity: 0,
    subMenuActivity: 0,
    activity: [0, 0],
  });

  const handleMenu = useCallback(
    (index) => {
      setSideBarData((prev) => {
        const data = _.cloneDeep(prev);
        data[index].open = !data[index].open;
        return data;
      });
      setActivity((prev) => {
        const data = { ...prev, menuActivity: index };
        if (sideBar[index]?.children?.length === 0) {
          data.activity = [index];
        }
        return data;
      });

    },
    [sideBar]
  );

  const [sideBarData, setSideBarData] = useState(sideBar);
  useEffect(() => {
    if(sideBarData[0].component){
      setComponent(sideBarData[0]?.component);
    }else {
      setComponent(sideBarData[0].children[0].component);
    }
    


  }, []);

  return (
    <div className="flex">
      <div>
        {/* 一级菜单 */}
        {sideBarData?.map(({ label, children = [], open }, index) => (
          <div key={index} className="cursor-pointer">
            <div
              onClick={() => {
                handleMenu(index);
                if (sideBarData[index]?.component) {
                  setComponent(sideBarData[index]?.component);
               
                }
              }}
              className={classNames(
                "h-72px w-210px flex justify-around items-center bg-white",
                {
                  "text-white": menuActivity === index,
                }
              )}
              style={{
                background:
                  menuActivity === index ? "url(/rightFlow/xuanzhong.png)" : "",
              }}
            >
              <div className="text-xl w-148px hover:text-gray-200">{label}</div>
              {children?.length > 0 && (
                <img
                  className={classNames({
                  })}
                  src={
                    (!open)
                      ? `/icon/shangla.png`
                      : `/icon/down.png`
                  }
                  alt=""
                  srcset=""
                />
              )}
             
            </div>
            {children?.map(({ label,component }, subIndex) => (
              <div
                key={subIndex}
                onClick={() => {
                  setActivity({
                    menuActivity: index,
                    subMenuActivity: subIndex,
                    activity: [index, subIndex],
                  });
                
                    setComponent(component);
                    console.log(component)
          
                }}
                className={classNames(
                  "h-40px bg-white w-210px flex justify-center items-center text-md hover:text-blue",
                  { hidden: !open },
                  {
                    "text-blue":
                      activity[0] === index && activity[1] === subIndex,
                  }
                )}
              >
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
