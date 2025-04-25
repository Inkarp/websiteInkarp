import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveRight } from "lucide-react";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Only animate once
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col space-y-8 lg:space-y-0 lg:h-[36rem] lg:py-20 mt-5 lg:flex-row lg:items-center">
      
      {/* Left: Image Section */}
      <div
        className="w-full flex justify-center items-center min-h-[300px] sm:min-h-[300px] lg:min-h-[800px]"
        data-aos="zoom-in"
      >
        <img
          className="object-contain w-full max-w-md sm:max-w-2/3 md:max-w-2xl rounded-lg bg-white shadow-md"
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80"
          alt="Inkarp Overview"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-4/5 px-2">
        <button className="text-3xl font-bold text-red-800">
          About Inkarp
        </button>

        <div className="mt-4 lg:max-w-lg">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#be0010]"
            data-aos="fade-up"
          >
            One Stop Solution
            <br />
            for all research needs
          </h2>

          <p
            className="mt-4 text-gray-700 text-[15px] sm:text-[16px] leading-relaxed font-medium text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our mission is to become a one stop solution for all research solutions. We are developing a holistic platform that integrates the supply of high-quality products, installation support, and reliable after-sales support.
            <br className="hidden sm:block" />
            We are currently focusing on providing technologically advanced after-sales support with the best-in-class trained engineers to guarantee that your research requirements are dealt on time.
            <br className="hidden sm:block" />
            As Inkarp, we are doing all we can to analyse the evolution of science and enable our customers in simplifying their application requirements.
          </p>

          <button
            className="mt-4 bg-red-800 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-transform duration-300 hover:translate-x-1 hover:bg-red-700 text-sm sm:text-base"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Read more <MoveRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
