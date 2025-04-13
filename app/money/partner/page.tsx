'use client';
import React, { useState } from 'react';

export default function BecomeAPartner() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-6">
      {/* Become A Partner Section */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg mb-12 space-y-6">
        <div className="text-center text-gray-700">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Become A Partner</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join hands with us to grow and succeed together. Fill out the form below to send us your request and get started.
          </p>
        </div>
      </div>

      {/* Partner Form Section */}
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg space-y-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name, Email, Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Your Name *"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Phone *"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message *"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md w-full mt-8"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
