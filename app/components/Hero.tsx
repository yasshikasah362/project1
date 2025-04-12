'use client';
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'ayurveda1.jpg',
  'ayurveda5.jpg',
 'ayurveda3.jpg',
  'ayurveda4.jpg',
  'ayurveda1.jpg',
  'ayurveda6.jpg',
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-serif">
      {/* Background Image Slider */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-screen w-full">
            <Image
              src={`/images/${img}`}
              alt={`Slide ${index + 1}`}
              fill
              priority
              className="object-cover brightness-[0.9] transition-all duration-500"
            />
          </div>
        ))}
      </Slider>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Text & CTA */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-xl leading-tight"
          style={{ fontFamily: `'Playfair Display', serif` }}
        >
          Ayurveda for Every Body & Soul
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl text-gray-200"
        >
          Embrace natural healing through ancient wisdom — from skincare to food to wellness rituals.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-semibold rounded-full shadow-lg"
        >
          Start Your Wellness Journey
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
