import React from "react";

const cards = [
  {
    title: "What Zombies Can Teach You About Food",
    category: "Reliable Schemas",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?",
    image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Old School Art",
    category: "Client-based Adoption",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.",
    image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "5 Things To Do About Rain",
    category: "Intellectual Capital",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.",
    image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
];

export default function InsightGrid() {
  return (
    <section className="flex flex-col bg-white justify-center max-w-6xl  px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl font-[MaxOT]">
          Catch Us at Blogs
        </h2>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black text-red-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          Go to Blogs -&gt;
        </a>
      </div>

      <div className="flex flex-wrap -mx-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
          >
            <img
              src={card.image}
              alt="Card img"
              className="object-cover object-center w-full h-48"
            />
            <div className="flex flex-grow">
              <div
                className="triangle"
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "0 20px 20px 0",
                  borderColor: "transparent black transparent transparent",
                }}
              ></div>
              <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                <div>
                  <a
                    href="#"
                    className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >
                    {card.category}
                  </a>
                  <a
                    href="#"
                    className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                  >
                    {card.title}
                  </a>
                  <p className="mb-4">{card.description}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block pb-1 mt-2 text-base font-black text-red-600 uppercase border-b border-transparent hover:border-blue-600"
                  >
                    Read More -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
