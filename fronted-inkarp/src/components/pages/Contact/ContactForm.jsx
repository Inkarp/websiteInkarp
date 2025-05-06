import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand&display=swap');

        .contact-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f9fafb;
          font-family: 'Quicksand', sans-serif;
          gap: 3rem;
          padding: 2rem;
        }

        .envelope {
          width: 320px;
          height: auto;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .star {
          animation: blink 1.4s infinite ease-in-out alternate;
        }

        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.2s; }
        .star:nth-child(3) { animation-delay: 0.4s; }
        .star:nth-child(4) { animation-delay: 0.6s; }
        .star:nth-child(5) { animation-delay: 0.8s; }

        @keyframes blink {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        form {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        form h2 {
          font-family: 'Pacifico', cursive;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-family: inherit;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }

          .envelope {
            width: 250px;
          }
        }
      `}</style>

      <svg
        className="envelope"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="100" width="412" height="280" rx="20" fill="#EDF2F7" stroke="#CBD5E0" strokeWidth="12"/>
        <path d="M60 110L256 290L452 110" stroke="#A0AEC0" strokeWidth="10"/>
        <circle className="star" cx="70" cy="90" r="4" fill="#FFD700"/>
        <circle className="star" cx="440" cy="70" r="4" fill="#FFD700"/>
        <circle className="star" cx="400" cy="50" r="4" fill="#FFD700"/>
        <circle className="star" cx="100" cy="60" r="4" fill="#FFD700"/>
        <circle className="star" cx="160" cy="30" r="4" fill="#FFD700"/>
      </svg>

      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
