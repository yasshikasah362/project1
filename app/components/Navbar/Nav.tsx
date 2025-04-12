'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdownToggle = (section: string) => {
    setDropdown(dropdown === section ? null : section);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-green-700">
            BrandName
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>

            {/* Dropdown: About Us */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('about')}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                About Us ▾
              </button>
              {dropdown === 'about' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-52 z-20 animate-fadeIn">
                  <ul className="py-2 text-sm">
                    <li><Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100">About the Company</Link></li>
                    <li><Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Mission</Link></li>
                    <li><Link href="/about/founder-message" className="block px-4 py-2 hover:bg-gray-100">Founder Message</Link></li>
                    <li><Link href="/about/certification" className="block px-4 py-2 hover:bg-gray-100">Certification</Link></li>
                    <li><Link href="/about/Contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium">
              Our Products
            </Link>

            {/* Dropdown: Services */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Our Services ▾
              </button>
              {dropdown === 'services' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56 z-20 animate-fadeIn">
                  <ul className="py-2 text-sm">
                    <li><Link href="/services/aarambh-academy" className="block px-4 py-2 hover:bg-gray-100">Aarambh Academy</Link></li>
                    <li><Link href="/services/workshop" className="block px-4 py-2 hover:bg-gray-100">Workshop</Link></li>
                    <li><Link href="/services/event" className="block px-4 py-2 hover:bg-gray-100">Event</Link></li>
                    <li><Link href="/services/promotions" className="block px-4 py-2 hover:bg-gray-100">Promotions</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown: Make Money With Us */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('money')}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Make Money With Us ▾
              </button>
              {dropdown === 'money' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-60 z-20 animate-fadeIn">
                  <ul className="py-2 text-sm">
                    <li><Link href="/career" className="block px-4 py-2 hover:bg-gray-100">Career with Us</Link></li>
                    <li><Link href="/distributor" className="block px-4 py-2 hover:bg-gray-100">Become a Distributor</Link></li>
                    <li><Link href="/partner" className="block px-4 py-2 hover:bg-gray-100">Become a Partner</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
  className={`md:hidden transition-all duration-500 overflow-hidden bg-white shadow-md rounded-lg px-4 ${
    menuOpen ? 'max-h-96 py-4 mt-2' : 'max-h-0'
  }`}
>
  <div className="space-y-2">
    <Link href="/" className="block text-gray-700 hover:text-green-600">Home</Link>
    <Link href="/about/company" className="block text-gray-700 hover:text-green-600">About Us</Link>
    <Link href="/products" className="block text-gray-700 hover:text-green-600">Our Products</Link>
    <Link href="/services/aarambh-academy" className="block text-gray-700 hover:text-green-600">Our Services</Link>
    <Link href="/career" className="block text-gray-700 hover:text-green-600">Make Money With Us</Link>
  </div>
</div>

      </div>
    </nav>
  );
}
