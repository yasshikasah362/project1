'use client';
import React, { useState } from 'react';

const categories = [
  { name: 'Biscuits & Snacks', count: 8 },
  { name: 'Fresh Fruits', count: 12 },
  { name: 'Exotic Fruits', count: 9 },
  { name: 'Breads & Bakery', count: 5 },
  { name: 'Breakfast & Dairy', count: 9 },
  { name: 'Honey', count: 5 },
  { name: 'Milk & Flavoured', count: 4 },
  { name: 'Meats & Seafood', count: 8 },
];

const products = [
  { id: 1, name: 'Shuabaarambh Pure Aloevera Gel', category: 'Biscuits & Snacks', price: '₹200', image: '/images/product1.jpg' },
  { id: 2, name: 'MadyNashtam Anti Addiction Drop', category: 'Fresh Fruits', price: '₹400', image: '/images/product2.jpg' },
  { id: 3, name: 'Super Health Combo', category: 'Exotic Fruits', price: '₹3,600', image: '/images/product3.png' },
  { id: 4, name: 'Shuabaarambh Panch Tulsi Drop', category: 'Breads & Bakery', price: '₹200', image: '/images/product4.png' },
  { id: 5, name: 'Shuabaarambh Anti Pain Relief Oil', category: 'Milk & Flavoured', price: '₹275', image: '/images/product5.png' },
  { id: 6, name: 'Shuabaarambh Herbal Fresh Toothpaste', category: 'Meats & Seafood', price: '₹125', image: '/images/product6.png' },
  { id: 7, name: 'Pran Urja Powder', category: 'Honey', price: '₹3,600', image: '/images/product7.png' },
];

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-[#f5f3ea] text-gray-800 font-sans flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-6 bg-[#e2dcc8] border-r border-[#ccc5b9]">
        <h2 className="text-2xl font-bold text-green-800 mb-4">🌿 All Categories</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className={`block w-full text-left py-2 px-4 rounded-lg transition-all ${
                  selectedCategory === category.name
                    ? 'bg-green-200 text-green-900 font-semibold'
                    : 'hover:bg-green-100 text-green-800'
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name} ({category.count})
              </button>
            </li>
          ))}
          <li>
            <button
              className={`block w-full text-left py-2 px-4 rounded-lg transition-all ${
                !selectedCategory
                  ? 'bg-green-200 text-green-900 font-semibold'
                  : 'hover:bg-green-100 text-green-800'
              }`}
              onClick={() => setSelectedCategory('')}
            >
              Show All
            </button>
          </li>
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="w-full md:w-3/4 p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-6"> All  Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm mx-auto border border-green-100"
              >
                <div className="w-full aspect-[4/3] bg-green-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-green-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-green-700 font-semibold text-md">{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-600 col-span-full">No products available in this category.</p>
          )}
        </div>
      </main>
    </div>
  );
}
