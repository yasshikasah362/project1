'use client';
import React from 'react';

export default function Workshop() {
  return (
    <div className="min-h-screen bg-[#f5f3ea] flex items-center justify-center p-6">
      <div className="bg-white border border-green-200 rounded-3xl shadow-lg p-10 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">🧘 Workshop</h1>
        <p className="text-gray-600 text-lg">No workshop available.</p>
      </div>
    </div>
  );
}
