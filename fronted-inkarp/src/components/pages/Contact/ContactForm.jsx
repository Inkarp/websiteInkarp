import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return(
 <section className="w-full px-6 py-12 md:py-20 z-[-10]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <button className="px-4 py-2 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition">
            CONTACT US
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Happy to Answer All <br />
            Your Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We carefully screen all of our cleaners, so you can rest assured that your home would
            receive the absolute highest quality of service providing.
          </p>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition text-lg font-medium">
            More Details
            <span>→</span>
          </button> */}
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-[2rem] shadow-xl w-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send a message to staff</h3>
          <p className="text-gray-500 mb-6 text-sm">
            Your email address will not be published. Required fields are marked *
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-full border border-gray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full h-32 rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            {/* <div className="flex items-center gap-2">
              <input type="checkbox" id="saveInfo" className="accent-blue-600" />
              <label htmlFor="saveInfo" className="text-sm text-gray-500">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div> */}

            <button
              type="submit"
              className="mt-4 bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition"
            >
              Submit <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};



export default ContactForm;