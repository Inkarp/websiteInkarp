import React from "react";

const cards = [
  {
    title: "Therapies",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image:
      "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png", // Replace with correct image
  },
  {
    title: "Diagnostics",
    description:
      "Enhancing diagnostic tools for early and accurate disease detection, leading to better treatment outcomes.",
    image:
      "https://static.wixstatic.com/media/88aac0_469cf053f06b46de9ecbcab4e071de7c~mv2.png", // Replace with correct image
  },
];

export default function TherapyDiagnosticsCards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[300px] rounded-[24px] overflow-hidden shadow-lg bg-white"
        >
          {/* Top Section - Black Background */}
          <div className="bg-black text-white p-6 h-[200px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm leading-relaxed">{card.description}</p>
          </div>

          {/* Image Section */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-[220px] object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
