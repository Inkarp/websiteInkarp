import React, { useEffect, useState } from 'react';

const Verticals = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/verticals');
            const result = await response.json();
            setData(result); 
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Verticals</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                                {/* <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" /> */}
                                <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-lg font-bold mt-2">Price: ₹{item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Verticals;
