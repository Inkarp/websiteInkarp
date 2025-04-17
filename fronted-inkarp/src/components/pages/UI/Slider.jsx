function Slider() {
    return (
      <div className="overflow-hidden w-full h-25 flex items-center">
        <div
          className="flex animate-slide gap-16 text-6xl font-extrabold whitespace-nowrap h-full" // Centered text and full height
          style={{
            background: "linear-gradient(180deg, red,black)", // Added linear gradient background
            WebkitBackgroundClip: "text", // Clips the background to the text (useful for gradient text)
            WebkitTextFillColor: "transparent", // Makes the text transparent to show the gradient
          }}
        >
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
                transform: translateX(15%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-slide {
              animation: slide 40s linear infinite; /* Slow and continuous animation */
            }
          `}
        </style>
      </div>
    );
  }
  
  export default Slider;