import React from "react";
import { CalendarDays, User2, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Hospital Labs Focused On Patients Begin Here.",
    date: "November 04, 2024",
    author: "XLEPBPM",
    category: "Chemistry",
    image:
      "https://img.freepik.com/free-photo/black-woman-doctor-working-laboratory_23-2148743605.jpg",
    content:
      "Most laboratory is a facility that provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed.",
  },
  {
    id: 2,
    title: "Exploring Anatomy Methods In The Lab",
    date: "November 04, 2024",
    author: "XLEPBPM",
    image:
      "https://img.freepik.com/free-photo/front-view-scientist-holding-test-tube_23-2148773774.jpg",
  },
  {
    id: 3,
    title: "A Laboratory Manual For Contemporary Specimen...",
    date: "November 04, 2024",
    author: "XLEPBPM",
    image:
      "https://img.freepik.com/free-photo/close-up-hands-holding-test-tube_23-2148773817.jpg",
  },
];

export default function FeaturedBlogs() {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="bg-[#eef4ff] px-6 py-16 w-full">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold border px-4 py-1 rounded-full inline-block mb-3">
          WHAT WE DO
        </p>
        <h2 className="text-4xl font-bold text-slate-900 mb-10">
          Interesting articles updated <br /> every daily
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Featured */}
          <div className="bg-white p-6 rounded-3xl flex flex-col lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={featured.image}
                alt="featured"
                className="rounded-3xl w-full md:w-[40%] object-cover h-[320px]"
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                  {featured.date} /{" "}
                  <span className="text-blue-600 font-medium">
                    {featured.category}
                  </span>
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {featured.content}
                </p>
                <button className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full w-fit flex items-center gap-2 hover:bg-blue-700 transition">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right List */}
          <div className="flex flex-col gap-8">
            {others.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
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
                  <h4 className="text-sm font-semibold text-slate-800">
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
