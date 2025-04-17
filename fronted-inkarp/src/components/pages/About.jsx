import { MoveRight } from "lucide-react";

function About() {
  return (
    <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-20 mt-5 lg:flex-row lg:items-center">
        <div className="flex items-center justify-center w-full h-[100] lg:w-1/2">
        <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-md"
            src="inkarp old.svg"
            alt="Inkarp Overview"
        />
    </div>
    <div className="w-full lg:w-1/2">
    <button className="hover:bg-red-300 rounded-lg px-2 py-2 bg-red-100 text-red-500">About Inkarp</button>
    
        <div className="lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">
            One Stop Solution
            for all research needs
            </h2>
            <p className="mt-4 text-gray-700 text-md leading-relaxed">
            Our mission is to become a one stop solution for all research solutions, we are developing a holistic platform that integrates the supply of high-quality products, installation support, and reliable after-sales support. We are currently focusing on providing technologically advanced after-sales support with the best-in-class trained engineers to guarantee that your research requirements are dealt on time. As Inkarp, we are doing all we can to analyse the evolution of science and enable our customers in simplifying their application requirements.
            </p>    
        </div>
        <button className="hover:bg-red-300 rounded-lg px-6 py-4 bg-red-800 text-white font-bold flex items-center gap-2">Read more<MoveRight  /></button>
    </div>

    
</div>
  );
}

export default About;