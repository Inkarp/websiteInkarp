import React, { useState } from "react";

const productData = [
    {
        name: "Hei-VAP HL G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP HL G3",
        description: "High-performance rotary evaporator for demanding lab applications.",
        details: {
            Capacity: "100 ml",
            Voltage: "220V",
            Weight: "1.5 kg",
        },
        link: "/products/hei-vap-hl-g3"
    },
    {
        name: "Vac Valve Control",
        image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-control.webp",
        heading: "Hei-VAC Valve Control",
        description: "Automated vacuum control for efficient solvent evaporation.",
        details: {
            Capacity: "200 ml",
            Voltage: "110V",
            Weight: "2.0 kg",
        },
        link: "/products/valve-control"
    },
    {
        name: "Vario Station",
        image: "https://www.inkarp.co.in/assets/images/products/hei-vac-vario-station.webp",
        heading: "Hei-VAC Vario Station",
        description: "Vacuum station with intelligent control for varied applications.",
        details: {
            Capacity: "300 ml",
            Voltage: "230V",
            Weight: "2.5 kg",
        },
        link: "/products/vario-station"
    },
    {
        name: "Valve Tec",
        image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-tec.webp",
        heading: "Hei-VAC Valve Tec",
        description: "Precision valve-based vacuum regulation system.",
        details: {
            Capacity: "150 ml",
            Voltage: "220V",
            Weight: "1.8 kg",
        },
        link: "/products/valve-tec"
    },
    {
        name: "Rotavap Basic",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Rotavap Basic",
        description: "Basic rotary evaporator designed for routine applications.",
        details: {
            Capacity: "250 ml",
            Voltage: "110V",
            Weight: "2.3 kg",
        },
        link: "/products/rotavap-basic"
    },
    {
        name: "Advanced G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP Advanced G3",
        description: "Top-end rotary evaporator with smart interface and features.",
        details: {
            Capacity: "500 ml",
            Voltage: "220V",
            Weight: "3.0 kg",
        },
        link: "/products/advanced-g3"
    },
    {
        name: "Advanced G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP Advanced G3",
        description: "Top-end rotary evaporator with smart interface and features.",
        details: {
            Capacity: "500 ml",
            Voltage: "220V",
            Weight: "3.0 kg",
        },
        link: "/products/advanced-g3"
    },
    {
        name: "Advanced G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP Advanced G3",
        description: "Top-end rotary evaporator with smart interface and features.",
        details: {
            Capacity: "500 ml",
            Voltage: "220V",
            Weight: "3.0 kg",
        },
        link: "/products/advanced-g3"
    },
    {
        name: "Advanced G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP Advanced G3",
        description: "Top-end rotary evaporator with smart interface and features.",
        details: {
            Capacity: "500 ml",
            Voltage: "220V",
            Weight: "3.0 kg",
        },
        link: "/products/advanced-g3"
    },
    {
        name: "Advanced G3",
        image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
        heading: "Hei-VAP Advanced G3",
        description: "Top-end rotary evaporator with smart interface and features.",
        details: {
            Capacity: "500 ml",
            Voltage: "220V",
            Weight: "3.0 kg",
        },
        link: "/products/advanced-g3"
    },
];

export default function PickProduct() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    const maxVisible = 5;

    const handlePrev = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const handleNext = () => {
        if (startIndex < productData.length - maxVisible) setStartIndex(startIndex + 1);
    };

    const visibleTabs = productData.slice(startIndex, startIndex + maxVisible);
    const selectedProduct = productData[selectedIndex];

    return (
        <div className=" w-[96%] mx-auto py-6 flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
            <h1 className="font-bold text-white text-3xl font-[MaxOT]">Pick a Product to Start</h1>
            <p className="font-[Roboto] text-red-600">Our professional and well-trained staff is ready to assist.</p>
            </div>

            {/* Product Selector Row */}
            <div className="w-[60%] bg-gray-200 text-white h-[50px] rounded-full flex items-center justify-between px-4 shadow relative">
                {/* Custom Left Arrow */}
                <div
                    onClick={handlePrev}
                    className={`scroll-arrow left-arrow text-white text-2xl cursor-pointer ${startIndex === 0 ? "opacity-30 pointer-events-none" : ""}`}
                >
                    ◀
                </div>

                {/* Visible Product Tabs */}
                <div className="flex-1 flex justify-center gap-2 overflow-hidden px-2">
                    {visibleTabs.map((item, idx) => {
                        const actualIndex = startIndex + idx;
                        const isSelected = actualIndex === selectedIndex;
                        return (
                            <button
                                key={actualIndex}
                                onClick={() => setSelectedIndex(actualIndex)}
                                className={`px-4 py-2 rounded-full text-sm font-[Roboto] transition ${isSelected ? "text-red-500 font-bold" : "text-black font-bold"
                                    }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>

                {/* Custom Right Arrow */}
                <div
                    onClick={handleNext}
                    className={`scroll-arrow right-arrow text-white text-2xl cursor-pointer ${startIndex + maxVisible >= productData.length ? "opacity-30 pointer-events-none" : ""
                        }`}
                >
                    ▶
                </div>
                {/* <div
                    onClick={handleNext}
                    className={`cursor-pointer p-2 rounded-full bg-white shadow ${startIndex + maxVisible >= productData.length ? "opacity-30 pointer-events-none" : ""
                        }`}
                >
                    <ChevronRight className="text-red-500 w-6 h-6" />
                </div> */}
            </div>

            {/* Two-column layout */}
            <div className="w-[70%] mx-auto flex flex-col md:flex-row bg-gray-100 border border-red-500 p-6 space-y-6 md:space-y-0 md:space-x-6">
                {/* Left - Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center ">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className=" max-w-xs object-fit bg-red-50"
                    />
                </div>

                {/* Right - Details */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 font-[MaxOT]">{selectedProduct.heading}</h2>
                    <p className="font-[Roboto] text-md text-gray-700">{selectedProduct.description}</p>
                    <table className="table-auto w-full text-sm text-left border border-red-500 rounded-lg">
                        <tbody>
                            {Object.entries(selectedProduct.details).map(([key, value]) => (
                                <tr key={key} className="border-t border-red-200">
                                    <td className="px-4 py-2 font-medium font-[Roboto]">{key}</td>
                                    <td className="px-4 py-2 font-[Roboto]">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <a
                        href={selectedProduct.link}
                        className="inline-block mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-[Roboto]"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </div>
    );
}
