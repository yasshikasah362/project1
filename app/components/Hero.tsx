'use client';
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'beauty.jpg',
  'women.jpg',
  'fresh meal.jpg', // renamed to avoid space issue
  'indian meal.jpg', // renamed to avoid space issue
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-serif">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div className="relative h-screen w-full">
              <Image
                src={`/images/${img}`}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover brightness-75"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Gradient Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 backdrop-sm z-10" />

      {/* Hero Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-2xl tracking-wide"
          style={{ fontFamily: `'Playfair Display', serif` }}
        >
          Eat Fresh. Live Healthy.
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl drop-shadow-xl"
        >
          Discover wholesome foods that fuel your life. Choose health every day with fresh, natural, and nourishing meals.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
