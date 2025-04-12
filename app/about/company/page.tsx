'use client';
import React from 'react';
import { FaLeaf } from 'react-icons/fa';

export default function AboutCompany() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 bg-gradient-to-br from-green-100 via-white to-green-50 rounded-3xl shadow-xl">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center">
          <FaLeaf className="text-green-600 text-4xl animate-bounce mr-2" />
          <h1 className="text-5xl font-extrabold text-green-800 tracking-wide">About the Company</h1>
          <FaLeaf className="text-green-600 text-4xl animate-bounce ml-2" />
        </div>
        <p className="mt-4 text-gray-600 text-lg">Discover our journey, values, and purpose.</p>
      </div>

      <div className="space-y-8 text-[1.15rem] text-gray-800 leading-8 font-medium">
        <p>
          <span className="text-green-700 font-bold">Shuabaarambh Herbal India</span> was founded by <span className="font-semibold">Mr. Pankaj Namdev</span> on <span className="font-semibold">13 June 2023</span>. We started with a powerful Ayurvedic formulation – <span className="text-green-700 font-semibold">Pran Urja Powder</span>, and have continued to evolve ever since.
        </p>

        <p>
          <span className="font-semibold">Shuabaarambh Herbal India Products and Services Private Limited (SHIPSPL)</span> is proudly registered under the <span className="text-green-700">Companies Act of 2013</span>, Government of India, as a company limited by shares.
        </p>

        <p>
          Our mission is clear – to <span className="text-green-700 font-semibold">purchase</span>, <span className="text-green-700 font-semibold">sell</span>, <span className="text-green-700 font-semibold">manufacture</span>, <span className="text-green-700 font-semibold">import</span>, <span className="text-green-700 font-semibold">pack</span>, <span className="text-green-700 font-semibold">process</span>, and <span className="text-green-700 font-semibold">distribute</span> high-quality wellness and lifestyle products that make a difference.
        </p>

        {/* Moved <ul> outside <p> */}
        <p>Our product categories span across:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-green-800 font-semibold">
          <li>Health Care</li>
          <li>Ayurvedic Cosmetics</li>
          <li>Personal Wellness</li>
          <li>FMCG Home Essentials</li>
          <li>Electronics</li>
          <li>Agricultural Products</li>
          <li>Holistic Services</li>
        </ul>

        <p>
          We operate from our <span className="font-semibold">registered office</span> located in the lap of nature — <span className="text-green-700 font-bold">Chandla, District Chhatarpur, Madhya Pradesh - 471525</span>. A perfect blend of purity and purpose.
        </p>
      </div>
    </div>
  );
}
