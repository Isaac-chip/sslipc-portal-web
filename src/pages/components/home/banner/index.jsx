import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import _ from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ToolsBar from "../../common/ToolsBar";

export default function Banner({}) {
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
        <ToolsBar></ToolsBar>
      </div>
    </div>
  );
}
