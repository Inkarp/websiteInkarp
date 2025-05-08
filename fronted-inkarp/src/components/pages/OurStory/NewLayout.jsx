import React from "react";

const NewLayout = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans|Sacramento');

        // html {
        //   font-size: 14.5px;
        // }

        // body {
        //   font-family: 'Open Sans', sans-serif;
        //   line-height: 1.45em;
        //   background-color: #f0f0f0;
        //   color: #404646;
        // }

        // * {
        //   box-sizing: border-box;
        // }

        .main-container {
          margin: 5rem 0.8rem;
        //   background-color:rgb(162, 126, 131);  
          
        }

        .grid-container {
          margin: auto;
          display: grid;
          grid-gap: 1.1312rem;
          grid-template-columns: repeat(auto-fit, 12.8rem);
          grid-auto-rows: 12.8rem;
          grid-auto-flow: dense;
          justify-content: center;
          max-width: 75em;
        }

        .card {
          grid-row: auto / span 1;
          grid-column: auto / span 1;
          background-color: white;
          box-shadow: 1px 3px 3px rgba(0, 10, 20, 0.06);
        }

        .card h1, .card h2, .card h3, .card h4, .card p {
          margin-top: 0;
          font-weight: normal;
        }

        .card__image {
          height: 100%;
          width: 100%;
          display: flex;
        }

        .card__image img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .card__side-by-side, .card__side-by-side--m {
          height: 100%;
          width: 100%;
          display: flex;
        }

        .card__side-by-side--m {
          flex-direction: column;
        }

        .card__side-by-side--m img {
          min-height: auto;
        }

        .card__content {
          padding: 1.6rem;
        }

        .card__button {
          margin: 1.6rem 0;
          text-align: center;
          padding: 0.8rem 1.6rem;
          background: none;
          border: 0.5px solid #777;
          border-radius: 2px;
        }

        .card__button:hover {
          border-color: #d099a0;
        }

        .card--featured {
          grid-row: auto / span 3;
          grid-column: auto / span 2;
        }

        .card--2x {
          grid-row: auto / span 2;
          grid-column: auto / span 2;
        }

        .card--vertical {
          grid-row: auto / span 2;
        }

        .card--horizontal {
          grid-column: auto / span 2;
        }

        .card--frameless {
          background-color: transparent;
          box-shadow: none;
        }

        .padding-large {
          padding: 3.2rem;
        }

        .padding-large--l {
          padding: 1.6rem;
        }

        .big-script {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Sacramento', sans-serif;
          font-size: 4.3em;
          line-height: 1.15em;
          text-align: center;
        }

        .big-script p {
          margin: 0;
        }

        @media (max-width: 413px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
          }

          .card {
            min-height: 12.8rem;
          }
        }

        @media (min-width: 627px) {
          .grid-container {
            grid-gap: 1.6rem;
          }

          .card__side-by-side--m {
            flex-direction: row;
          }

          .card__side-by-side--m img {
            min-height: 100%;
          }

          .card--featured {
            grid-row: auto / span 2;
            grid-column: 1 / -1;
          }
        }

        @media (min-width: 836px) {
          .padding-large--l {
            padding: 3.2rem;
          }
        }
      `}</style>

      <div className="main-container ">
      <div className="card__content big-script padding-large">
              <p>Every great journey begins with a vision.<br/>Ours began with a purpose — to transform science in India.</p>
            </div>
        <div className="grid-container">
          <div className="card card--2x">
            <div className="card__content big-script padding-large">
              <p>Inkarp: Empowering Innovation</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src="https://www.inkarp.co.in/assets/images/inkarp-building.png" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src="https://www.inkarp.co.in/assets/images/inkarp-building.png" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <h3>50,000+ Customers</h3>
              <p>Serving India's research and diagnostics community with pride.</p>
            </div>
          </div>
          <div className="card card--horizontal">
            <div className="card__image">
              <img src="https://www.inkarp.co.in/assets/images/resource/about-14.jpg" alt="" />
            </div>
          </div>
          <div className="card card--featured">
            <div className="card__side-by-side--m">
              <div className="card__image">
                <img src="https://www.inkarp.co.in/assets/images/resource/about-3.png" alt="" />
              </div>
              <div className="card__content padding-large--l">
                <h2>10+ Prestigious Awards</h2>
                <p>Recognized nationally for excellence in customer support and technology enablement.</p>
                <p>Partnering with global innovators to uplift Indian science.</p>
                <div className="card__button">Learn More</div>
              </div>
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img src="https://images.pexels.com/photos/920968/pexels-photo-920968.jpeg" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg" alt="" />
            </div>
          </div>
          <div className="card card--horizontal">
            <div className="card__side-by-side">
              <div className="card__image">
                <img src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg" alt="" />
              </div>
              <div className="card__content">
                <h3>50+ Global Principals</h3>
                <p>Distributing world-class technologies to every lab corner in India.</p>
              </div>
            </div>
          </div>
          <div className="card card--vertical">
            <div className="card__image">
              <img src="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src="https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg" alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card__content">
              <h3>Pan-India Presence</h3>
              <p>13+ branches and regional offices supporting customer success nationwide.</p>
            </div>
          </div>
          <div className="card card--2x">
            <div className="card__image">
              <img src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg" alt="" />
            </div>
          </div>
          <div className="card card--horizontal card--frameless">
            <div className="card__content big-script">
              <p>Trusted by India's Leading Scientists</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewLayout;
