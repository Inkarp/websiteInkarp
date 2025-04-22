import React from 'react';
import { MoveRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-black w-[98%] mx-auto mt-5 rounded-xl shadow-lg">

      {/* Top Section - Newsletter */}
      <div className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-6 py-3 pr-36 rounded-full text-black bg-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-2 bg-red-500 text-white px-4 py-3 rounded-full hover:bg-gray-800 transition">
              <span>Subscribe</span>
              <MoveRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Left: Logo and Social Icons */}
          <div className="flex flex-col items-center justify-center gap-6 lg:w-1/3">
            <img
              className="h-24 w-auto bg-white rounded-md p-2"
              src="inkarp old.svg"
              alt="Inkarp Logo"
              title="Inkarp"
            />
            <div>
              <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
              <ul className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <li key={i}>
                    <div className="flex justify-center items-center p-2 rounded-full bg-red-500 hover:bg-gray-700 transition duration-300 ease-in-out">
                      <a href="#" className="bg-white p-1 rounded-full">
                        <Icon color="black" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider (only starts where right content begins) */}
          <div className="hidden lg:block w-px bg-white opacity-30"></div>

          {/* Right: Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full lg:w-2/3 ">
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {['Home', 'About', 'Contact Us'].map((item, idx) => (
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
            {/* <div className='bg-white h-10'></div>
            <div className='bg-white h-10'></div>
            <div className='bg-white h-10'></div> */}
          </div>
          
        </div>
        
      </div>
      
      {/* Bottom Bar */}
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
