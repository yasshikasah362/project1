'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-playfair">
      {/* Slider Background */}
      <Slider {...settings}>
        <div>
          <img
            src="/images/beauty.jpg"
            alt="Slide 1"
            className="h-screen w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/images/women.jpg"
            alt="Slide 2"
            className="h-screen w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/images/fresh meal.jpg"
            alt="Slide 3"
            className="h-screen w-full object-cover"
          />
        </div>
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg animate-fadeInUp">
          Eat Fresh. Live Healthy.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mt-4 text-white/90 drop-shadow-lg animate-fadeInUp delay-100">
          Rediscover your lifestyle with nutritious meals that nourish both body and soul.
        </p>
        <button className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 animate-fadeInUp delay-200">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Hero;
