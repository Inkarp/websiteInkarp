import { motion } from "framer-motion";

function OurPrinciples() {
  const images = [
    "zeiss.png",
    "bandelin.png",
    "inkarp old.svg",
  ]
  return (
    <section className=" dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto mt-10">
      <div className="container px-4 py-10 mx-auto text-center">
        <button className="bg-red-100 text-red-800 font-semibold rounded-full px-4 py-1 mb-4 shadow-sm">
          Our Principles
        </button>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Global Partnerships with Leading Brands
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {Array.from({ length: 46 }).map((_, index) => (
            <>
              <motion.img
                key={index}
                src={images[index % images.length]}
                // alt={`Brand ${index + 1}`}
                className="w-40 h-auto mx-auto rounded-lg shadow-md bg-white p-2"
                whileHover={{
                  scale: 1.15,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.95 }}
              />
              {/* <motion.img src="bandelin.png"/> */}
            </>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default OurPrinciples;
