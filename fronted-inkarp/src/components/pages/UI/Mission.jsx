import React from 'react';
import { Eye, Target } from 'lucide-react';

const Mission = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Vision Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center transition-all animate-fadeInUp hover:scale-105 hover:-translate-y-1">
          <div 
            className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full text-white transition-colors duration-300"
            style={{ backgroundColor: '#e0e7ff' }}
          >
            <Eye size={40} strokeWidth={2.5} />
          </div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h4>
          <p className="text-gray-600 leading-relaxed">
            To be a vital partner for scientists in India, providing top-quality research instruments that drive discoveries and innovation.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center transition-all animate-fadeInUp hover:scale-105 hover:-translate-y-1">
          <div 
            className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full text-white transition-colors duration-300"
            style={{ backgroundColor: '#dcfce7' }}
          >
            <Target size={40} strokeWidth={2.5} />
          </div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h4>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to offer the best research products and support to scientists, ensuring reliable performance and seamless integration.
            We connect global brands with Indian researchers, fostering scientific progress through honest and straightforward service.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Mission;
