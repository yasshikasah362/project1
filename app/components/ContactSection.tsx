'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email logic (toast, API, etc.)
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-green-500/90 via-green-600 to-green-700 text-white overflow-hidden"
    >
      {/* Glowing Background Circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <FaEnvelopeOpenText className="text-4xl mx-auto mb-4 text-white animate-bounce" />
        <h2 className="text-4xl font-bold mb-4">Ready to Live Healthier?</h2>
        <p className="mb-8 text-lg text-white/90">
          Subscribe to get weekly healthy food plans and lifestyle tips.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-2xl flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-full text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-white/40 transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-100 transition-all"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
