import React from "react";

export default function TeamButtons() {
  const teamMembers = [
    { name: "John Doe", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Raj Kumar", image: "https://randomuser.me/api/portraits/men/65.jpg" },
    { name: "Anita Mehra", image: "https://randomuser.me/api/portraits/women/21.jpg" },
    { name: "Vivek Patel", image: "https://randomuser.me/api/portraits/men/41.jpg" },
    { name: "Nisha Rao", image: "https://randomuser.me/api/portraits/women/56.jpg" },
    { name: "Amit Sinha", image: "https://randomuser.me/api/portraits/men/77.jpg" },
    { name: "Sneha Iyer", image: "https://randomuser.me/api/portraits/women/62.jpg" },
    { name: "Aditya Roy", image: "https://randomuser.me/api/portraits/men/85.jpg" },
    { name: "Reena Das", image: "https://randomuser.me/api/portraits/women/36.jpg" },
  ];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .neumorphic-button {
          position: relative;
          width: 200px;
          height: 200px;
          border: 4px solid rgba(136, 136, 136, 0.4);
          outline: none;
          border-radius: 40px;
          overflow: hidden;
          padding: 0;
          cursor: pointer;
          background: linear-gradient(270deg, #e0e0e0, #f4f5f6, #dddddd);
          background-size: 600% 600%;
          animation: gradientShift 6s ease infinite;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: -6px -10px 20px #ffffff,
                      6px 10px 20px rgba(0, 0, 0, 0.15),
                      inset 0 -4px 8px #cccccc;
        }

        .neumorphic-button:hover {
          transform: scale(1.03);
          box-shadow: -6px -12px 24px #ffffff,
                      6px 12px 24px rgba(0, 0, 0, 0.2),
                      inset 0 -4px 10px #bbbbbb;
        }

        .neumorphic-button:active {
          transform: scale(0.96);
          box-shadow: inset 4px 4px 12px rgba(0,0,0,0.2),
                      inset -4px -4px 12px #ffffff;
        }

        .button-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 36px;
          opacity: 0.92;
          transition: opacity 0.3s ease;
        }

        .neumorphic-button:hover .button-image {
          opacity: 1;
        }

        .button-label {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-size: 1.25rem;
          font-weight: bold;
          font-family: "Roboto", sans-serif;
          color: white;
          background: rgba(0, 0, 0, 0.4);
          padding: 10px 0;
          border-bottom-left-radius: 36px;
          border-bottom-right-radius: 36px;
          z-index: 1;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
        }
      `}</style>

      <div className="min-h-screen bg-[#f4f5f6] px-6 py-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <button key={index} className="neumorphic-button">
              <img
                src={member.image}
                alt={member.name}
                className="button-image"
              />
              <div className="button-label">{member.name}</div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
