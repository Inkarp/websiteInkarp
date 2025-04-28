
import Team from "./Team";
import AboutSupport from "./UI/AboutSupport";
import Clients from "./UI/Clients";
import Images from "./UI/Images";
import Mission from "./UI/Mission";
import NewTeam from "./UI/NewTeam";
import SubBlog from "./UI/SubBlog";

const OurStory = () => {
    return (
        <>
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[36rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full lg:w-[45%] h-[20rem] lg:h-full">
                    <img
                        className="object-cover w-full h-full max-w-2xl rounded-md"
                        src="https://www.inkarp.co.in/assets/images/inkarp-building.png"
                        alt="Laboratory Instruments"
                    />
                </div>
                <div className="w-full lg:w-[50%] mx-auto">
                    <div className="lg:max-w-3xl space-y-5 ">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
                            About Us
                        </h2>
                        <h3 className="text-2xl font-semibold text-red-700 dark:text-red-400 lg:text-3xl">
                            39 Years of Excellence in Scientific Innovation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Since 1985, <span className="font-semibold text-black dark:text-white">Inkarp Instruments</span> has been at the forefront of supplying world-class scientific instruments across India. Our reputation as a trusted partner is built on decades of industry knowledge, reliable service, and lasting customer relationships.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Headquartered in Hyderabad, our robust network of regional branches ensures we deliver consistent, localized support wherever it’s needed. We're proud to represent globally respected manufacturers and provide unmatched after-sales service that stands the test of time.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our strength lies in our people — a passionate, highly skilled team committed to pushing boundaries, delivering value, and earning the trust of every client we serve.
                        </p>
                    </div>
                </div>
            </div>
            {/* <SubBlog /> */}
            <Mission />
            <AboutSupport />
            <Clients />
            {/* <Team /> */}
            <div className="flex justify-center items-center">
            <NewTeam />
            </div>
            <Images />
            <Team />

            <div className="container px-6 py-10 mx-auto flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-red-800 dark:text-red-400">
                    Driving Innovation, Quality, and Customer Satisfaction
                </h2>
                <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-4xl">
                    Our leadership embodies Inkarp’s core values of <span className="text-red-700 font-semibold">integrity</span>, <span className="text-red-700 font-semibold">customer-centricity</span>, and <span className="text-red-700 font-semibold">continuous improvement</span>. Together, they foster a culture of excellence, collaboration, and forward-thinking — ensuring that we stay ahead of the curve and deliver innovative solutions and unmatched service to our partners across industries.
                </p>
            </div>
        </>
    );
};

export default OurStory;
