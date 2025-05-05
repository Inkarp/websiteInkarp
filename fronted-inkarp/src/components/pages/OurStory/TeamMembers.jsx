import React from "react";

const teamData = [
  { name: "John Doe", title: "Executive Director", desc: "Leads innovation & operations across verticals." },
  { name: "Jane Smith", title: "Marketing Head", desc: "Oversees campaigns and brand strategy." },
  { name: "Raj Kumar", title: "Tech Lead", desc: "Architect of digital transformation at Inkarp." },
  { name: "Anita Mehra", title: "Sales Manager", desc: "Drives field sales across all zones." },
  { name: "Vivek Patel", title: "Finance Officer", desc: "Manages budgeting and fiscal health." },
  { name: "Nisha Rao", title: "Product Manager", desc: "Handles lifecycle of strategic product lines." },
  { name: "Amit Sinha", title: "Service Lead", desc: "Leads customer support and service delivery." },
  { name: "Sneha Iyer", title: "HR Manager", desc: "Fosters team growth and employee engagement." },
  { name: "Aditya Roy", title: "Logistics Head", desc: "Optimizes inventory and dispatch operations." },
  { name: "Meenakshi Das", title: "QA Lead", desc: "Ensures quality standards in all deliverables." },
];

export default function TeamMembers() {
  return (
    <>
      <div className="team-wrapper">
        {teamData.map((member, index) => (
          <div className="stage" key={index}>
            <figure className="ball bubble">
              <div className="bubble-content">{member.title}</div>
              <div className="team-card">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <p>{member.desc}</p>
              </div>
            </figure>
          </div>
        ))}
      </div>

      {/* Scoped Styles */}
      <style>{`
        .team-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          padding: 40px;
        }

        .stage {
          width: 200px;
          height: 200px;
          display: inline-block;
          perspective: 1200px;
        }

        .ball {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          text-shadow: 0 1px 2px rgba(190, 15, 15, 0.6);
          border-radius: 100%;
          position: relative;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4));
          animation: bubble-anim 2s ease-out infinite;
        }

        .ball:before {
          content: "";
          position: absolute;
          top: 1%;
          left: 5%;
          width: 90%;
          height: 90%;
          border-radius: 100%;
          background: radial-gradient(circle at top, white, rgba(255, 255, 255, 0) 58%);
          filter: blur(5px);
          z-index: 2;
        }

        .ball:after {
          content: "";
          position: absolute;
          display: block;
          top: 5%;
          left: 10%;
          width: 80%;
          height: 80%;
          border-radius: 100%;
          filter: blur(1px);
          transform: rotateZ(-30deg);
          z-index: 2;
          background: radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 74%, white 80%, white 84%, rgba(255, 255, 255, 0) 100%);
        }

        @keyframes bubble-anim {
          0% { transform: scale(1); }
          20% { transform: scaleY(0.95) scaleX(1.05); }
          48% { transform: scaleY(1.1) scaleX(0.9); }
          68% { transform: scaleY(0.98) scaleX(1.02); }
          80% { transform: scaleY(1.02) scaleX(0.98); }
          100% { transform: scale(1); }
        }

        .bubble-content {
          position: relative;
          z-index: 3;
          max-width: 90%;
          font-size: 0.85rem;
        }

        .team-card {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, 10px);
          width: 220px;
          background:rgba(122, 8, 8, 0.87);
          color: #000;
          padding: 12px 16px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-align: center;
          font-family: sans-serif;
          z-index: 10;
        }

        .ball:hover .team-card {
          opacity: 1;
          transform: translate(-50%, 0);
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}
