import React, { useEffect, useRef, useState } from "react";

export default function AboutInkarpSection() {
  const slides = [
    {
      title: "50+ Principals",
      description: "We partner with over 50 global scientific pioneers...",
      images: ["inkarp.png", "inkarp ols.svg", "zeiss.png"],
    },
    {
      title: "50000+ Customers",
      description: "Over 50,000 clients — including government labs...",
      images: ["zeiss.png", "bandelin.png", "inkarp old.svg"],
    },
    {
      title: "10 Awards",
      description: "Our pursuit of excellence has earned us 10 prestigious...",
      images: [
        "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
        "https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg",
        "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
      ],
    },
    {
      title: "13+ Branches",
      description: "Inkarp is present in over 13+ cities across India...",
      images: [
        "https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg",
        "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
        "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
      ],
    },
    {
      title: "Customer Success",
      description: "We measure our success by the success of our clients...",
      images: [
        "https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg",
        "https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg",
        "https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (slides.length === 0) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  if (!slides[activeIndex]) {
    return <div className="text-white text-center p-10">Loading...</div>;
  }

  return (
    <div className="w-[96%] min-h-screen flex items-center justify-center px-4 md:px-10 py-10 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl gap-10 relative">
        {/* Circle Image (Main) */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl bg-red-100 z-0">
          <img
            src="inkarp.png"
            alt="About Inkarp"
            className="w-full h-full object-cover rounded-full border-[6px] border-red shadow-inner"
          />
        </div>

        {/* Sliding Card Content */}
        <div className="relative flex flex-col z-10 -mt-5 md:mt-0 md:-ml-20 w-[90vw] md:w-[500px]">
          <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-red-700 font-[MaxOT] mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-700 font-[Roboto]">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 border-red-500 ${
                  i === activeIndex ? "bg-red-500" : "bg-transparent"
                } transition-all duration-300`}
              ></div>
            ))}
          </div>
        </div>

        {/* Fan Styled Gallery Images */}
        <div className="gallery relative w-[300px] h-[300px] mt-4 md:mt-0">
          {slides[activeIndex].images.map((img, idx) => (
            <figure className="gallery-figure" key={idx}>
              <img className="gallery-image" src={img} alt={`img-${idx}`} />
            </figure>
          ))}
        </div>
      </div>

      {/* Fan Layout CSS */}
      <style>{`
        .gallery {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .gallery-figure {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180px;
          height: 180px;
          margin: -60px 0 0 -60px;
          transform-origin: 50% 200%;
          transition: transform 0.4s ease, z-index 0.2s;
          z-index: 1;
        }

        .gallery-figure:nth-child(1) {
          transform: rotate(-20deg) translateY(-10px);
        }

        .gallery-figure:nth-child(2) {
          transform: rotate(0deg) translateY(-30px);
        }

        .gallery-figure:nth-child(3) {
          transform: rotate(20deg) translateY(-10px);
        }

        .gallery-figure:hover {
          transform: rotate(0deg) translateY(-60px) scale(1.2);
          z-index: 10;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
