import React from "react";

const NewSection = () => {
    return (
        <>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    
            body {
              margin: 0;
              font-family: 'Open Sans', sans-serif;
              background-color: #fff;
            }
    
            .hero-section {
              position: relative;
              height: 100vh;
              background: linear-gradient(145deg, #fff6f0 0%, #ffe6eb 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 3rem 2rem;
              overflow: hidden;
              text-align: center;
              z-index: 1;
            }
    
            .hero-glow {
              position: absolute;
              width: 600px;
              height: 600px;
              background: radial-gradient(circle, rgba(244,98,130,0.4) 0%, rgba(255,255,255,0) 70%);
              top: -100px;
              right: -100px;
              z-index: 0;
            }
    
            .hero-glow-left {
              left: -100px;
              top: auto;
              bottom: -100px;
              background: radial-gradient(circle, rgba(251,186,90,0.3) 0%, rgba(255,255,255,0) 70%);
            }
    
            .hero-title {
              font-size: 3rem;
              color: #aa1e46;
              font-weight: 700;
              z-index: 1;
            }
    
            .hero-subtitle {
              font-size: 1.25rem;
              color: #333;
              max-width: 680px;
              margin: 1rem auto 2rem;
              z-index: 1;
            }
    
            .hero-buttons {
              display: flex;
              gap: 1rem;
              flex-wrap: wrap;
              justify-content: center;
              z-index: 1;
            }
    
            .hero-button {
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 600;
              transition: all 0.3s ease;
            }
    
            .btn-primary {
              background-color: #aa1e46;
              color: #fff;
            }
    
            .btn-primary:hover {
              background-color: #8d1a3b;
            }
    
            .btn-secondary {
              background-color: transparent;
              border: 2px solid #aa1e46;
              color: #aa1e46;
            }
    
            .btn-secondary:hover {
              background-color: #aa1e46;
              color: #fff;
            }
          `}</style>
    
          <section className="hero-section">
            <div className="hero-glow"></div>
            <div className="hero-glow hero-glow-left"></div>
            <div>
              <h1 className="hero-title">Redefining Scientific Excellence in India</h1>
              <p className="hero-subtitle">
                For over 40 years, Inkarp has partnered with world-renowned scientific brands to empower Indian labs,
                research facilities, and diagnostic centers with breakthrough innovations and unmatched service.
              </p>
              <div className="hero-buttons">
                <button className="hero-button btn-primary">Our Verticals</button>
                <button className="hero-button btn-secondary">Our Legacy</button>
              </div>
            </div>
          </section>
        </>
      );
    };

export default NewSection;
