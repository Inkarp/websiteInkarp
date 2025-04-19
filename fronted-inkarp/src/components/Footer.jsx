import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black text-sm mt-10">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Subscribe */}
        <div className="px-4 pt-4">
          <div className="flex flex-col items-start">
            <img src="inkarp old.svg" alt="Inkarp Logo" className="h-32 w-auto mb-4" />

            {/* Subscribe Section */}
            <div className="w-full max-w-xs">
              <h3 className="text-base font-semibold mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-l-md outline focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-black text-white px-4 rounded-r-md hover:bg-gray-800 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Inkarp Instruments Pvt Ltd</h2>
          <p className="mb-2">
            Established in 1985, Inkarp is a trusted name in the scientific instrument industry, offering comprehensive research solutions and exceptional after-sales support. With a robust presence in India, we're a go-to choice for a diverse range of sectors. Our enduring partnerships with major manufacturers globally ensure sustained customer support. Our dedicated team is at the heart of our success, reflecting our commitment to excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/our-story" className="hover:underline">Our Story</a></li>
            <li><a href="/verticals" className="hover:underline">Verticals</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/catalystcue" className="hover:underline">CatalystCue</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            Inkarp Instruments Pvt Ltd<br />
            Plot No - 5A/10-11, 3rd Floor,<br />
            IDA Nacharam Road No. 1,<br />
            Nacharam - Chilka Nagar Road,<br />
            Hyderabad – 500076
          </p>
          <p className="mb-2">Phone: +91 40 2717 2293</p>
          <p>Email: <a href="mailto:info@inkarp.co.in" className="hover:underline">info@inkarp.co.in</a></p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 text-center py-4">
        <p>© {new Date().getFullYear()} Inkarp Instruments Pvt Ltd. All Rights Reserved. Designed with ❤️ by Digital Edze.</p>
      </div>
    </footer>
  );
};

export default Footer;
