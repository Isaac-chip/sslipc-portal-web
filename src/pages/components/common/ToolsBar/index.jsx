import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";


import { fakeData } from "@/constants";
export default function ToolsBar({ theme = {}, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [Data, setData] = useState(fakeData);
  const defaultThem = {
    toolsBar: {
      base: " text-white hover:h-80 bg-opacity-10 hover:bg-opacity-50 w-full absolute top-0 z-10  bg-black",
    },
  };
 
  const mergeDeep = (target, source) => {
    function isObject(item) {
      return item && typeof item === "object" && !Array.isArray(item);
    }

    function cloneDeep(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    if (isObject(source) && Object.keys(source).length === 0) {
      return cloneDeep({ ...target, ...source });
    }

    const output = { ...target, ...source };

    if (isObject(source) && isObject(target)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key]) && key in target && isObject(target[key])) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          output[key] = isObject(source[key])
            ? cloneDeep(source[key])
            : source[key];
        }
      });
    }

    return output;
  };
  const customTheme = mergeDeep(defaultThem, theme !== undefined ? theme : {});

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
      className={classNames(customTheme?.toolsBar?.base, className)}
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
                <Link target={"_blank"} href={"/"}>
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
          "absolute left-2/4 -translate-x-2/4 flex container mx-auto pt-8px ",
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
                    onMouseEnter={() => {
                      setIsHovered(true);
                      console.log("123");
                    }}
                    key={item + index + "-" + subItem.label}
                    className="hover:text-yellow  pt-30px w-200px"
                  >
                    <Link
                      target={subItem?.target || "_blank"}
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
