import React from 'react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic
  };

  return (
    <section className="text-center py-16 bg-green-600 text-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Live Healthier?</h2>
        <p className="mb-6">Subscribe to get weekly healthy food plans and lifestyle tips.</p>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full p-3 mb-4 rounded text-gray-800"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-green-600 font-semibold py-3 rounded hover:bg-green-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
