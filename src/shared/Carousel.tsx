// Carousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface CarouselProps {
  images: string[]; // An array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
