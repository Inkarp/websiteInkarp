import { Linkedin, Mail, Youtube, MessageCircle } from "lucide-react";
import Branches from "./UI/Branches";

function ContactUs() {
  return (
    <>
      <section
        className="min-h-screen bg-cover mt-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              {/* Left Side Content */}
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Ultimate design solution
                </h1>
                <p className="max-w-xl mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo aliquid molestiae hic incidunt beatae placeat
                  accusantium! Alias ex quisquam ab tempora. Ratione autem
                  doloremque ducimus numquam doloribus, error sed.
                </p>
                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  Get in touch
                </button>

                {/* Socials */}
                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 text-lg font-semibold">Follow us</h3>
                  <div className="flex gap-4 mt-4">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/inkarp-instruments/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
                    >
                      <div className="rounded-lg bg-blue-200 p-4 hover:bg-gray-300 transition duration-300">
                        <Linkedin size={20} />
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition transform hover:scale-110"
                    >
                      <div className="rounded-lg bg-green-800 hover:bg-gray-300 transition duration-300 p-4">
                        <MessageCircle size={20} color="white" />         
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@inkarp.co.in"
                      className="text-red-500 hover:text-red-600 transition transform hover:scale-110"
                    >
                      <div className="rounded-lg bg-red-200 p-4 hover:bg-gray-300 transition duration-300">
                        <Mail size={20} color="black" />
                      </div>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/channel/UCxxxx" // Replace with actual link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 transition transform hover:scale-110"
                    >
                      <div className="rounded-lg bg-red-200 p-4 hover:bg-gray-300 transition duration-300">
                        <Youtube size={20} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                    Contact form
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love to hear from you
                  </p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Branches />
    </>
  );
}

export default ContactUs;
