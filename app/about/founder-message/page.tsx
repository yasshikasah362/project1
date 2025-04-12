'use client';
import React from 'react';
import { FaUserTie } from 'react-icons/fa';

export default function FounderMessage() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-800 leading-tight mb-4">
          Founder&apos;s Message
        </h1>
        <p className="text-lg text-gray-600 mx-auto max-w-2xl">
          A message from the visionary leader who is committed to changing lives and empowering individuals to succeed.
        </p>
      </div>

      {/* Message Content Section */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8">
        {/* Founder&apos;s Image & Name */}
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <div className="bg-green-600 rounded-full p-4">
            <FaUserTie className="text-white text-5xl" />
          </div>
        </div>

        {/* Founder&apos;s Message */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            &quot;Shuabaarambh&quot; has brought an economic revolution in society through its innovative marketing system, allowing individuals to earn while working and sharing. 
            Our mission is grounded in the belief that:
            <br />
            <br />
            <strong>&quot;Thinking together is a beginning, staying together is progress, and working together is success.&quot;</strong>
            <br />
            <br />
            This philosophy has empowered us to create a platform where everyone can work in unity, achieve collective success, and grow together. We are on a journey of continuous improvement, where collaboration is the cornerstone of our success.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 mb-6">Join us in this journey of empowerment and success.</p>
        <button className="bg-green-700 text-white text-lg px-8 py-3 rounded-full hover:bg-green-800 transition duration-300">
          Learn More About Us
        </button>
      </div>
    </div>
  );
}
