import React, { useState } from "react";

export default function MagicImage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-screen px-5 flex justify-start items-center  overflow-hidden">
      <div
        className="relative group w-[90vmin] h-[90vmin] overflow-hidden rounded-full bg-center bg-cover transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603976246669-17d36a4ebd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=900')`,
          objectFit: "cover",
          filter: `grayscale(${hovered ? 0 : 1})`,
          WebkitMaskImage: `
            radial-gradient(
              closest-side,
              red calc(50% - 1px),
              transparent 50%
            ),
            radial-gradient(
              closest-side,
              transparent calc(50% - calc(0.5 * (100% + 50%) - 50%) + ${hovered ? 2 : 0} * calc(0.5 * (100% + 50%) - 50%) - 1px),
              red calc(50% - calc(0.5 * (100% + 50%) - 50%) + ${hovered ? 2 : 0} * calc(0.5 * (100% + 50%) - 50%)),
              red calc(${hovered ? 100 : 0}% + ${hovered ? 0 : 1} * 50% - 1px),
              transparent calc(${hovered ? 100 : 0}% + ${hovered ? 0 : 1} * 50%)
            ),
            linear-gradient(
              transparent calc(50% - 4vmin),
              red 0 calc(50% + 4vmin),
              transparent 0
            ),
            linear-gradient(
              90deg,
              transparent calc(50% - 4vmin),
              red 0 calc(50% + 4vmin),
              transparent 0
            ),
            linear-gradient(
              45deg,
              transparent calc(50% - 4vmin),
              red 0 calc(50% + 4vmin),
              transparent 0
            ),
            linear-gradient(
              -45deg,
              transparent calc(50% - 4vmin),
              red 0 calc(50% + 4vmin),
              transparent 0
            )
          `,
          WebkitMaskComposite: "add, intersect, add, add",
          transition: "filter 0.3s ease, -webkit-mask-image 0.3s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      </div>
    </div>
  );
}
