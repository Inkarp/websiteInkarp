import React, { useState, useEffect } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <div className="flex bg-black text-white justify-center items-center h-80 w-[90%] shadow-full mt-8 mx-auto rounded-lg lining-2">
                <img src='inkarp old.svg' className='h-75 ' />
            </div>
            <div className="p-6 bg-gray-50 min-h-screen mt-5 w-[95%] mx-auto rounded-lg ">
                <h1 className="text-3xl font-bold mb-6">Blogs</h1>

                {/* Grid of blog cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            <figure>
                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="w-[402px] h-[226px] object-cover rounded-t-lg"
                            />
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{blog.title}</h2>
                                <p className="text-sm text-gray-500 mb-1">
                                    {new Date(blog.date).toLocaleDateString()} — {blog.category}
                                </p>
                                <p className="text-sm text-gray-700 line-clamp-3">{blog.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for full blog details */}
                {selectedBlog && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
                            <button
                                onClick={() => setSelectedBlog(null)}
                                className="text-red-600 float-right text-sm font-medium mb-4 hover:underline"
                            >
                                Close
                            </button>
                            <img
                                src={selectedBlog.imageUrl}
                                alt={selectedBlog.title}
                                className="w-full h-64 object-cover rounded mb-4"
                            />
                            <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(selectedBlog.date).toLocaleDateString()} — {selectedBlog.category}
                            </p>
                            <div className="text-gray-800 whitespace-pre-line">{selectedBlog.content}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Blogs;
