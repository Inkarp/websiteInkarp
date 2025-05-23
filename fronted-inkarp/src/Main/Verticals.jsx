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

const productData = [
  {
    vertical: "Laboratory Equipment",
    principal: "Buchi",
    category: "Freeze Dryers",
    products: [
      {
        name: "Lyovapor™ L-250",
        image: "lyovapor-l250.jpg",
        description: "Advanced freeze dryer with infinite-scale sublimation control and continuous drying capabilities.",
        features: [
          "Infinite-Control™ for real-time monitoring",
          "Continuous sublimation with automatic switch between condensers",
          "Touchscreen interface with data logging",
          "Condensation capacity: 12 kg",
          "Ice condenser temperature: -105 °C"
        ],
        specifications: {
          capacity: "12 kg",
          condenserTemperature: "-105°C",
          controlSystem: "Infinite-Control™",
          power: "230V / 50Hz",
          dimensions: "60 x 70 x 90 cm"
        }
      }
    ]
  },
  {
    vertical: "Analytical Instruments",
    principal: "Bruker",
    category: "FT-IR Microscopes",
    products: [
      {
        name: "LUMOS II - FT-IR Microscope",
        image: "lumos-ii.jpg",
        description: "Fully automated FT-IR microscope for quality control and failure analysis.",
        features: [
          "Integrated motorized ATR crystal",
          "Automated stage and focus",
          "High spatial resolution",
          "Suitable for QA/QC and research"
        ],
        specifications: {
          detector: "TE-MCT",
          resolution: "≤ 4 cm⁻¹",
          spectralRange: "4000–600 cm⁻¹",
          stageTravel: "75 x 50 mm",
          software: "OPUS"
        }
      }
    ]
  },
  {
    vertical: "Lab Water Purification",
    principal: "Sartorius",
    category: "Ultrapure Water Systems",
    products: [
      {
        name: "Arium® Mini",
        image: "arium-mini.jpg",
        description: "Compact ultrapure water system for labs with low daily requirements.",
        features: [
          "Produces Type 1 water directly",
          "0.5 – 2 L/min flow rate",
          "Touch-activated screen",
          "Flexible dispensing"
        ],
        specifications: {
          output: "Type 1 ultrapure water",
          flowRate: "0.5 – 2 L/min",
          resistivity: "18.2 MΩ·cm",
          TOC: "<5 ppb",
          footprint: "28 x 33 x 49 cm"
        }
      }
    ]
  },
  {
    vertical: "Pharmaceutical Testing",
    principal: "Sotax",
    category: "Dissolution Testing",
    products: [
      {
        name: "AT Xtend Dissolution Tester",
        image: "at-xtend.jpg",
        description: "Modular dissolution testing system for USP and ASTM compliance.",
        features: [
          "Modular design",
          "Vessel heating and stirring",
          "Automated sampling and cleaning",
          "USP 1, 2, 5, 6 methods supported"
        ],
        specifications: {
          vessels: "6 to 8 positions",
          temperatureControl: "Integrated",
          compliance: "21 CFR Part 11",
          touchscreen: "10” display",
          dimension: "90 x 50 x 45 cm"
        }
      }
    ]
  },
  {
    vertical: "Analytical Instruments",
    principal: "Bruker",
    category: "FT-IR Spectrometers",
    products: [
      {
        name: "VERTEX 80v",
        image: "vertex-80v.jpg",
        description: "High-end vacuum FT-IR spectrometer for ultimate performance.",
        features: [
          "Vacuum optics bench",
          "Ultra-high resolution <0.06 cm⁻¹",
          "Flexible detector and source upgrade options",
          "Step-scan functionality"
        ],
        specifications: {
          resolution: "< 0.06 cm⁻¹",
          optics: "Vacuum-sealed",
          spectralRange: "Far IR to UV",
          accessories: "Multiple beam splitters, ATR, DRIFTS",
          control: "OPUS software"
        }
      }
    ]
  },
  {
    vertical: "General Lab Instruments",
    principal: "IKA",
    category: "Magnetic Stirrers",
    products: [
      {
        name: "IKA RCT Digital",
        image: "ika-rct.jpg",
        description: "Digital magnetic stirrer with precise temperature and speed control.",
        features: [
          "Speed range: 50–1500 rpm",
          "Heating up to 310 °C",
          "LED display for speed & temperature",
          "PT100 temperature sensor support"
        ],
        specifications: {
          stirringCapacity: "20 L (H2O)",
          speed: "50–1500 rpm",
          heatingPower: "600 W",
          plateMaterial: "Aluminum alloy",
          weight: "2.5 kg"
        }
      }
    ]
  },
  {
    vertical: "Biotechnology",
    principal: "Eppendorf",
    category: "Centrifuges",
    products: [
      {
        name: "Centrifuge 5425",
        image: "centrifuge-5425.jpg",
        description: "Compact 24-place centrifuge for molecular biology applications.",
        features: [
          "Max speed: 21,300 × g",
          "Quiet operation",
          "Fast temp ramp-up",
          "User-friendly interface"
        ],
        specifications: {
          capacity: "24 x 1.5/2.0 mL",
          maxRCF: "21,300 × g",
          dimensions: "24 x 35 x 23 cm",
          weight: "13.4 kg",
          power: "230V"
        }
      }
    ]
  },
  {
    vertical: "Environmental Testing",
    principal: "Lovibond",
    category: "Water Analyzers",
    products: [
      {
        name: "MD 600 Photometer",
        image: "md-600.jpg",
        description: "Multi-parameter photometer for water analysis in field & lab.",
        features: [
          "Over 120 methods pre-programmed",
          "Bluetooth connectivity",
          "Waterproof IP68",
          "Data logging"
        ],
        specifications: {
          wavelengthRange: "430 – 660 nm",
          power: "Batteries or adapter",
          dimensions: "225 x 100 x 65 mm",
          weight: "500 g",
          interface: "Bluetooth + USB"
        }
      }
    ]
  },
  {
    vertical: "Food & Beverage",
    principal: "Mettler Toledo",
    category: "Refractometers",
    products: [
      {
        name: "Refracto 30PX",
        image: "refracto-30px.jpg",
        description: "Handheld refractometer for quick Brix and RI measurements.",
        features: [
          "Brix & refractive index",
          "Automatic temperature compensation",
          "Compact, battery-operated",
          "Waterproof (IP65)"
        ],
        specifications: {
          range: "0–85 Brix",
          accuracy: "±0.2 Brix",
          power: "2x AAA batteries",
          weight: "250 g",
          display: "LCD"
        }
      }
    ]
  },
  {
    vertical: "Pharmaceutical",
    principal: "Distek",
    category: "Dissolution Media Preparation",
    products: [
      {
        name: "MediaPrep 820",
        image: "mediaprep-820.jpg",
        description: "Automated media preparation system for dissolution testing.",
        features: [
          "Heats, degasses, and dispenses media",
          "Fast cycle time (less than 15 min)",
          "Touchscreen interface",
          "Pre-programmable methods"
        ],
        specifications: {
          volumeRange: "1–8 L",
          degassing: "Built-in vacuum degassing",
          temperatureControl: "Heated up to 50°C",
          pumpType: "Peristaltic",
          footprint: "65 x 50 x 40 cm"
        }
      }
    ]
  }
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
      <div className="flex bg-white justify-center w-[96%] items-center h-80 shadow-full mt-2 mx-auto rounded-lg overflow-hidden">
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
