'use client';
import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-white to-green-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mx-auto max-w-2xl">
          For any inquiries, please don't hesitate to reach out to us using the contact details or form below.
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-12">
        {/* Location */}
        <div className="space-y-4 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-green-800">Our Location</h2>
          <div className="flex items-center">
            <FaLocationArrow className="text-green-600 text-3xl mr-3" />
            <p className="text-gray-600">Qutub Institutional Area, New Delhi - 110016 (India)</p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="space-y-4 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-green-800">Phone Numbers</h2>
          <div className="flex items-center">
            <FaPhoneAlt className="text-green-600 text-3xl mr-3" />
            <p className="text-gray-600">+91 971735574</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-green-600 text-3xl mr-3" />
            <p className="text-gray-600">+91 9993299041</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-4 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-green-800">Email</h2>
          <div className="flex items-center">
            <FaEnvelope className="text-green-600 text-3xl mr-3" />
            <p className="text-gray-600">info@shuabaarambh.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-6 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center">Send Us a Message</h2>
        
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                className="border-2 border-gray-300 rounded-md p-4 text-lg"
                required 
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email Address" 
                className="border-2 border-gray-300 rounded-md p-4 text-lg"
                required 
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-2">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              
              placeholder="Write your message here..." 
              className="border-2 border-gray-300 rounded-md p-4 text-lg"
              required
            />
          </div>

          <div className="text-center mt-6">
            <button 
              type="submit" 
              className="bg-green-700 text-white text-lg px-8 py-3 rounded-full hover:bg-green-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
