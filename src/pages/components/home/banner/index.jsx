import React, { useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { fakeData } from "../../../../constants/index";

export default function Banner({}) {
  const [isHovered, setIsHovered] = useState(false);
  const [Data, setData] = useState(fakeData);

  return (
    <div className="w-full relative">
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className="object-cover w-full h-450px"
              src="/banner/banner.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
        }}
        className={classNames(
          "w-full absolute top-0 z-10  bg-black ",
          { "bg-opacity-50 pb-8": isHovered },
          { "bg-opacity-10": !isHovered }
        )}
      >
        <div className="w-full h-full">
          <div className="container  mx-auto hidden md:block">
            <ul
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              className={classNames(
                "h-70px cursor-pointer flex justify-around items-center text-white text-md font-bold text-center"
              )}
            >
              {Object.keys(fakeData)?.map((item, index) => {
                return (
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
            className={classNames("flex container mx-auto pt-8px pb-20px", {
              hidden: !isHovered,
            })}
          >
            {Object.keys(Data)?.map((item, index) => {
              if (Data[item]?.length === 0)
                return (
                  <ul
                    key={item + index}
                    className="min-w-1/7 text-center text-white cursor-pointer"
                  ></ul>
                );
              return (
                <ul
                  key={item + index}
                  className="min-w-1/7 text-center text-white cursor-pointer"
                >
                  {Data[item]?.map((subItem) => {
                    return (
                      <li
                        onMouseEnter={() => {
                          setIsHovered(true);
                          console.log("123");
                        }}
                        key={item + index + "-" + subItem.label}
                        className="hover:text-yellow truncate pt-30px"
                      >
                        <Link target={subItem?.target || "_blank"} href={subItem.router}>
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
      </div>
    </div>
  );
}
