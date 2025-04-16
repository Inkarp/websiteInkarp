import React, { useState, useEffect } from "react";

function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1555181126-cf46a03827c0?auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1050&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full py-10 px-4 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
        {/* Static Image / Left Section */}
        <div className="w-[95%] lg:w-1/2 h-[500px]">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80"
            alt="Static Glasses"
          />
        </div>

        {/* Image Slider / Right Section */}
        <div className="w-full lg:w-1/2 h-[450px] relative flex items-center justify-center">
          <img
            key={currentIndex}
            className={`rounded-2xl w-full h-full object-cover transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
