import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Emil Alicic',
    title: 'Professional Memeologist',
    email: 'limecicila@gmail.com',
    location: 'Hyderabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Head',
    email: 'jane@inkarp.com',
    location: 'Mumbai',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Raj Kumar',
    title: 'Tech Lead',
    email: 'raj@inkarp.com',
    location: 'Bangalore',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Anita Mehra',
    title: 'Sales Manager',
    email: 'anita@inkarp.com',
    location: 'Pune',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Vivek Patel',
    title: 'Finance Officer',
    email: 'vivek@inkarp.com',
    location: 'Ahmedabad',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Nisha Rao',
    title: 'Product Manager',
    email: 'nisha@inkarp.com',
    location: 'Delhi',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Amit Sinha',
    title: 'Service Lead',
    email: 'amit@inkarp.com',
    location: 'Chennai',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Sneha Iyer',
    title: 'HR Manager',
    email: 'sneha@inkarp.com',
    location: 'Kolkata',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Aditya Roy',
    title: 'Logistics Head',
    email: 'aditya@inkarp.com',
    location: 'Noida',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  },
  {
    name: 'Deepa Menon',
    title: 'Quality Assurance',
    email: 'deepa@inkarp.com',
    location: 'Trivandrum',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg',
    links: ['https://linkedin.com', 'https://twitter.com', 'https://github.com']
  }
];

export default function TeamInfo() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ backgroundColor: 'black', padding: '50px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            display: 'flex',
            height: '200px',
            width: hovered === index ? '500px' : '200px',
            borderRadius: hovered === index ? '100px 10px 100px 100px' : '100px',
            background: '#1c1c1c',
            border: '2px solid red',
            transition: 'all 0.8s ease',
            overflow: 'hidden'
          }}
        >
          {/* Flip Image */}
          <div style={{
            flexShrink: 0,
            height: '180px',
            width: '180px',
            perspective: '1000px',
            margin: '10px',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
              transform: hovered === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>
              {/* Front Image */}
              <img
                src={member.img}
                alt={member.name}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  borderRadius: '50%',
                  border: '10px solid red',
                  objectFit: 'contain',
                }}
              />
              {/* Backside */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '50%',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                textAlign: 'center',
                fontSize: '0.9rem'
              }}>
                <strong>{member.title}</strong>
                <span>{member.location}</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, color: 'white', paddingRight: '20px' }}>
            <h2 style={{
              fontFamily: 'Fira Sans Condensed',
              fontWeight: 600,
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
              width: hovered === index ? '100%' : 0,
              overflow: 'hidden',
              transition: 'width 1s ease',
            }}>{member.name}</h2>

            <h4 style={{
              whiteSpace: 'nowrap',
              width: hovered === index ? '100%' : 0,
              overflow: 'hidden',
              transition: 'width 1s ease 0.2s'
            }}>{member.title}</h4>

            <a href={`mailto:${member.email}`} style={{
              color: 'white',
              textDecoration: 'underline',
              whiteSpace: 'nowrap',
              width: hovered === index ? '100%' : 0,
              overflow: 'hidden',
              transition: 'width 1s ease 0.4s'
            }}>{member.email}</a>

            {/* Message + Icons */}
            {hovered === index && (
              <>
                <div style={{ color: '#ff4d4d', fontSize: '0.85rem', marginTop: '5px' }}>
                  Connect with {member.name.split(' ')[0]}
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
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
                        transition: 'transform 0.3s ease',
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
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
