'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moneyOpen, setMoneyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-gray-800">
              BrandName
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
          <Link href="/" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Home</a>
</Link>






            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                About Us ▾
              </button>
              {aboutOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-48 z-10">
                  <ul className="py-2">
                    <li><Link href="/about/company" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">About the Company</a>
</Link></li>
                    <li><Link href="/about/mission" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Mission</a>
</Link></li>
                    <li><Link href="/about/founder-message" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Founder Message</a>
</Link></li>
                    <li><Link href="/about/certification" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Certification</a>
</Link></li>
                    <li><Link href="/about/Contact" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Contact Us</a>
</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/products" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Our Products</a>
</Link>

            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                Our Services ▾
              </button>
              {servicesOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-56 z-10">
                  <ul className="py-2">
                    <li><Link href="/services/aarambh-academy" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Aarambh Academy</a>
</Link></li>
                    <li><Link href="/services/workshop" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Workshop</a>
</Link></li>
                    <li><Link href="/services/event" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Event</a>
</Link></li>
                    <li><Link href="/services/promotions" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Promotions</a>
</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Make Money With Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoneyOpen(!moneyOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                Make Money With Us ▾
              </button>
              {moneyOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-2 w-60 z-10">
                  <ul className="py-2">
                    <li><Link href="/career" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Career with us</a>
</Link></li>
                    <li><Link href="/distributor" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Become a Distributor</a>
</Link></li>
                    <li><Link href="/partner" legacyBehavior>
  <a className="inline-block !text-black hover:!text-green-600 !no-underline">Become a partner</a>
</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
            <Link href="/about/company" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</Link>
            <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Products</Link>
            <Link href="/services/arambh-academy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Services</Link>
            <Link href="/career" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Make Money With Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
