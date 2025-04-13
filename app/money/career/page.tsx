'use client';
import React, { useState } from 'react';

export default function CareerWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    qualification: '',
    education: '',
    experience: '',
    message: '',
    resume: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'resume') {
      const file = files && files.length > 0 ? files[0] : null;
      setFormData({ ...formData, resume: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6">
      {/* Shuabaarambh Harbel India Section */}
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg mb-12 space-y-6">
        <div className="text-center text-gray-700">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Shuabaarambh Harbel India</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In our current society, a significant portion of individuals aspire to assume the role of an employee rather than an employer.
            However, Shaubaarambh Harbel India offers a unique opportunity for individuals to work independently. Our overarching vision is
            to foster self-reliance and cultivate a conducive environment in India, ensuring a prosperous future for generations to come.
          </p>
        </div>
      </div>

      {/* Career With Us Section */}
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-lg space-y-8">
        {/* Career With Us Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-800">Career With Us</h1>
          <p className="mt-4 text-xl text-gray-600">Join us and be part of our journey to a self-reliant future.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="text"
              name="qualification"
              placeholder="Highest Qualification"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              name="education"
              placeholder="Educational Background"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <textarea
            name="message"
            placeholder="Why do you want to join us?"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>

          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">Upload Your Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md w-full mt-8"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
