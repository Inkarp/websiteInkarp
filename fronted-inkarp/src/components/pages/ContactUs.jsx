import { Linkedin, Mail, Youtube, MessageCircle, Phone } from "lucide-react";
import ContactForm from "./Contact/ContactForm";

function ContactUs() {
  const branches = [
    {
      name: "Bengaluru",
      address: "Bengaluru, Karnataka",
      phone: "+91 9000000000",
      email: "bengaluru@inkarp.co.in",
      top: "75%", left: "35%",
    },
    {
      name: "Chennai",
      address: "Chennai, Tamil Nadu",
      phone: "+91 9000000001",
      email: "chennai@inkarp.co.in",
      top: "82%", left: "45%",
    },
    {
      name: "Kolkata",
      address: "Kolkata, West Bengal",
      phone: "+91 9000000002",
      email: "kolkata@inkarp.co.in",
      top: "50%", left: "60%",
    },
    {
      name: "Thiruvananthapuram",
      address: "Thiruvananthapuram, Kerala",
      phone: "+91 9000000003",
      email: "trivandrum@inkarp.co.in",
      top: "93%", left: "36%",
    },
    {
      name: "Ahmedabad",
      address: "Ahmedabad, Gujarat",
      phone: "+91 9000000004",
      email: "ahmedabad@inkarp.co.in",
      top: "45%", left: "30%",
    },
    {
      name: "Mumbai",
      address: "Mumbai, Maharashtra",
      phone: "+91 9000000005",
      email: "mumbai@inkarp.co.in",
      top: "60%", left: "28%",
    },
    {
      name: "Delhi",
      address: "Delhi, New Delhi",
      phone: "+91 9000000006",
      email: "delhi@inkarp.co.in",
      top: "30%", left: "40%",
    },
    {
      name: "Visakhapatnam",
      address: "Visakhapatnam, Andhra Pradesh",
      phone: "+91 9000000007",
      email: "vizag@inkarp.co.in",
      top: "65%", left: "55%",
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
      top: "50%", left: "32%",
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
        .location-marker {
          transition: all 0.3s ease;
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
        .social-icon {
          transition: transform 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
      `}</style>
      <section className="min-h-screen mt-22">
        <div className="container mx-auto flex flex-col items-center justify-center">
          {/* INDIA MAP WITH ICONS */}
          <div className="relative w-full max-w-5xl h-[800px] bg-white rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/india.jpg" 
              alt="India Map"
              className="object-contain w-full h-full"
            />

            {/* Location Pins with City Names and Hover Card */}
            {branches.map((branch, index) => (
              <div
                key={index}
                className="absolute flex flex-col items-center location-wrapper"
                style={{
                  top: branch.top,
                  left: branch.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Animated Icon */}
                <div className="relative location-marker">
                  <div className="w-4 h-4 bg-red-500 rounded-full location-ping" />
                  <div className="w-3 h-3 bg-red-700 rounded-full absolute top-[2px] left-[2px]" />
                </div>
                {/* City Name */}
                <span className="mt-1 text-xs font-semibold text-black bg-white px-2 py-0.5 rounded-md shadow-sm">
                  {branch.name}
                </span>

                {/* Hover Card */}
                <div className="location-card absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white text-black p-4 rounded-lg shadow-2xl z-50">
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

          {/* SOCIAL MEDIA LINKS */}
          {/* <div className="flex justify-center gap-6 mt-10">
            <a
              href="https://www.linkedin.com/company/inkarp-instruments/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <span className="social-icon inline-block">
                <Linkedin size={28} />
              </span>
            </a>
            <a
              href="mailto:info@inkarp.co.in"
              className="text-red-500 hover:text-red-700"
            >
              <span className="social-icon inline-block">
                <Mail size={28} />
              </span>
            </a>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800"
            >
              <span className="social-icon inline-block">
                <MessageCircle size={28} />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              <span className="social-icon inline-block">
                <Youtube size={28} />
              </span>
            </a>
          </div> */}
          
        </div>
        <ContactForm />
      </section>
    </>
  );
}

export default ContactUs;
