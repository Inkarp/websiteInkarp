import React, { useReducer, useEffect, useRef } from "react";

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?auto=format&fit=crop&w=800&q=80",
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) return;

    const el = ref.current;
    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const handleMouseMove = (e) => {
      if (!el) return;
      if (!state.rect) state.rect = el.getBoundingClientRect();

      state.mouseX = e.clientX;
      state.mouseY = e.clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [active]);

  return ref;
}

const initialState = { slideIndex: 0 };

function reducer(state, event) {
  if (event.type === "NEXT") {
    return { ...state, slideIndex: (state.slideIndex + 1) % slides.length };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  return state;
}

function Slide({ slide, offset }) {
  const active = offset === 0;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      data-active={active || undefined}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        transform: `perspective(1000px) translateX(calc(100% * var(--offset))) rotateY(calc(-45deg * var(--dir)))`,
        opacity: active ? 1 : 0.7,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 grid place-items-center transition-transform duration-500"
    >
      {/* Background */}
      <div
        className="fixed top-0 left-[-10%] right-[-10%] bottom-0 bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: `url('${slide.image}')`,
          opacity: active ? 0.2 : 0,
          transform: active ? "none" : "translateX(calc(10% * var(--dir)))",
          transition: "opacity 0.3s linear, transform 0.3s ease-in-out",
        }}
      />

      {/* Slide */}
      <div
        className="w-[30vw] h-[40vw] bg-cover bg-center grid content-center"
        style={{
          backgroundImage: `url('${slide.image}')`,
          transition: "transform 0.5s ease-in-out",
        }}
        onMouseEnter={(e) => {
          if (active) {
            e.currentTarget.style.transition = "none";
            e.currentTarget.style.transform = `perspective(1000px) rotateY(calc(var(--px) * 45deg)) rotateX(calc(var(--py) * -45deg))`;
          }
        }}
        onMouseLeave={(e) => {
          if (active) {
            e.currentTarget.style.transition = "transform 0.5s ease-in-out";
            e.currentTarget.style.transform = `perspective(1000px)`;
          }
        }}
      >
        <div
          className="text-center text-white px-4"
          style={{
            transform: "translateZ(2rem)",
            textShadow: "0 0.1rem 1rem #000",
            opacity: active ? 1 : 0,
            transition: "opacity 0.3s linear",
          }}
        >
          <h2 className="uppercase tracking-widest text-2xl font-light">{slide.title}</h2>
          <h3 className="uppercase tracking-wider text-xl font-light">
            — {slide.subtitle}
          </h3>
          <p className="text-sm tracking-widest">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Carousel() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden relative grid">
      <button
        onClick={() => dispatch({ type: "PREV" })}
        className="absolute top-1/3 left-2 text-5xl z-10 opacity-70 hover:opacity-100"
      >
        ‹
      </button>

      <button
        onClick={() => dispatch({ type: "NEXT" })}
        className="absolute top-1/3 right-2 text-5xl z-10 opacity-70 hover:opacity-100"
      >
        ›
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        const offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
    </div>
  );
}
