import React from 'react';
import {
  MoveRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  PhoneCall,
} from 'lucide-react';
import { toast } from 'react-toastify';

const Footer = () => {

  const notify = () => toast.success("Thanks for Subscribing to us!", {
    position: "top-right",
    autoClose: 3000,
    className: "bg-green-500 text-red-500",
    hideProgressBar: false,
    progress: undefined,
  });
  
  return (
    <footer className="text-white bg-black w-[98%] mx-auto mt-5 rounded-xl shadow-lg  ">

      {/* Top Section - Newsletter */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-10 rounded-t-xl">
        <img
          className="h-20 sm:h-24 w-auto bg-white rounded-md p-2"
          src="inkarp old.svg"
          alt="Inkarp Logo"
          title="Inkarp"
        />

        <div className="w-full lg:w-3/4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'MaxOT' }} >Subscribe to Our Newsletter</h3>
          <div className="relative max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-6 py-3 pr-36 rounded-full text-black bg-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={notify} className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center gap-2 bg-red-500 text-white px-4 py-3 rounded-full hover:bg-gray-800 transition">
              <span>Subscribe</span>
              <MoveRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="lg:py-8 px-4 lg:ml-20 lg:mr-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Company Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-semibold mb-3 text-white" style={{ fontFamily: 'MaxOT' }}>About Inkarp</h2>
            <p style={{ fontFamily: 'roboto' }} className='text-white font-roboto'>
              Established in 1985, Inkarp is a trusted name in the scientific instrument industry,
              offering comprehensive research solutions and exceptional after-sales support.
              With a robust presence in India, we're a go-to choice for a diverse range of sectors.
              Our enduring partnerships with major manufacturers globally ensure sustained customer support.
              Our dedicated team is at the heart of our success, reflecting our commitment to excellence.
            </p>
            <div className="flex flex-col items-center lg:items-start mt-5">
              <h2 className="text-2xl font-semibold mb-3 " style={{ fontFamily: 'MaxOT' }}>Follow Us</h2>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-red-500 hover:bg-gray-700 rounded-full transition">
                    <Icon color="white" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links and Contact Info */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 items-center text-center lg:text-left">
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'MaxOT' }}>Quick Links</h2>
              <ul className="space-y-2">
                {['Home', 'Our Story','Verticals', 'Contact Us', 'CatalystCue', 'Blog', 'News & Events','Careers'].map((item, idx) => (
                  <li key={idx} style={{ fontFamily: 'roboto' }}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className='mb-3'>
              <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'MaxOT' }}>Catch Us</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start justify-center lg:justify-start gap-2" style={{ fontFamily: 'roboto' }}>
                  <MapPin size={18} className="min-w-[18px] mt-1" />
                  <span>
                    Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA Nacharam Road No. 1,
                    Nacharam - Chilka Nagar Road, Hyderabad – 500076
                  </span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone size={18} className="min-w-[18px]" />
                  <a href="tel:+919966634008" className="hover:underline">+91 99666 34008</a>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <PhoneCall size={18} className="min-w-[18px]" />
                  <a href="tel:+914027172293" className="hover:underline">+91 40 2717 2293</a>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail size={18} className="min-w-[18px]" />
                  <a href="mailto:info@inkarp.co.in" className="hover:underline">info@inkarp.co.in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white py-3 text-sm w-[96%] mx-auto rounded-t-full shadow-inner text-black font-semibold" style={{ fontFamily: 'roboto' }}>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-5 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()}{' '}
            <a href="#" className="hover:underline">
              Inkarp
            </a>. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 " >
            {['Terms & Conditions', 'Privacy Policy', 'Terms and Conditions Of Sales and After Sales Service'].map((item, idx) => (
              <li key={idx} className="text-md px-4 ">
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
