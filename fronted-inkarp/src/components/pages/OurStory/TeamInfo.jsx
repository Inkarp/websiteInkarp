import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/S.Balu.jpeg',
    message:
      'When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.Our success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.I am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.Thank you for being an integral part of Inkarps journey.Let us continue to grow, innovate, and make a lasting impact together.',
    links: ['https://linkedin.com/in/s-balu', 'https://twitter.com/s_balu', 'https://github.com/sbalu']
  },
  {
    name: 'K. Natesh',
    title: 'Executive Director',
    email: 'natesh@inkarp.com',
    location: 'Mumbai',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    message:
      'Leads all aspects of Inkarp\'s operations, including Sales, Customer Service, Operations, Finance, Marketing, and Back Office. His comprehensive oversight ensures that every department works cohesively to achieve the company’s mission of delivering exceptional value to customers.',
    links: ['https://linkedin.com/in/k-natesh', 'https://twitter.com/k_natesh', 'https://github.com/knatesh']
  },
  {
    name: 'K. Sreedhar',
    title: 'Director (South & East)',
    email: 'sreedhar@inkarp.com',
    location: 'Bangalore',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Sreedhar.jpeg',
    message:
      'Directs Inkarp’s sales efforts across the South, East, and Northeast regions, covering Tamil Nadu, Kerala, Karnataka, Telangana, Andhra Pradesh, West Bengal, Odisha, Assam, Meghalaya, Manipur, Mizoram, Tripura, Nagaland, Arunachal Pradesh, and Sikkim.',
    links: ['https://linkedin.com/in/k-sreedhar', 'https://twitter.com/k_sreedhar', 'https://github.com/ksreedhar']
  },
  {
    name: 'M. Madhusudhan',
    title: 'Director (North)',
    email: 'madhusudhan@inkarp.com',
    location: 'Delhi',
    img: 'https://www.inkarp.co.in/assets/images/our_team/M.Madhusudhan.jpeg',
    message:
      'Heads Inkarp’s operations in the Northern, Central, and select Eastern regions, including Delhi, Uttar Pradesh, Punjab, Chandigarh, Haryana, Himachal Pradesh, Uttarakhand, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar, and Jammu & Kashmir.',
    links: ['https://linkedin.com/in/m-madhusudhan', 'https://twitter.com/m_madhusudhan', 'https://github.com/mmadhusudhan']
  },
  {
    name: 'M. S. Reddy',
    title: 'Director (West)',
    email: 'msreddy@inkarp.com',
    location: 'Ahmedabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/M.S.Reddy.jpeg',
    message:
      'Leads Inkarp’s sales operations across the Western region, encompassing Maharashtra, Gujarat, and Goa. Specializing in advanced homogenization and precision laboratory solutions.',
    links: ['https://linkedin.com/in/m-s-reddy', 'https://twitter.com/m_s_reddy', 'https://github.com/msreddy']
  },
  {
    name: 'N. Saravanan',
    title: 'Chief Operating Officer (All India)',
    email: 'saravanan@inkarp.com',
    location: 'Chennai',
    img: 'https://www.inkarp.co.in/assets/images/our_team/N.Saravanan.jpeg',
    message:
      'N. Saravanan’s journey with Inkarp Instruments reflects dedication, leadership, and a focus on excellence. With extensive experience, he has driven operational success, fostered collaboration, and ensured customer satisfaction.',
    links: ['https://linkedin.com/in/n-saravanan', 'https://twitter.com/n_saravanan', 'https://github.com/nsaravanan']
  }
];




export default function TeamInfo() {
  const [hovered, setHovered] = useState(null);

  const renderCard = (member, index) => (
    <div key={index}>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        style={{
          display: 'flex',
          height: hovered === index ? '380px' : '360px',
          width: hovered === index ? '600px' : '240px',
          borderRadius: '20px',
          border: hovered === index ? '4px solid red' : '0px solid #ccc',
          transition: 'all 0.6s ease',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: hovered === index ? '0 0 20px rgba(213, 20, 20, 0.2)' : '0 0 5px rgba(184, 18, 18, 0.1)'
        }}
      >
        {/* Left section - image and text */}
        <div style={{ width: '220px', position: 'relative' }}>
          <div style={{ width: '100%', height: '220px', perspective: '1000px', margin: '10px auto' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s',
                transform: hovered === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '150px',
                  backfaceVisibility: 'hidden',
                  border: '4px solid red'
                }}
              />
              <img
                src={member.img}
                alt="Back"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  border: '4px solid red'
                }}
              />
            </div>
          </div>

          <div style={{ padding: '8px 10px 5px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1rem', margin: '5px 0 0', fontWeight: 600 }}>{member.name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>{member.title}</p>
          </div>

          {hovered === index && member.links[0] && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <a
                href={member.links[0]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#0077b5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaLinkedin className="text-sm text-white" />
              </a>
            </div>
          )}
        </div>

        {hovered === index && member.message && (
          <div
            style={{
              padding: '20px',
              width: '100%',
              color: '#333',
              fontSize: '16px',
              fontStyle: 'italic',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderLeft: '1px solid #ddd',
              textAlign: 'right'
            }}
          >
            “{member.message}”
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: 'MaxOT' }} className="bg-white w-[96%] mt-23 mx-auto py-14">
      {/* Section Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12 px-4">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">House of Inkarp</h1>
        <p className="text-gray-700 text-lg font-medium">
          Meet the leadership team that powers Inkarp's vision across India. United by innovation and driven by service, they embody the spirit of excellence and commitment.
        </p>
      </div>

      {/* Chairman + ED + Building Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 px-4">
        {/* Chairman & Executive Director */}
        <div className="flex flex-col gap-8 w-full md:w-[50%] max-w-[750px] items-center bg-red-100">
          {renderCard(teamMembers[0], 0)}
          {renderCard(teamMembers[1], 1)}
        </div>

        {/* Building Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="https://www.inkarp.co.in/assets/images/inkarp-building.png"
            alt="Inkarp Building"
            className="rounded-xl shadow-lg animate-fade-in opacity-0"
            style={{
              width: '100%',
              maxWidth: '400px',
              animation: 'fadeIn ease-in 2.5s forwards',
            }}
          />
        </div>
      </div>

      {/* Directors Row */}
      <h2 className="text-center text-2xl font-semibold mb-8">Regional Leadership</h2>
      <div className="flex flex-wrap justify-center gap-10 px-2">
        {teamMembers.slice(2).map((member, idx) => renderCard(member, idx + 2))}
      </div>

      {/* Fade animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0.2; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
