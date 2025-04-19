import { MoveRight } from "lucide-react";

function About() {
  return (
    <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:space-y-0 lg:h-[36rem] lg:py-20 mt-5 lg:flex-row lg:items-center">
      
      {/* Left: Image Section */}
      <div className="flex items-center justify-center w-full min-h-[300px] lg:w-3/4">
        <img
          className="object-cover w-full h-full max-w-3xl rounded-lg shadow-md"
          src="inkarp old.svg"
          alt="Inkarp Overview"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-2/5">
        <button className="bg-red-300 shadow-xl  rounded-lg px-3 py-2 text-sm font-semibold text-red-800">
          About Inkarp
        </button>

        <div className="lg:max-w-lg mt-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#be0010] sm:text-4xl">
            One Stop Solution
            <br />
            for all research needs
          </h2>

          <p className="mt-4 text-gray-700 text-md leading-relaxed text-[16px] font-bold">
            Our mission is to become a one stop solution for all research solutions, we are developing a holistic platform that integrates the supply of high-quality products, installation support, and reliable after-sales support. We are currently focusing on providing technologically advanced after-sales support with the best-in-class trained engineers to guarantee that your research requirements are dealt on time. As Inkarp, we are doing all we can to analyse the evolution of science and enable our customers in simplifying their application requirements.
          </p>

          {/* Read More Button */}
          <button className="mt-2 bg-red-800 text-white font-bold px-6 py-4 rounded-lg flex items-center gap-2 transition-transform duration-300 hover:translate-x-2 hover:bg-red-700">
            Read more <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
