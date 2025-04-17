function About() {
  return (
    <div className="container flex flex-col-reverse px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-20 lg:flex-row lg:items-center">
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
            <h2 className="text-3xl font-bold tracking-tight text-red-700 sm:text-4xl">
                39 Years of Pioneering the Scientific Frontier
            </h2>
            <p className="mt-4 text-gray-700 text-md leading-relaxed">
                Inkarp, established in 1985, honors 39 years of dedication to the scientific community in India.
                Our journey continues to be driven by the pursuit of excellence in offering cutting-edge scientific research instruments.
                <br /><br />
                Our mission is to become a one-stop solution for all research needs by delivering top-quality products, installation support, and dependable after-sales service.
                With our holistic platform and a team of highly trained engineers, we ensure customer satisfaction and timely support.
                <br /><br />
                At Inkarp, we continue to analyze the evolution of science and empower our customers to simplify complex application requirements.
            </p>
            
        </div>
        <button className="hover:bg-red-300 rounded-lg px-4 py-4 bg-gray-100 text-black">Read more</button>
    </div>

    
</div>
  );
}

export default About;