import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
      <>
       <footer className="bg-gray-800 text-white py-8 mt-8">
  <div className="container mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-sm text-gray-400">
          We are committed to delivering the best products and services to our customers.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link href="/" className="hover:text-green-500">Home</Link></li>
          <li><Link href="/about/company" className="hover:text-green-500">About Us</Link></li>
          <li><Link href="/products" className="hover:text-green-500">Our Products</Link></li>
          <li><Link href="/services/aarambh" className="hover:text-green-500">Services</Link></li>
          <li><Link href="/about/contact" className="hover:text-green-500">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li className="text-sm text-gray-400">Email: info@shuabaarambh.com</li>
          <li className="text-sm text-gray-400">Phone: +91 971735574 ,+91 9993299041 </li>
          <li className="text-sm text-gray-400">Address: Qutub Institutional Area New Delhi - 110016 (India)</li>
        </ul>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="mb-4">Follow us on</p>
        <div className="flex space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="hover:text-green-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-green-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-green-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-green-400" />
          </a>
        </div>
        {/* <p className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} Your Company. All rights reserved.</p> */}
      </div>

    
  </div>

  {/* Copyright Section */}
  <div className="mt-8 text-center text-sm text-gray-400">
    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
  </div>
</footer>

      
      </>
     
    );
  }
  