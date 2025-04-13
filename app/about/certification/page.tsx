'use client';
import React from 'react';

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          Certifications
        </h1>
        <p className="text-lg text-gray-600 mx-auto max-w-2xl">
          Stay tuned! As of now, no certifications have been uploaded. Check back soon for updates.
        </p>
      </div>

      {/* Message Section */}
      <div className="max-w-3xl mx-auto text-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">No Certification Uploaded Yet</h2>
          <p className="text-lg text-gray-600">
            We are currently in the process of uploading our certifications. Please check back later for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
