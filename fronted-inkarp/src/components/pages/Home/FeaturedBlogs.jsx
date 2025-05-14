import React, { useState } from "react";
import { CalendarDays, User2, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Enabling Innovation in Modern Hospital Labs",
    date: "May 10, 2025",
    author: "Inkarp Editorial",
    category: "Life Sciences",
    image: "https://img.freepik.com/free-photo/black-woman-doctor-working-laboratory_23-2148743605.jpg",
    content:
      "Explore how cutting-edge lab instruments are transforming patient-centric diagnostics in hospital environments.",
  },
  {
    id: 2,
    title: "New Approaches to Anatomy & Imaging Workflows",
    date: "May 9, 2025",
    author: "Inkarp Team",
    category: "Medical Research",
    image: "https://img.freepik.com/free-photo/front-view-scientist-holding-test-tube_23-2148773774.jpg",
    content:
      "Discover efficient imaging and tissue analysis workflows using Inkarp’s advanced microscopy solutions.",
  },
  {
    id: 3,
    title: "Essential Lab Manual for Specimen Processing",
    date: "May 8, 2025",
    author: "Inkarp Team",
    category: "Clinical Labs",
    image: "https://img.freepik.com/free-photo/close-up-hands-holding-test-tube_23-2148773817.jpg",
    content:
      "Download a free lab manual to streamline contemporary specimen testing protocols using Inkarp systems.",
  },
  {
    id: 4,
    title: "How Automation Drives Precision in Pharma QA",
    date: "May 7, 2025",
    author: "Inkarp Insights",
    category: "Pharmaceutical",
    image: "https://img.freepik.com/free-photo/close-up-hands-holding-test-tube_23-2148773817.jpg",
    content:
      "See how pharma teams are integrating automation tools like Mya 4 and Hei-VAP for regulatory-ready testing.",
  },
];

export default function FeaturedBlogs() {
  const [featured, setFeatured] = useState(articles[0]);

  return (
    <section className="bg-white py-16 w-[96%] mx-auto">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold border px-4 py-1 rounded-full inline-block mb-3 text-[#be0010] border-[#be0010]">
          WHAT WE DO
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">
          Latest insights from our lab partners <br /> and scientific specialists
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Featured */}
          <div className="bg-white p-6 rounded-3xl flex flex-col lg:col-span-2 shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={featured.image}
                alt="featured"
                className="rounded-3xl w-full md:w-[40%] object-cover h-[320px]"
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  {featured.date} /{" "}
                  <span className="text-[#be0010] font-medium">{featured.category}</span>
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{featured.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{featured.content}</p>
                <button className="px-6 py-3 bg-[#be0010] text-white text-sm font-bold rounded-full w-fit flex items-center gap-2 hover:bg-red-700 transition">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right List */}
          <div className="flex flex-col gap-8">
            {articles.map((item) => (
              <div
                key={item.id}
                onClick={() => setFeatured(item)}
                className="flex items-center gap-4 border-b pb-4 cursor-pointer hover:opacity-90 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User2 size={14} />
                      BY {item.author}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
