import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const Mission = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-indigo-100 text-indigo-600">
            <Eye size={40} strokeWidth={2.5} />
          </div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h4>
          <p className="text-gray-600 leading-relaxed">
            To be a vital partner for scientists in India, providing top-quality research instruments that drive discoveries and innovation.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 text-green-600">
            <Target size={40} strokeWidth={2.5} />
          </div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h4>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to offer the best research products and support to scientists, ensuring reliable performance and seamless integration.
            We connect global brands with Indian researchers, fostering scientific progress through honest and straightforward service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
