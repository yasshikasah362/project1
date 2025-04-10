'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-24 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-green-200 opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-green-100 opacity-30 rounded-full filter blur-2xl animate-spin-slow" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Animated Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/healthy bowl.jpg"
            alt="Healthy Bowl"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </motion.div>

        {/* Animated Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 leading-tight">
            Fuel Your Body<br /> with Purpose
          </h2>
          <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-green-700">Healthy Lifestyle Food</span>, we believe in nourishing your body with the best nature has to offer.
            Our mission is to make healthy eating <span className="italic text-green-600">simple, delicious</span>, and accessible to everyone.
          </p>
          <a
  href="#contact"
  className="relative inline-flex items-center px-8 py-3 rounded-full overflow-hidden group bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
>
  <span className="absolute w-48 h-48 -top-10 -left-10 bg-green-400 opacity-30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></span>
  
  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
    Join Our Journey
  </span>

  <svg
    className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>


        </motion.div>
      </div>
    </section>
  );
}
