import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import mergeDeep from "@/utils/mergeDeep";


import { fakeData } from "@/constants";
export default function ToolsBar({ theme = {}, className,openTabType="_blank" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [Data, setData] = useState(fakeData);
  const defaultThem = {
    toolsBar: {
      base: "text-white hover:h-96 bg-opacity-10 hover:bg-opacity-50 w-full absolute top-0 z-10  bg-black",
    },
  };

  const customTheme = mergeDeep(defaultThem, theme !== undefined ? theme : {});
  useEffect(()=>{
    console.log(openTabType)
  },[openTabType])

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
      className={classNames(customTheme?.toolsBar?.base, className,{"hover:h-auto hover:h-0":!isHovered})}
    >
      <div className="container  mx-auto hidden md:block">
        <ul
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          className={classNames(
            "h-70px cursor-pointer flex justify-around items-center  text-md font-bold text-center"
          )}
        >
          {Object.keys(fakeData)?.map((item, index) => {
            return index == 0 ? (
              <li
                key={item + index}
                className="hover:text-yellow min-w-1/7 truncate "
              >
                <Link target={openTabType} href={"/"}>
                  {item}
                </Link>
              </li>
            ) : (
              <li
                key={item + index}
                className="hover:text-yellow min-w-1/7 truncate "
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onMouseLeave={(e) => {
          setIsHovered(false);
        }}
        className={classNames(
          "absolute left-2/4 -translate-x-2/4 flex container mx-auto pt-8px justify-around",
          {
            hidden: !isHovered,
          }
        )}
      >
        {Object.keys(Data)?.map((item, index) => {
          return (
            <ul
              key={item + index}
              className="min-w-1/7 text-center cursor-pointer"
            >
              {Data[item]?.map((subItem) => {
                return (
                  <li
                    onClick={()=>setIsHovered(false)}
                    onMouseEnter={() => {
                      setIsHovered(true);
                    }}
                    key={item + index + "-" + subItem.label}
                    className="hover:text-yellow  pt-30px min-w-1/7 "
                  >
                    <Link
                      target={openTabType}
                      href={subItem.router}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
