import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Ariana Green',
    title: 'Happy Customer',
    message:
      'I greatly appreciate the communication on the very hard process, what we needed to do in terms of providing good samples.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Hazel Jenkins',
    title: 'Satisfied Client',
    message:
      'I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Dr. Louis Miller',
    title: 'Clinical Partner',
    message:
      'Outstanding collaboration. Inkarp’s team understood our lab needs perfectly and provided fast solutions.',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
];

export default function ClientReviews() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
  ];

  return (
    <section className="bg-[#e9f0ff] py-14 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button className="border border-black text-xs font-semibold px-4 py-1 rounded-full mb-4">
              CLIENT REVIEWS
            </button>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b163f] leading-tight">
              Trusted by thousand of<br />people & companies.
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl text-blue-500 mb-4">“”</div>
              <p className="text-lg text-gray-600 mb-6 font-medium">{review.message}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-black text-md">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
                {/* <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white shadow"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
