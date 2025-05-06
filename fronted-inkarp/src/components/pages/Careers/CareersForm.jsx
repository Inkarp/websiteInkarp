import React, { useState } from "react";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className=" flex items-center justify-center px-4 py-10 bg-gradient-to-br from-orange-100 via-white to-indigo-100 relative overflow-hidden">
      {/* Decorative SVG blobs in the background */}
      <div className="absolute w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl -top-20 -left-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl -bottom-20 -right-20 z-0"></div>

      <div className="relative z-10 w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        {/* Tagline */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Join the House of Inkarp
          </h2>
          <p className="text-gray-600 mt-2">
            Shape your career with innovation, teamwork, and growth.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-md px-4 py-2 w-full"
            />
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-md px-4 py-2 w-full"
            />
            <select
              name="role"
              required
              onChange={handleChange}
              className="border rounded-md px-4 py-2 w-full text-gray-700"
            >
              <option value="">Select Role</option>
              <option value="Sales">Sales</option>
              <option value="Service">Service</option>
              <option value="Marketing">Marketing</option>
              <option value="Technical">Technical</option>
              <option value="Operations">Operations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume (PDF or DOCX)
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              className="border rounded-md px-4 py-2 w-full"
            />
          </div>

          <textarea
            name="message"
            rows="4"
            onChange={handleChange}
            placeholder="Additional Message (optional)"
            className="border rounded-md px-4 py-2 w-full"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
