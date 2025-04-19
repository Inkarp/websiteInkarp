import Team from "../Team/Team";
import Mission from "./UI/Mission";

const OurStory = () => {
    return (
        <>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img
                    className="object-cover w-full h-full max-w-2xl rounded-md"
                    src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="glasses"
                />
            </div>
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-4xl font-semibold tracking-wide text-gray-800 dark:text-white">
                        About us
                    </h1>
                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                    39 Years & Counting...
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        At Inkarp, we are committed to retaining our prominent position in the scientific instrument market through world class instrument supply and after-sale support.

                        Since our inception in 1985, it has given us great pleasure to be recognized as a preferred supplier of instruments and services across a diverse array of markets in the country.

                        We have a strong direct presence in India, with our headquarters in Hyderabad and a network of branch offices spread around the country.

                        We ensure our customers receive ongoing support for many years because of our long-standing relationships with major manufacturers (Principals) worldwide. At the heart of our organization is a competent and dedicated team that is vital in our business's success.
                    </p>
                   
                </div>
            </div>
        
        </div>
        <Mission />
        <Team />
        </>
    );
};

export default OurStory;