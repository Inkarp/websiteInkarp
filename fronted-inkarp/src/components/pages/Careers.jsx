import React, { useState, useEffect } from 'react';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [locationFilter, setLocationFilter] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/careers');
                const jsonData = await response.json();
                setJobs(jsonData);
                setFilteredJobs(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!locationFilter) {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(
                jobs.filter(job =>
                    job.location.toLowerCase().includes(locationFilter.toLowerCase())
                )
            );
        }
    }, [locationFilter, jobs]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex gap-6">
            {/* Sidebar Filter */}
            <aside className="w-72 bg-white shadow-xl rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Filter Jobs</h2>
                <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-gray-600">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        placeholder="e.g. New York"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                </div>
            </aside>

            {/* Job Listings */}
            <div className="flex-1 bg-white shadow-xl rounded-2xl p-8 overflow-y-auto custom-scrollbar">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Open Positions</h1>
                {loading ? (
                    <div className="text-center text-gray-500 text-lg">Loading jobs...</div>
                ) : filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredJobs.map((job, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold text-indigo-700 mb-1">{job.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">📍 {job.location}</p>
                                <p className="text-gray-700 text-sm">{job.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 text-lg">No jobs found for this location.</div>
                )}
            </div>

            {/* Optional: Custom Scrollbar Styling */}
            <style>
                {`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(99, 102, 241, 0.5);
                    border-radius: 10px;
                }
                `}
            </style>
        </div>
    );
};

export default Careers;
