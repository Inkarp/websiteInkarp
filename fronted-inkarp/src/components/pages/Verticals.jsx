import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

const verticalsList = [
  "Synthesis and Flow Chemistry",
  "Analytical and Chromatography Solutions",
  "Analytical Chemistry and Weighing",
  "Material Science and Battery",
  "General Laboratory Instrument",
  "Lifesciences",
  "Extrusion and Homogenization",
  "Rheology and Thermal Analysis",
  "Pilot Plants and Automation",
];

const Verticals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [verticalData, setVerticalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bannerImage, setBannerImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // For popup card

  const fetchData = async (index) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${index * 5}`
      );
      const data = await res.json();
      setVerticalData(data.products);
      setBannerImage(data.products?.[0]?.thumbnail || "");
    } catch (err) {
      setVerticalData([]);
      setBannerImage("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeIndex);
  }, [activeIndex]);

  return (
    <>
      {/* Top Banner */}
      <div className="flex bg-white justify-center items-center h-80 shadow-full mt-2 mx-auto rounded-lg overflow-hidden">
        {bannerImage ? (
          <img
            src={bannerImage}
            className="h-full w-full object-contain transition-all duration-500"
            alt="Banner"
          />
        ) : (
          <p className="text-center text-gray-400">No Image Available</p>
        )}
      </div>

      {/* Content Area */}
      <div className="flex min-h-screen bg-white mt-2 w-[98%] mx-auto rounded-lg shadow-lg">
        {/* Sidebar */}
        <aside className="w-[340px] bg-white p-6 flex flex-col items-start space-y-5">
          {verticalsList.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-full shadow-xl cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-red-500 border border-black font-[MaxOT]"
                      : "bg-red-100 text-black border border-[#c7d3e3] text-[#0a2540] font-[Roboto]"
                  }`}
              >
                <span className="text-base font-medium">{item}</span>
                <span
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-[#0a2540] text-white"
                    }`}
                >
                  <ArrowRight size={18} />
                </span>
              </div>
            );
          })}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {verticalsList[activeIndex]}
          </h1>
          {loading ? (
            <div className="text-gray-500 flex items-center justify-center">
              <img
                src="loadingImage.svg"
                className="w-20 h-20 bg-red-100"
                alt="loading"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {verticalData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedProduct(item);
                    setBannerImage(item.thumbnail);
                  }}
                  className="cursor-pointer border rounded-lg shadow-sm p-4 hover:shadow-lg transition bg-white"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h2 className="text-lg font-bold text-red-600">{item.title}</h2>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Brand: {item.brand} | Category: {item.category}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Popup Card Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-xl w-[95%] rounded-lg p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={28} />
            </button>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-600">{selectedProduct.title}</h2>
            <p className="text-gray-700 mt-2">{selectedProduct.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-600">
              <li><strong>Brand:</strong> {selectedProduct.brand}</li>
              <li><strong>Category:</strong> {selectedProduct.category}</li>
              <li><strong>Price:</strong> ${selectedProduct.price}</li>
              <li><strong>Discount:</strong> {selectedProduct.discountPercentage}%</li>
              <li><strong>Rating:</strong> ⭐ {selectedProduct.rating}</li>
              <li><strong>Stock:</strong> {selectedProduct.stock} units</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Verticals;
