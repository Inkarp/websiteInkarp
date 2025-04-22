import React from 'react';
import { MoveRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-white bg-black w-[98%] mx-auto my-5 rounded-xl shadow-lg">
      {/* Top Area - Logo and Newsletter */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                className="h-24 w-auto bg-white rounded-md p-2"
                src="inkarp old.svg"
                alt="Inkarp Logo"
                title="Inkarp"
              />
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-xl text-start sm:text-left">
              <h3 className="text-2xl font-bold leading-loose mb-4">
                Subscribe to Our Newsletter
              </h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 pr-36 rounded-full text-black bg-white outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-full hover:bg-gray-800 transition">
                  <span>Subscribe</span>
                  <MoveRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets Section */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Links */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
             
              <ul className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <li key={i}>
                    <div className='flex justify-center items-center p-2 rounded-full bg-red-500 hover:bg-gray-700 transition duration-300 ease-in-out'>
                    <a href="#" className="hover:text-gray-400 bg-white p-1 rounded-full transition duration-300 ease-in-out">
                      <Icon color='black'/>
                    </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links (2 Columns) */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {['Home', 'About', 'Contact Us',].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {['CatalystCue', 'Blog', 'News&Events'].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Working Hours</h2>
              <ul className="space-y-1">
                <li>Mon - Fri: 9:30 AM - 5:30 PM</li>
                <li>Saturday: 9:30 AM - 1:30 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Say Hello</h2>
              <p className="mb-2">
                <a href="tel:+1800123456789" className="hover:underline">
                  +1-800-123-456-789
                </a>
              </p>
              <p>
                <a href="mailto:no-reply@pbminfotech.com" className="hover:underline">
                  no-reply@pbminfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="bg-white py-5 text-sm w-[96%] mx-auto rounded-t-full shadow-inner text-black">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          <p>
            © {new Date().getFullYear()}{' '}
            <a href="#" className="hover:underline">
              Inkarp
            </a>. All Rights Reserved.
          </p>
          <ul className="flex space-x-4">
            {['Privacy Policy', 'Terms & Conditions', 'FAQ'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
