import React, { useRef, useState } from "react";
import classNames from "classnames";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {fakeData} from '@/pages/constants.js'

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const [Data, setData] = useState(fakeData);

  return (
    <div className="w-full relative">
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
          <img className="object-cover" src="/banner/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div
        className={classNames(
          "w-full absolute top-0 z-10  bg-black bg-opacity-50",
          { isHovered: "pb-16px" }
        )}
      >
        <div className="w-full">
          <div className="container h-40px mx-auto hidden md:block">
            <ul
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              className={classNames(
                "cursor-pointer flex justify-around h-full items-center text-white text-md font-bold text-center"
              )}
            >
              {Object.keys(fakeData).map((item, index) => {
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
            onMouseLeave={()=>{
                setIsHovered(false)
            }}
            className={classNames("flex container mx-auto pt-8px pb-20px", {
              hidden: !isHovered,
            })}
          >
            {Object.keys(Data).map((item, index) => {
              if (Data[item].length === 0)
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
                  {Data[item].map((subItem) => {
                    return (
                      <li
                        onMouseEnter={() => {
                          setIsHovered(true);
                          console.log("123");
                        }}
                   
                        key={item + index + "-" + subItem}
                        className="hover:text-yellow truncate pt-30px"
                      >
                        {subItem}
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
