import { Eye, Target } from 'lucide-react';
import { MotionDiv } from '../../../utils/MotionWrapper';

const Mission = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <MotionDiv
          className="bg-white rounded-xl shadow-xl p-8 text-center transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        >
          <MotionDiv
            className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full text-white"
            style={{ backgroundColor: '#e0e7ff' }}
            whileHover={{ backgroundColor: '#6366f1' }}
            transition={{ duration: 0.4 }}
          >
            <Eye size={40} strokeWidth={2.5} />
          </MotionDiv>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h4>
          <p className="text-gray-600 leading-relaxed">
            To be a vital partner for scientists in India, providing top-quality research instruments that drive discoveries and innovation.
          </p>
        </MotionDiv>

        {/* Mission Card */}
        <MotionDiv
          className="bg-white rounded-xl shadow-xl p-8 text-center transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, type: 'spring', stiffness: 120 }}
        >
          <MotionDiv
            className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full text-white"
            style={{ backgroundColor: '#dcfce7' }}
            whileHover={{ backgroundColor: '#22c55e' }}
            transition={{ duration: 0.4 }}
          >
            <Target size={40} strokeWidth={2.5} />
          </MotionDiv>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h4>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to offer the best research products and support to scientists, ensuring reliable performance and seamless integration.
            We connect global brands with Indian researchers, fostering scientific progress through honest and straightforward service.
          </p>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Mission;
