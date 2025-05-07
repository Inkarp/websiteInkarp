import React from "react";

const marketingTeam = [
  {
    name: "Kalyan",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Suchitra Tiwari",
    img: "https://images.unsplash.com/photo-1530577197743-7adf14294584?auto=format&fit=crop&w=801&q=80",
  },
  {
    name: "Sajid Ghani",
    img: "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?auto=format&fit=crop&w=801&q=80",
  },
];

const salesTeam = [
  {
    name: "Dhriti",
    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Milind",
    img: "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Srikant Tiwari",
    img: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&fit=crop&w=801&q=80",
  },
  {
    name: "Major Sameer",
    img: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?auto=format&fit=crop&w=812&q=80",
  },
];

export default function SmallTeams() {
  return (
    <>
      <section className="team bg-white">
        <h2 className="section-heading">Dividing By Team United by Work</h2>

        <div className="team-group">
          <h3 className="team-title">Marketing Team</h3>
          <div className="container">
            {marketingTeam.map((member, idx) => (
              <div className="profile" key={idx}>
                <img src={member.img} alt={member.name} />
                <span className="name">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="team-group">
          <h3 className="team-title">Sales Team</h3>
          <div className="container">
            {salesTeam.map((member, idx) => (
              <div className="profile" key={idx}>
                <img src={member.img} alt={member.name} />
                <span className="name">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&display=swap');

        // body {
        //   margin: 0;
        //   background-color: #f7f7f7;
        // }

        // .team {
        //   padding: 60px 20px;
        // }

        .section-heading {
          font-family: "Dancing Script", cursive;
          text-align: center;
          font-size: 64px;
          color: red;
          margin-bottom: 60px;
          
        }

        .team-title {
          text-align: center;
          font-size: 28px;
          color: #444;
          font-family: 'Bebas Neue', cursive;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .team-group {
          margin-bottom: 60px;
        }

        .container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 90%;
          max-width: 1440px;
          margin: 0 auto;
        }

        .profile {
          position: relative;
          transition: all 0.3s;
          margin: 0 10px;
        }

        .profile:hover {
          transform: translateY(25px);
        }

        .profile img {
          max-width: 160px;
          border-radius: 50%;
          border: 5px solid #f7f7f7;
          filter: drop-shadow(-20px 0 10px rgba(0, 0, 0, 0.1));
          cursor: pointer;
          transition: transform 0.3s;
        }

        .profile:not(:first-child) img {
          margin-left: -20px;
        }

        .profile .name {
          position: absolute;
          background-color:rgb(153, 16, 27);
          color: #fff;
          font-family: "Bebas Neue", cursive;
          padding: 15px 30px;
          border-radius: 100px;
          bottom: -80px;
          left: 50%;
          white-space: nowrap;
          transform: translate(-50%, -50px);
          letter-spacing: 1px;
          font-size: 20px;
          opacity: 0;
          transition: all 0.3s;
        }

        .profile .name::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          background-color:rgb(153, 16, 34);
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .profile img:hover + .name {
          opacity: 1;
          transform: translateX(-50%);
          box-shadow: 0 10px 20px rgba(86, 86, 198, 0.3);
        }

        @media (max-width: 768px) {
          .profile img {
            max-width: 120px;
          }

          .section-heading {
            font-size: 48px;
          }

          .team-title {
            font-size: 22px;
          }

          .profile .name {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
