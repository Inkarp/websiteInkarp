import React from "react";

export default function DroppingText() {
  return (
    <div className="w-auto flex items-center justify-center overflow-hidden relative">
      {/* Inline Keyframe Styles */}
      <style>{`
        @keyframes roll {
          0% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(-25deg);
          }
          3% {
            opacity: 1;
            transform: rotate(0deg);
          }
          5% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
          }
          20% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0deg);
          }
          27% {
            font-size: 0px;
            opacity: 0.5;
            margin-left: 20px;
            margin-top: 100px;
          }
          100% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(15deg);
          }
        }

        @keyframes roll2 {
          0% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(-25deg);
          }
          3% {
            opacity: 1;
            transform: rotate(0deg);
          }
          5% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
          }
          30% {
            font-size: inherit;
            opacity: 1;
            margin-left: 0px;
            margin-top: 0px;
            transform: rotate(0deg);
          }
          37% {
            font-size: 1500px;
            opacity: 0;
            margin-left: -1000px;
            margin-top: -800px;
          }
          100% {
            font-size: 0px;
            opacity: 0;
            margin-left: -30px;
            margin-top: 0px;
            transform: rotate(15deg);
          }
        }

        .dropping-texts > div {
          font-size: 0px;
          opacity: 0;
          margin-left: -30px;
          position: absolute;
          font-weight: 300;
          box-shadow: 0px 60px 25px -20px rgba(0,0,0,0.5);
        }

        .dropping-texts > div:nth-child(1) {
          animation: roll 7s linear infinite 0s;
        }
        .dropping-texts > div:nth-child(2) {
          animation: roll 7s linear infinite 1s;
        }
        .dropping-texts > div:nth-child(3) {
          animation: roll 7s linear infinite 2s;
        }
        .dropping-texts > div:nth-child(4) {
          animation: roll 7s linear infinite 3s;
        }
        .dropping-texts > div:nth-child(5) {
          animation: roll 7s linear infinite 4s;
        }
        .dropping-texts > div:nth-child(6) {
          animation: roll2 7s linear infinite 5s;
        }
      `}</style>

      <h1 className="text-white mt-10 px-5 text-2xl sm:text-4xl font-semibold z-10 relative">
        INKARP stands for{" "}
        <span className="dropping-texts text-red-500 inline-block w-[240px] text-left align-middle h-[40px] relative">
          <div>Innovation</div>
          <div>Nurturing Relationships</div>
          <div>Knowledge</div>
          <div>Accountability</div>
          <div>Reliability</div>
          <div>Passion</div>
        </span>
      </h1>
    </div>
  );
}
