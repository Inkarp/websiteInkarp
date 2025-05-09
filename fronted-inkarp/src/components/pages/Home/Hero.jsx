import React from "react";

 function Hero() {
  return (
    <>
      <style>{`
        :root {
          --black: rgb(0 0 0);
          --white: rgb(255 255 255);
          --yellow: rgb(255 213 28);
          --light-yellow: rgb(255 209 98 / 60%);
          --gray: rgb(167 167 167 / 30%);
          --logo-dimensions: 18rem;
          --icon-dimensions: 3rem;
          --full-w: 100%;
          --full-h: 100%;
          --default-font: -apple-system, BlinkMacSystemFont, Roboto, helvetica neue, sans-serif;
          --marvin: "Marvin Visions Variable";
          --h1-clamp: clamp(10.5rem, 15vw, 30rem);
          --default-font-size: 1.8rem;
          --default-heading-size: 4.5rem;
          --duration: 0.5s;
          --short-duration: 350ms;
          --gap: 0.4rem;
          --default-padding: 1.2rem;
          --z-20: 20;
          --z-30: 30;
        }

        @font-face {
          font-family: "Marvin Visions Variable";
          src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/MarvinVisionsTrial-Variable.ttf");
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--marvin), var(--default-font);
          background: var(--black);
          color: var(--white);
          display: grid;
          grid-template-rows: 5rem calc(100vh - 5rem);
          min-height: 100vh;
        }

        nav {
          background: var(--black);
          padding: var(--default-padding);
          display: flex;
          justify-content: space-between;
          box-shadow: 0 0.8rem 2.4rem var(--gray);
        }

        nav ul {
          display: flex;
          align-items: center;
          gap: var(--default-padding);
        }

        a {
          color: var(--white);
          text-decoration: none;
          font-size: var(--default-font-size);
          transition: color var(--short-duration) ease-in;
        }

        .cta {
          border: 0.2rem solid transparent;
          color: var(--light-yellow);
          padding: var(--default-padding);
        }

        .cta:hover {
          border-color: var(--yellow);
          background: var(--light-yellow);
          color: var(--black);
        }

        section article {
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
        }

        .panels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(18.5rem, 1fr));
        }

        .panel {
          position: relative;
        }

        .panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.33);
        }

        .panel span {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: var(--default-padding);
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background: var(--gray);
        }

        .panel:hover img {
          filter: brightness(1);
        }

        .panel:hover span {
          color: var(--yellow);
        }

        h1 {
          font-size: var(--h1-clamp);
          text-align: center;
          margin: 6rem auto;
        }

        .gradient-text {
          background-image: linear-gradient(to bottom, var(--yellow), var(--light-yellow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .geo-square {
          margin: 0 auto;
          width: calc(var(--default-padding) * 15);
          height: calc(var(--default-padding) * 20);
          box-shadow: 0 0 0 var(--default-padding) var(--yellow);
        }

        .geo-square img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <nav>
        <ul>
          <li>
            <a href="#" className="link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 13">
                {/* SVG content */}
              </svg>
            </a>
          </li>
        </ul>
        <ul>
          <li><a href="#" className="link">Magazine</a></li>
          <li><a href="#" className="link">TV</a></li>
          <li><a href="#" className="link">Podcasts</a></li>
          <li><a href="#" className="cta">Subscribe</a></li>
        </ul>
      </nav>

      <section>
        <article>
          <ul className="panels">
            {[
              {
                label: "Animals",
                image: "https://assets.codepen.io/1149983/matthew-kerslake-BpH--upRlCs-unsplash-min.jpg",
              },
              {
                label: "History",
                image: "https://assets.codepen.io/1149983/sub-buzz-24302-1484257459-8.jpg",
              },
              {
                label: "Science",
                image: "https://assets.codepen.io/1149983/spacex-6SbFGnQTE8s-unsplash-min.jpg",
              },
              {
                label: "Travel",
                image: "https://assets.codepen.io/1149983/ian-dooley-hpTH5b6mo2s-unsplash-min.jpg",
              },
            ].map((item, index) => (
              <li key={index} className="panel">
                <a href="#">
                  <span>
                    {item.label}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 442">
                      <g fill="none" fillRule="evenodd">
                        <g fillRule="nonzero" className="fill">
                          <path d="..." />
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
                <img src={item.image} alt={item.label} />
              </li>
            ))}
          </ul>

          <h1>
            {"EXPLORE".split("").map((char, idx) => (
              <span className="gradient-text letter" key={idx}>{char}</span>
            ))}
          </h1>

          <span className="geo-square">
            <img
              src="https://assets.codepen.io/1149983/ezgif.com-gif-maker.gif"
              alt="butterfly"
            />
          </span>
        </article>
      </section>
    </>
  );
}

export default Hero;