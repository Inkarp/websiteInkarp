import React from "react";

export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 font-[Quicksand] gap-12 p-8">
      {/* SVG Envelope */}
      <svg
        className="w-80 md:w-[320px] animate-float"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="50"
          y="100"
          width="412"
          height="280"
          rx="20"
          fill="#EDF2F7"
          stroke="#CBD5E0"
          strokeWidth="12"
        />
        <path
          d="M60 110L256 290L452 110"
          stroke="#A0AEC0"
          strokeWidth="10"
        />
        <circle className="star animate-blink delay-[0s]" cx="70" cy="90" r="4" fill="#FFD700" />
        <circle className="star animate-blink delay-[200ms]" cx="440" cy="70" r="4" fill="#FFD700" />
        <circle className="star animate-blink delay-[400ms]" cx="400" cy="50" r="4" fill="#FFD700" />
        <circle className="star animate-blink delay-[600ms]" cx="100" cy="60" r="4" fill="#FFD700" />
        <circle className="star animate-blink delay-[800ms]" cx="160" cy="30" r="4" fill="#FFD700" />
      </svg>

      {/* Contact Form */}
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-3xl font-[Pacifico] mb-2">Contact Us</h2>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-3 text-white font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
