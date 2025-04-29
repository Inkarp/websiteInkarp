import React, { useEffect } from "react";

const characters = "Principles".split("");

const PrinciplesNew = () => {
  useEffect(() => {
    const style = document.createElement("style");
    let keyframes = "";

    for (let i = 1; i <= characters.length; i++) {
      keyframes += `
        @keyframes spin${i} {
          0% {
            transform: rotate(${i * 17}deg);
            font-variation-settings: "wdth" 50;
          }
          20% { font-variation-settings: "wdth" 145; }
          30% { font-variation-settings: "wdth" 155; }
          50% { font-variation-settings: "wdth" 250; }
          70% { font-variation-settings: "wdth" 155; }
          80% { font-variation-settings: "wdth" 145; }
          100% {
            transform: rotate(${i * 17 + 360}deg);
            font-variation-settings: "wdth" 50;
          }
        }

        .spin${i} {
          animation: spin${i} 10s linear infinite;
        }
      `;
    }

    style.innerHTML = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-[600px] bg-[#004e58] flex justify-center items-center overflow-hidden">
      <div className="relative">
        {characters.map((char, idx) => (
          <span
            key={idx}
            className={`absolute text-[28px] text-[#f67d7e] text-center spin${idx + 1}`}
            style={{
              fontFamily: "Dusseldot",
              top: "20px",
              width: "40px",
              height: "120px",
              transformOrigin: "bottom center",
              textShadow: "-3px 3px 6px rgba(150, 150, 150, 1)",
              transform: `rotate(${(idx + 1) * 17}deg)`
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

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
