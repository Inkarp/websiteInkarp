import { motion } from "framer-motion";
import { MotionDiv } from "../../utils/MotionWrapper";

function OurPrinciples() {
  const images = [
    "zeiss.png",
    "bandelin.png",
    "inkarp old.svg",
  ];

  const imageNames = [
    "Zeiss",
    "Bandelin",
    "Inkarp",
  ];

  return (
    <section className="dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto mt-10">
      <div className="container px-4 py-10 mx-auto text-center">
        <button className="bg-red-100 text-red-800 font-semibold rounded-full px-4 py-1 mb-4 shadow-sm">
          Our Principles
        </button>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10" style={{ fontFamily: 'MaxOT' }}>
          Global Partnerships with Leading Brands
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {Array.from({ length: 46 }).map((_, index) => {
            const imageIndex = index % images.length;
            return (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={images[imageIndex]}
                  alt={`${imageNames[imageIndex]} Logo`}
                  className="w-40 h-auto mx-auto rounded-lg shadow-md bg-white p-2"
                />
              </MotionDiv>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default OurPrinciples;
