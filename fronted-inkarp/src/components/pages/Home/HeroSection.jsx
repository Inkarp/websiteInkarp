import React, { useState, useEffect, useRef } from "react";
import { Play, Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

// FIXED: Fall from bottom & rotate X from 180 to 0
const fallFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px) rotateX(180deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) rotateX(0deg);
  }
`;

function HeroSection() {
  const slides = [
    {
      image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
      title: "Innovative Designs",
      subtitle: "Explore our newest collection of modern innovations.",
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1050&q=80",
      title: "Reliable Tools",
      subtitle: "Crafted for durability and peak performance.",
    },
    {
      image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
      title: "Precision Instruments",
      subtitle: "Engineered for exact results every time.",
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1050&q=80",
      title: "Premium Materials",
      subtitle: "Only the finest go into our products.",
    },
    {
      image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
      title: "Tested by Experts",
      subtitle: "Validated and trusted by industry leaders.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideRef.current);
  };

  const handleManual = (direction) => {
    stopAutoSlide();
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    startAutoSlide();
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="w-full mt-3 py-5 px-4 lg:px-8 mt-20 ">
      <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
        {/* Left Video */}
        <div className="relative lg:w-1/2 mx-auto h-[400px] md:h-[500px]">
          <video
            ref={videoRef}
            className="rounded-xl w-full h-full object-cover"
            src="bg-video.mov"
            muted
            loop
            playsInline
            onMouseEnter={() => videoRef.current.play()}
            onMouseLeave={() => videoRef.current.pause()}
          ></video>
          <a
            href="https://www.youtube.com/@InkarpInstrument/videos"
            className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-white px-4 py-2 rounded-full flex items-center gap-2 z-10 shadow-lg hover:shadow-xl transition duration-300 hover:bg-red-800 hover:text-white"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Circle className="absolute w-full h-full" />
              <Play className="relative z-10" />
            </div>
            <span className="text-sm md:text-base">Watch Video</span>
          </a>
        </div>

        {/* Right Slider */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
          <div className="w-full h-full relative swing-top-fwd">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-10 left-0 right-0 text-red-500 p-4"
              style={{ perspective: "1000px" }}
            >
              <Reveal
                key={`title-${currentIndex}`}
                keyframes={fallFromBottom}
                duration={1200}
                triggerOnce={false}
              >
                <h2
                  className="text-lg md:text-2xl text-white font-bold"
                  style={{
                    fontFamily: "MaxOT",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {currentSlide.title}
                </h2>
              </Reveal>

              <Reveal
                key={`subtitle-${currentIndex}`}
                keyframes={fallFromBottom}
                duration={1200}
                delay={200}
                triggerOnce={false}
              >
                <p
                  className="text-sm md:text-base text-white mt-1"
                  style={{
                    fontFamily: "Roboto",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {currentSlide.subtitle}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute right-0 px-2 py-2 bg-white rounded-l-xl top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
            <button
              onClick={() => handleManual("prev")}
              className="p-2 rounded-full hover:bg-red-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleManual("next")}
              className="p-2 rounded-full hover:bg-red-100"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
