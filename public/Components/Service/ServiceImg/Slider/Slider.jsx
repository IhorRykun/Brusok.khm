"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ServiceImg } from "../ServiceImg";
import styles from "./Slider.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      speed={800}
      pagination={{ clickable: true }}
      navigation
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
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
