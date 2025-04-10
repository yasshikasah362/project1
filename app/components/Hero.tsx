'use client';
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-playfair">
      <Slider {...settings}>
        {['beauty.jpg', 'women.jpg', 'fresh meal.jpg', 'indian meal.jpg'].map((img, index) => (
          <div key={index}>
            <img
              src={`/images/${img}`}
              alt={`Slide ${index + 1}`}
              className="h-screen w-full object-cover brightness-75"
            />
          </div>
        ))}
      </Slider>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-10" />

      {/* Foreground Text */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold drop-shadow-xl"
        >
          Eat Fresh. Live Healthy.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md"
        >
          Discover wholesome foods that fuel your life. Choose health every day with fresh, natural, and nourishing meals.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
