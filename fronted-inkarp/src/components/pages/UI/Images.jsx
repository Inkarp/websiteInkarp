import React from "react";

export default function Images() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="group relative flex flex-wrap justify-center items-center gap-8 p-8">
        {/* Image 1 */}
        <img
          src="https://picsum.photos/id/1015/200/200"
          alt="Board of Directors"
          className="masked-img w-[200px] h-[200px] transition-all group-hover:scale-110 group-hover:translate-x-8 group-hover:translate-y-8"
        />
        {/* Image 2 */}
        <img
          src="https://picsum.photos/id/1025/200/200"
          alt="Marketing Team"
          className="masked-img w-[200px] h-[200px] transition-all group-hover:scale-110 group-hover:-translate-x-8 group-hover:translate-y-8"
        />
        {/* Image 3 */}
        <img
          src="https://picsum.photos/id/1035/200/200"
          alt="Sales Team"
          className="masked-img w-[200px] h-[200px] transition-all group-hover:scale-110 group-hover:translate-x-8 group-hover:-translate-y-8"
        />
        {/* Image 4 */}
        <img
          src="https://picsum.photos/id/1045/200/200"
          alt="Service Team"
          className="masked-img w-[200px] h-[200px] transition-all group-hover:scale-110 group-hover:-translate-x-8 group-hover:-translate-y-8"
        />

        {/* Masked Image Effect */}
        <style>{`
          .masked-img {
            --_g: 10%/45% 45% no-repeat conic-gradient(#000 0 0);
            mask:
              left var(--_i, ) top var(--_g),
              bottom var(--_i, ) left var(--_g),
              top var(--_i, ) right var(--_g),
              right var(--_i, ) bottom var(--_g);
            -webkit-mask:
              left var(--_i, ) top var(--_g),
              bottom var(--_i, ) left var(--_g),
              top var(--_i, ) right var(--_g),
              right var(--_i, ) bottom var(--_g);
            filter: grayscale(100%);
            transition: filter 0.3s linear, mask 0.3s linear, -webkit-mask 0.3s linear;
          }
          .group:hover .masked-img {
            --_i: 10%;
            filter: grayscale(0%);
          }
        `}</style>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-700 mt-10">Our Leadership</h1>
    </div>
  );
}
