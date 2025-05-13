import React, { useEffect, useRef, useState } from "react";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "With 40+ Years of Scientific Excellence";
  const typingSpeed = 40;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (visible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [visible, typedText, fullText]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-cover bg-center text-white px-4 sm:px-6 md:px-10 lg:px-20 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-50"
      }`}
    >
      {/* Blinking cursor */}
      <style>{`
        .cursor {
          // display: inline-block;
          // width: 1px;
          // background-color: orange;
          animation: blink 0.7s infinite;
          // height: 1em;
          vertical-align: bottom;
          // margin-left: 4px;
        }

        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black/40 p-6 rounded-2xl">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              {typedText}
              {visible && typedText.length < fullText.length && (
                <span className="cursor" />
              )}
            </h2>
            <p className={`mt-3 text-sm sm:text-base md:text-lg text-white font-[Roboto] ` }>
              Inkarp has empowered Indian laboratories and institutions for over four decades by delivering reliable solutions through trusted global partnerships.
            </p>
            <button className={`mt-4 bg-red-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow transition ${visible ? "bounce-right" : "opacity-0"}`}>
              Know More
            </button>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div
          className={`w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 ${
            visible ? "text-focus-in" : "opacity-0"
          }`}
        >
          <StatCard icon="👨‍🔬" title="5000+" subtitle="Customers" />
          <StatCard icon="🤝" title="50+" subtitle="Principals" />
          <StatCard icon="🌐" title="13+" subtitle="Branches" />
          <StatCard icon="🏆" title="10" subtitle="Awards" />
        </div>
      </div>
    </section>
  );
}

// Reusable card component
function StatCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl flex flex-col items-center text-center shadow-md transition">
      <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base mt-1">{subtitle}</p>
    </div>
  );
}
