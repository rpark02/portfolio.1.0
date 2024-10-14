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
      className="mySwiper flex w-full h-full" // Ensure it fills the parent
      style={{ width: "100%", height: "100%" }} // Make sure to set width and height
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover" // Use object-cover for responsive images
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
