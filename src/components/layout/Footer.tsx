// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">FreightLink Industries</h3>
            <p className="text-gray-400">Connecting 50,000+ carriers with shippers worldwide through real-time tracking, automated documentation, and intelligent routing.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="text-gray-400">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-lg mb-2" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;