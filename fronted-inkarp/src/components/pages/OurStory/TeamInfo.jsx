import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: 'https://www.inkarp.co.in/assets/images/chairman-sir.jpg',
    message:
      'When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.Our success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.',
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

  const renderCard = (member, index) => {
    const isBalu = member.name.includes('S. Balu');
    const hoveredHeight = hovered === index ? (isBalu ? '320px' : '250px') : '250px';
    const hoveredWidth = hovered === index ? (isBalu ? '800px' : '500px') : '200px';

    return (
      <div key={index}>
        <div
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: 'flex',
            height: hoveredHeight,
            width: hoveredWidth,
            borderRadius: '20px',
            border: hovered === index ? '2px solid red' : '0px solid #ccc',
            transition: 'all 0.6s ease',
            overflow: 'hidden',
            // backgroundColor: '#fff',
            boxShadow: hovered === index ? '0 0 20px rgba(213, 20, 20, 0.2)' : '0 0 5px rgba(184, 18, 18, 0.1)'
          }}
        >
          <div style={{ width: '200px', position: 'relative', }}>
            <div style={{ width: '100%', height: '190px', perspective: '1000px', margin: ' auto' }}>
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
                    objectFit: 'cover',
                    borderRadius: '150px',
                    backfaceVisibility: 'hidden',
                    border: '4px solid red',
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
                    // border: '4px solid red',
                    padding: '10px',
                  }}
                />
              </div>
            </div>
            <div style={{ padding: '', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1rem', margin: '', fontWeight: 600 }} className='font-[Max-OT] text-white'>
                {member.name}
              </h3>
            </div>
            {hovered === index && member.links[0] && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1px' }}>
                <a
                  href={member.links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
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
                color: 'white',
                fontSize: '16px',
                fontStyle: 'italic',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Roboto',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left'
              }}
            >
              <p className='text-red-500 font-bold'>{member.title}</p>
              “{member.message}”
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: 'MaxOT' }} className="w-full mt-10 mx-auto py-14 relative">
      {/* Background Image Section */}
      <div className="relative w-full h-[900px] flex items-start justify-between px-10">
        <img
          src="inkarpBuilding-2.jpg"
          alt="Inkarp Building"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg"
          style={{ animation: 'fadeIn ease-in 2.5s forwards', zIndex: 0 }}
        />

        {/* Heading + Chairman & ED Overlay */}
        <div className="relative z-10 mt-5 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4">
          {/* Left: Chairman & ED Cards */}
          <div className="flex flex-col gap-6 items-start">
            {renderCard(teamMembers[0], 0)}

            {/* Down Arrow from Balu to Natesh */}
            {/* <div className="text-white text-4xl self-center">↓</div> */}

            {renderCard(teamMembers[1], 1)}

            {/* Down Arrow from Natesh to Directors */}
            {/* <div className="text-white text-4xl self-center mt-4">↓</div> */}

            {/* Regional Leadership below Natesh */}
            {/* <h2 className="text-left text-2xl font-bold text-white mt-4">Regional Leadership</h2> */}
            <div className="flex  gap-6 justify-start">
              {teamMembers.slice(2).map((member, idx) => renderCard(member, idx + 2))}
            </div>
          </div>

          {/* Right: Heading and Paragraph */}
          <div className="text-right md:w-[50%] mt-6 md:mt-0">
            <h1 className="text-5xl font-extrabold text-white mb-4">House of Inkarp</h1>
            <p className="text-white text-lg font-medium leading-relaxed">
              Meet the leadership team that powers Inkarp's vision across India. United by innovation and driven by service, they embody the spirit of excellence and commitment.
            </p>
          </div>
        </div>

      </div>

      {/* Regional Leadership */}


      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0.2; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

