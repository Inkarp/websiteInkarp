import React, { useEffect } from "react";

const words = [
  { text: "Principles", color: "#f67d7e", number: 50 },
  { text: "Awards", color: "#6ee7b7", number: 10 },
  { text: "Customers", color: "#93c5fd", number: 50000 },
  { text: "Branches", color: "#facc15", number: 12 },
];

const PrinciplesNew = () => {
  useEffect(() => {
    const style = document.createElement("style");
    let keyframes = "";

    words.forEach((word, wordIdx) => {
      for (let i = 0; i < word.text.length; i++) {
        const idx = wordIdx * 20 + i;
        keyframes += `
          @keyframes spin${idx} {
            0% {
              transform: rotate(${i * (360 / word.text.length)}deg) translate(80px) rotate(-${i * (360 / word.text.length)}deg);
            }
            100% {
              transform: rotate(${i * (360 / word.text.length) + 360}deg) translate(80px) rotate(-${i * (360 / word.text.length) + 360}deg);
            }
          }

          .spin${idx} {
            animation: spin${idx} 10s linear infinite;
          }
        `;
      }
    });

    style.innerHTML = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full bg-[#004e58] flex justify-center items-center py-10 space-x-6">
      {words.map((word, wordIdx) => (
        <div key={wordIdx} className="relative w-48 h-48 rounded-full flex items-center justify-center">
          <div className="absolute w-full h-full">
            {word.text.split("").map((char, cidx) => (
              <span
                key={cidx}
                className={`absolute text-[18px] font-extrabold text-center uppercase spin${wordIdx * 20 + cidx}`}
                style={{
                  fontFamily: "Dusseldot",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 -80px",
                  color: word.color,
                  textShadow: "-2px 2px 5px rgba(150, 150, 150, 1)",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-3xl font-extrabold text-white">{word.number}</div>
          </div>
        </div>
      ))}

      {/* Font Face Only */}
      <style>
        {`
          @font-face {
            font-family: "Dusseldot";
            src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/108082/Dusseldot-variable-web.woff2") format("woff2 supports variations"),
                 url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/108082/Dusseldot-variable-web.woff2") format("woff2-variations");
            font-display: swap;
            font-weight: 50 250;
          }
        `}
      </style>
    </div>
  );
};

export default PrinciplesNew;
