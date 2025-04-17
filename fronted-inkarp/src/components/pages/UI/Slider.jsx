function Slider() {
    return (
      <div className="overflow-hidden w-full h-20 flex items-center">
        <div className="flex animate-slide gap-16 text-6xl font-extrabold whitespace-nowrap">
          <div>Scientific Excellence +</div>
          <div>Innovative Solutions +</div>
          <div>Global Research +</div>
          <div>Cutting-Edge Technology +</div>
          <div>Unmatched Expertise +</div>
          <div>Scientific Excellence +</div> {/* Repeated for seamless sliding */}
          <div>Innovative Solutions +</div>
          <div>Global Research +</div>
          <div>Cutting-Edge Technology +</div>
          <div>Unmatched Expertise +</div>
        </div>
        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-slide {
              animation: slide 40s linear infinite; /* Updated duration */
            }
          `}
        </style>
      </div>
    );
  }
  
  export default Slider;