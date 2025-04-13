'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  // Close dropdowns when navigating to a new page
  useEffect(() => {
    setDropdown(null);
    setMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const handleDropdownToggle = (section: string) => {
    setDropdown(dropdown === section ? null : section); // Toggle dropdown
  };

  const handleMobileDropdownToggle = (section: string) => {
    setMobileDropdown(mobileDropdown === section ? null : section); // Toggle mobile dropdown
  };

  const closeMobileMenu = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  // Handling hover dropdown close after some delay
  const handleMouseEnterDropdown = (section: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdown(section);
  };

  const handleMouseLeaveDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    const timeout = setTimeout(() => {
      setDropdown(null); // Close dropdown after delay
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleMobileMouseLeave = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    const timeout = setTimeout(() => {
      setMobileDropdown(null); // Close mobile dropdown after delay
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
  <img src="/images/logo.png" alt="Brand Logo" className="h-16 mr-2" />
</Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center space-x-10 mx-auto">
            <Link href="/" className={`text-gray-700 hover:text-green-600 font-medium text-base ${pathname === '/' ? 'text-green-600' : ''}`}>
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterDropdown('about')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                onClick={() => handleDropdownToggle('about')}
                className={`text-gray-700 hover:text-green-600 font-medium text-base ${dropdown === 'about' ? 'text-green-600' : ''}`}
              >
                About Us ▾
              </button>
              {dropdown === 'about' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-52 z-20">
                  <ul className="py-2 text-base">
                    <li><Link href="/about/company" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">About the Company</Link></li>
                    <li><Link href="/about/mission" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Mission</Link></li>
                    <li><Link href="/about/founder-message" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Founder Message</Link></li>
                    <li><Link href="/about/certification" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Certification</Link></li>
                    <li><Link href="/about/contact" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/products" className={`text-gray-700 hover:text-green-600 font-medium text-base ${pathname === '/products' ? 'text-green-600' : ''}`}>
              Our Products
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterDropdown('services')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                onClick={() => handleDropdownToggle('services')}
                className={`text-gray-700 hover:text-green-600 font-medium text-base ${dropdown === 'services' ? 'text-green-600' : ''}`}
              >
                Our Services ▾
              </button>
              {dropdown === 'services' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-56 z-20">
                  <ul className="py-2 text-base">
                    <li><Link href="/services/aarambh" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Aarambh Academy</Link></li>
                    <li><Link href="/services/workshop" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Workshop</Link></li>
                    <li><Link href="/services/event" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Event</Link></li>
                    <li><Link href="/services/promotions" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Promotions</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Money Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterDropdown('money')}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                onClick={() => handleDropdownToggle('money')}
                className={`text-gray-700 hover:text-green-600 font-medium text-base ${dropdown === 'money' ? 'text-green-600' : ''}`}
              >
                Make Money With Us ▾
              </button>
              {dropdown === 'money' && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-60 z-20">
                  <ul className="py-2 text-base">
                    <li><Link href="/money/career" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Career with Us</Link></li>
                    <li><Link href="/money/distributor" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Become a Distributor</Link></li>
                    <li><Link href="/money/partner" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-gray-100">Become a Partner</Link></li>
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
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6 overflow-auto md:hidden transition-all">
          <div className="space-y-4 text-base">
            <Link href="/" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-green-600 ${pathname === '/' ? 'text-green-600' : ''}`}>Home</Link>

            {/* Mobile About Us Toggle */}
            <div>
              <button onClick={() => handleMobileDropdownToggle('about')} className="text-gray-700 font-medium">
                About Us ▾
              </button>
              {mobileDropdown === 'about' && (
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li><Link href="/about/company" onClick={closeMobileMenu} className="block">About the Company</Link></li>
                  <li><Link href="/about/mission" onClick={closeMobileMenu} className="block">Mission</Link></li>
                  <li><Link href="/about/founder-message" onClick={closeMobileMenu} className="block">Founder Message</Link></li>
                  <li><Link href="/about/certification" onClick={closeMobileMenu} className="block">Certification</Link></li>
                  <li><Link href="/about/contact" onClick={closeMobileMenu} className="block">Contact Us</Link></li>
                </ul>
              )}
            </div>

            <Link href="/products" onClick={closeMobileMenu} className={`block text-gray-700 hover:text-green-600 ${pathname === '/products' ? 'text-green-600' : ''}`}>Our Products</Link>

            {/* Mobile Services Toggle */}
            <div>
              <button onClick={() => handleMobileDropdownToggle('services')} className="text-gray-700 font-medium">
                Our Services ▾
              </button>
              {mobileDropdown === 'services' && (
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li><Link href="/services/aaram" onClick={closeMobileMenu} className="block">Aarambh Academy</Link></li>
                  <li><Link href="/services/workshop" onClick={closeMobileMenu} className="block">Workshop</Link></li>
                  <li><Link href="/services/event" onClick={closeMobileMenu} className="block">Event</Link></li>
                  <li><Link href="/services/promotions" onClick={closeMobileMenu} className="block">Promotions</Link></li>
                </ul>
              )}
            </div>

            {/* Mobile Money Toggle */}
            <div>
              <button onClick={() => handleMobileDropdownToggle('money')} className="text-gray-700 font-medium">
                Make Money With Us ▾
              </button>
              {mobileDropdown === 'money' && (
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  <li><Link href="/money/career" onClick={closeMobileMenu} className="block">Career with Us</Link></li>
                  <li><Link href="/money/distributor" onClick={closeMobileMenu} className="block">Become a Distributor</Link></li>
                  <li><Link href="/money/partner" onClick={closeMobileMenu} className="block">Become a Partner</Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
