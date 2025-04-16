import React, { useState, useEffect } from 'react';

const Careers = () => {
    const dummyJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            location: "New York",
            description: "Work with React, Tailwind, and modern frontend stack."
        },
        {
            id: 2,
            title: "Backend Engineer",
            location: "San Francisco",
            description: "Develop robust APIs and backend systems with Node.js."
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Remote",
            description: "Design intuitive interfaces and experiences."
        },
        {
            id: 4,
            title: "DevOps Engineer",
            location: "New York",
            description: "Manage CI/CD pipelines and cloud infrastructure."
        }
    ];

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [locationFilter, setLocationFilter] = useState("");

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setJobs(dummyJobs);
            setFilteredJobs(dummyJobs);
        }, 500);
    }, []);

    useEffect(() => {
        if (!locationFilter) {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(
                jobs.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()))
            );
        }
    }, [locationFilter, jobs]);
    return (
        <div className="flex min-h-screen p-6 gap-6 bg-gray-50">
            {/* Sidebar Filter */}
            <aside className="w-64 p-4 bg-white rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-4">Filter by Location</h2>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                    type="text"
                    id="location"
                    placeholder="Enter location..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </aside>

            {/* Job Cards */}
            <div className="flex-1 p-4 bg-white rounded-2xl shadow space-y-4 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4">Open Positions</h1>
                {filteredJobs.map((job) => (
                    <div key={job.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">Location: {job.location}</p>
                        <p className="text-gray-700">{job.description}</p>
                    </div>
                ))}
                {filteredJobs.length === 0 && <p className="text-gray-500">No jobs found for this location.</p>}
            </div>
        </div>
    );
};

export default Careers;