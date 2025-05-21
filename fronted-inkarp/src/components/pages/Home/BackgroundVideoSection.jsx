import React from 'react';

export default function BackgroundVideoSection() {
  return (
    <div className="relative w-[50%] h-[500px] overflow-hidden rounded-[50px] shadow-lg">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="https://video.wixstatic.com/video/11062b_c4a9409cabea4e2eaa4afdda662b7eec/1080p/mp4/file.mp4"
      />

      {/* Poster image as fallback */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none"
        src="https://static.wixstatic.com/media/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg/v1/fill/w_475,h_796,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg"
        alt="Background Poster"
      />

      {/* Optional overlay content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30">
        Your Heading or Content Here
      </div>
    </div>
  );
}
