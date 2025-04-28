import React, { useState, useEffect, useRef } from "react";
import { Play, Circle, ChevronLeft, ChevronRight } from "lucide-react";

function HeroSection() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1555181126-cf46a03827c0?auto=format&fit=crop&w=1050&q=80",
      title: "Innovative Designs",
      subtitle: "Explore our newest collection of modern innovations.",
    },
    {
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1050&q=80",
      title: "Reliable Tools",
      subtitle: "Crafted for durability and peak performance.",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1050&q=80",
      title: "Precision Instruments",
      subtitle: "Engineered for exact results every time.",
    },
    {
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80",
      title: "Premium Materials",
      subtitle: "Only the finest go into our products.",
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1050&q=80",
      title: "Tested by Experts",
      subtitle: "Validated and trusted by industry leaders.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const autoSlideRef = useRef(null);
  const slideContainerRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideRef.current);
  };

  const goToSlide = (index) => {
    if (index >= slides.length) {
      // Loop back to the first slide
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
    setTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setTransitioning(false);
      setCurrentIndex(0); // Loop back to the first slide after the last one
    }
  };

  const handleManual = (direction) => {
    stopAutoSlide();
    if (direction === "next") {
      goToSlide((currentIndex + 1) % slides.length);
    } else {
      goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    }
    startAutoSlide();
  };

  return (
    <section className="w-full py-10 px-4 lg:px-8">
      <style>{`
        .slide-transition {
          transition: transform 0.8s ease-in-out;
        }
      `}</style>

      <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-20">
        {/* Left static image with button */}
        <div className="relative lg:w-1/2 mx-auto h-[400px] md:h-[500px]">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80"
            alt="Static"
          />
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

        {/* Slider Right */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
          {/* Image slides */}
          <div
            ref={slideContainerRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex h-full ${transitioning ? "slide-transition" : ""}`}
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(currentIndex / slides.length) * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-10 left-0 right-0  text-red-500 p-4">
                  <h2 className="text-lg md:text-2xl text-white font-bold" style={{ fontFamily: 'MaxOT' }} >{slide.title}</h2>
                  <p className="text-sm md:text-base text-white" style={{ fontFamily: 'roboto' }} >{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows on right center */}
          <div className="absolute right-0 px-2 py-2 bg-white rounded-l-xl top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3">
            <button
              onClick={() => handleManual("prev")}
              className=" p-2 rounded-full  hover:bg-red-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleManual("next")}
              className=" p-2 rounded-full  hover:bg-red-100"
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
