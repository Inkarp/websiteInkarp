import { MoveRight } from "lucide-react";

function About() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col space-y-8 lg:space-y-0 lg:h-[36rem] lg:py-20 mt-5 lg:flex-row lg:items-center">
      
      {/* Left: Image Section */}
      <div className="w-full flex justify-center items-center min-h-[300px] sm:min-h-[300px] lg:min-h-[500px]">
        <img
          className="object-contain w-full max-w-md sm:max-w-2/3 md:max-w-2xl rounded-lg bg-white shadow-md"
          src="inkarp old.svg"
          alt="Inkarp Overview"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-3/5 px-2">
        <button className="bg-red-300 shadow-lg rounded-md px-4 py-2 text-sm font-semibold text-red-800">
          About Inkarp
        </button>

        <div className="mt-4 lg:max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#be0010]">
            One Stop Solution
            <br />
            for all research needs
          </h2>

          <p className="mt-4 text-gray-700 text-[15px] sm:text-[16px] leading-relaxed font-medium text-justify">
            Our mission is to become a one stop solution for all research solutions. We are developing a holistic platform that integrates the supply of high-quality products, installation support, and reliable after-sales support.
            <br className="hidden sm:block" />
            We are currently focusing on providing technologically advanced after-sales support with the best-in-class trained engineers to guarantee that your research requirements are dealt on time.
            <br className="hidden sm:block" />
            As Inkarp, we are doing all we can to analyse the evolution of science and enable our customers in simplifying their application requirements.
          </p>

          {/* Read More Button */}
          <button className="mt-4 bg-red-800 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 hover:bg-red-700 text-sm sm:text-base">
            Read more <MoveRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
