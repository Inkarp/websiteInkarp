import { motion } from "framer-motion";
function Clients() {
  return (
    <section className="bg-white dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto ">
      <div className="container px-4 py-10 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Trusted By
        </h2>

        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left Side - 3 Images with animation from left */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              <img src="inkarp old.svg" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" className="w-32 sm:w-36 md:w-40 h-auto" />
            </div>
            
          
            <div className="flex flex-wrap justify-center gap-6">
              <img src="inkarp old.svg" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" className="w-32 sm:w-36 md:w-40 h-auto" />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Clients;