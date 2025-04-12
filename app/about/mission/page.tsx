'use client';
import React from 'react';
import { FaBullseye, FaLeaf } from 'react-icons/fa';

export default function MissionPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-800 leading-tight">
          Our Mission & Vision
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering a healthier future through high-quality products and services for all.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <FaBullseye className="text-green-600 text-4xl" />
            <h2 className="text-3xl font-semibold text-green-700">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our “Mission” is to provide high-quality products and offer exceptional service to humanity. We are committed to selling products at very reasonable and affordable prices, aiming to make a meaningful difference in people's lives by promoting health and wellness.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <FaLeaf className="text-green-600 text-4xl" />
            <h2 className="text-3xl font-semibold text-green-700">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our “Vision” is to become one of the top leading direct selling companies, known for providing products that improve the health and well-being of individuals. We aim to make quality wellness products accessible to all and to positively impact communities through our services.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <p className="text-xl text-gray-700 mb-4">Join us on our journey to a healthier tomorrow.</p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-800 transition duration-300">
          Learn More About Us
        </button>
      </div>
    </div>
  );
}
