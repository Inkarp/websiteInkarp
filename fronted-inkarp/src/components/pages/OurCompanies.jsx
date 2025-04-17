import { motion } from "framer-motion";

function OurCompanies() {
  return (
    <section className="bg-white dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto mt-10">
      <div className="container px-2 py-10 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Our Group Companies
        </h2>

        <div className="max-w-screen-xl mx-auto mt-10 flex justify-center items-start gap-10">
          {/* Left Side - 3 Images with animation from left */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ x: -100, opacity: 2 }}
            animate={{ x: 0, opacity: 5 }}
            transition={{ duration: 10 }}
          >
            <div className="flex gap-6">
              <img src="inkarp old.svg" className="w-40 h-auto" />
              <img src="inkarp old.svg" className="w-40 h-auto" />
              <img src="inkarp old.svg" className="w-40 h-auto" />
            </div>
            <div className="font-semibold text-xl text-red-800 mt-3">
              100% Owned Subsidiaries
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-px h-36 bg-red-500" />

          {/* Right Side - 2 Images with animation from right */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ x: 100, opacity: 5 }}
            animate={{ x: 0, opacity: 10 }}
            transition={{ duration: 10 }}
          >
            <div className="flex gap-6">
              <img src="inkarp old.svg" className="w-40 h-auto" />
              <img src="inkarp old.svg" className="w-40 h-auto" />
            </div>
            <div className="font-semibold text-xl text-red-800 mt-3">
              Our Joint Ventures
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurCompanies;
