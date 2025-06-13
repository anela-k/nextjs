"use client"; // Required for Swiper component

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (already imported in globals.css, but good practice)
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay'; // Import autoplay styles if needed

// import required modules
import { Autoplay } from "swiper/modules";

// Placeholder images (replace with your actual image paths or URLs)
const placeholderImages = [
  "https://wallpapers.com/images/hd/playstation-ps5-console-nsndc8ewygduy1nh.jpg",
  "https://www.planet3dnow.de/cms/wp-content/uploads/2020/02/image_54241139131582620858805_1582620861957.png", // Placeholder 1
  "https://wallpapers.com/images/hd/digital-art-of-apple-logo-4k-1yj9mjlmu5srdina.jpg", // Placeholder 2
  "https://presse.mercedes-benz.at/Content/441106/5b14196b-a184-46be-b0f9-d84c7b6cabc4/1200/2400/.jpg", // Placeholder 3
  "/images/idbuzzwallpaper.jpg", // Placeholder 4
  "https://www.kopfhoerer.de/wp-content/uploads/Bose-Headphones-700-3-1920x1080.jpg", // Placeholder 5
  // Add more image URLs as needed
];

export default function HomePage() {
  return (
    <div className="swiper-container">
       <h1 className="swiper-title">Apple MacBook PRO M1</h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"} // Show partial next/prev slides
        spaceBetween={30} // Space between slides
        centeredSlides={true}
        loop={true} // Enable continuous loop
        autoplay={{
          delay: 2500, // Time in ms between slides
          disableOnInteraction: false, // Autoplay continues after user interaction
        }}
        className="mySwiper" // Add a class for potential specific styling
      >
        {placeholderImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Placeholder ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
