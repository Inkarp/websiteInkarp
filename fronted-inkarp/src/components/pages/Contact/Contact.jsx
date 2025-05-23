import { Linkedin, Mail, Youtube, MessageCircle, Phone } from "lucide-react";
import React from "react";

function Contact() {
  const branches = [
    {
      name: "Bengaluru",
      address: "Bengaluru, Karnataka",
      phone: "+91 9000000000",
      email: "bengaluru@inkarp.co.in",
      top: "79%", left: "30%",
    },
    {
      name: "Chennai",
      address: "Chennai, Tamil Nadu",
      phone: "+91 9000000001",
      email: "chennai@inkarp.co.in",
      top: "84%", left: "45%",
    },
    {
      name: "Kolkata",
      address: "Kolkata, West Bengal",
      phone: "+91 9000000002",
      email: "kolkata@inkarp.co.in",
      top: "50%", left: "68%",
    },
    {
      name: "Thiruvananthapuram",
      address: "Thiruvananthapuram, Kerala",
      phone: "+91 9000000003",
      email: "trivandrum@inkarp.co.in",
      top: "93%", left: "34%",
    },
    {
      name: "Ahmedabad",
      address: "Ahmedabad, Gujarat",
      phone: "+91 9000000004",
      email: "ahmedabad@inkarp.co.in",
      top: "50%", left: "15%",
    },
    {
      name: "Mumbai",
      address: "Mumbai, Maharashtra",
      phone: "+91 9000000005",
      email: "mumbai@inkarp.co.in",
      top: "63%", left: "20%",
    },
    {
      name: "Delhi",
      address: "Delhi, New Delhi",
      phone: "+91 9000000006",
      email: "delhi@inkarp.co.in",
      top: "33%", left: "36%",
    },
    {
      name: "Visakhapatnam",
      address: "Visakhapatnam, Andhra Pradesh",
      phone: "+91 9000000007",
      email: "vizag@inkarp.co.in",
      top: "68%", left: "55%",
    },
    {
      name: "Pune",
      address: "Pune, Maharashtra",
      phone: "+91 9000000008",
      email: "pune@inkarp.co.in",
      top: "70%", left: "30%",
    },
    {
      name: "Chandigarh",
      address: "Chandigarh",
      phone: "+91 9000000009",
      email: "chandigarh@inkarp.co.in",
      top: "25%", left: "38%",
    },
    {
      name: "Vadodara",
      address: "Vadodara, Gujarat",
      phone: "+91 9000000010",
      email: "vadodara@inkarp.co.in",
      top: "55%", left: "15%",
    },
    {
      name: "Hyderabad",
      address: "Hyderabad, Telangana",
      phone: "+91 9000000010",
      email: "hyderabad@inkarp.co.in",
      top: "65%", left: "40%",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .location-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .location-card {
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .location-wrapper:hover .location-card {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      `}</style>

      <section className=" px-4 md:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {/* Left Text */}
          <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-red-600">13+ Branches Across India</h2>
            <p className="text-gray-700 text-lg">Wherever you are, we’re nearby—ready to support, serve and simplify your scientific journey.</p>
          </div>

          {/* India Map */}
          <div className="relative w-full mt-2 max-w-4xl  h-[800px]  rounded-xl overflow-hidden  z-10">
            <img
              src="IndiaMap.png"
              alt="India Map"
              className="object-contain w-full h-full"
              loading="lazy"
              style={{ filter: "brightness(1.0)" }}
            />

            {branches.map((branch, index) => (
              <div
                key={index}
                className="absolute flex flex-col items-center  location-wrapper"
                style={{
                  top: branch.top,
                  left: branch.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Ping Animation */}
                <div className="relative z-100">
                  <div className="w-4 h-4 bg-red-500 rounded-full location-ping absolute top-0 left-0" />
                  <div className="w-3 h-3 bg-red-700 rounded-full relative " />
                </div>
                <span className="mt-1 text-xs font-semibold text-black bg-white px-2 py-0.5 rounded-md shadow">
                  {branch.name}
                </span>

                {/* Hover Card */}
                <div className="location-card absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white text-black p-4 rounded-lg shadow-2xl z-100">
                  <h2 className="text-lg font-bold">{branch.name}</h2>
                  <p className="text-sm mt-2">{branch.address}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone size={16} />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail size={16} />
                    <span className="text-sm">{branch.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/4 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold text-red-600">Inkarp Is Closer Than You Think</h2>
            <p className="text-gray-700 text-lg">Tap into our local teams for expert consultation, service requests, and scientific solutions tailored to your region.</p>
          </div>
        </div>      
      </section>
    </>
  );
}

export default Contact;
