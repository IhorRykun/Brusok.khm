"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ServiceImg } from "../ServiceImg";
import styles from "./Slider.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={24}
      pagination={{ clickable: true }}
      navigation
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.alt} className={styles.slide}>
          <ServiceImg
            props={slide.image}
            alt={slide.alt}
            topChild={slide.title}
            bottomChild={slide.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
