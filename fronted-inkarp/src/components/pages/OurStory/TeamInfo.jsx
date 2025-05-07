import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/S.Balu.jpeg',
    message:
      'When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.',
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
    <div>
      <h1>Meet the Team </h1>
      <h2>The talented Team Behind the scenes of organisation</h2>
    <div
      key={index}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{
        display: 'flex',
        height: 'auto',
        width: hovered === index ? '600px' : '240px',
        borderRadius: '20px',
        border: hovered === index ? '4px solid red' : '0px solid #ccc',
        transition: 'all 0.6s ease',
        backgroundColor: '#fff',
        overflow: 'hidden',
        boxShadow: hovered === index ? '0 0 20px rgba(0,0,0,0.2)' : '0 0 5px rgba(0,0,0,0.1)'
      }}
    >
      {/* Left side: Image & Info */}
      <div style={{ width: '220px', position: 'relative' }}>
        <div style={{
          width: '100%',
          height: '220px',
          perspective: '1000px',
          margin: '10px auto',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s',
            transform: hovered === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}>
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
                border: '4px solid gray'
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
                border: '4px solid gray'
              }}
            />
          </div>
        </div>

        {/* Always visible name + title */}
        <div style={{
          padding: '8px 10px 5px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1rem', margin: '5px 0 0', fontWeight: 600 }}>{member.name}</h3>
          <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>{member.title}</p>
        </div>

        {/* Details on hover */}
        {hovered === index && (
          <div style={{ padding: '10px 12px', textAlign: 'left' }}>
            <a href={`mailto:${member.email}`} style={{ color: 'red', fontSize: '0.9rem' }}>
              {member.email}
            </a>
            <div style={{ marginTop: '8px', fontSize: '0.85rem', color: '#ff4d4d' }}>
              Connect with {member.name.split(' ')[0]}
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              {member.links.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'white',
                    maxWidth: '30px',
                    borderRadius: '25px',
                    padding: '4px',
                  }}
                >
                  <img
                    src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
                    alt="icon"
                    style={{ width: '100%', borderRadius: '25px' }}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right-side message on hover */}
      {hovered === index && member.message && (
        <div style={{
          padding: '20px',
          width: '100%',
          color: '#333',
          fontSize: '16px',
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid #ddd',
        }}>
          “{member.message}”
        </div>
      )}
    </div>
    </div>
  );

  return (
    <div
      style={{
        background: `repeating-linear-gradient(
          135deg,
          #f7f7f7,
          #f7f7f7 40px,
          #eaeaea 40px,
          #eaeaea 80px
        )`,
        padding: '50px 0'
      }}
      className="mt-20"
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        {renderCard(teamMembers[0], 0)} {/* Chairman */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        {renderCard(teamMembers[1], 1)} {/* Executive Director */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {teamMembers.slice(2).map((member, idx) => renderCard(member, idx + 2))}
      </div>
    </div>
  );
}
