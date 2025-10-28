import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-violet-400 mx-auto mb-16 rounded-full"></div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Email */}
          <div className="bg-white/10 backdrop-blur-md border border-violet-400/40 rounded-2xl shadow-xl p-10 transform hover:scale-105 hover:shadow-violet-500/40 transition-all duration-500 ease-in-out hover:bg-violet-500/10">
            <div className="flex flex-col items-center space-y-4">
              <FiMail className="text-violet-400 w-10 h-10" />
              <p className="text-gray-300 text-lg hover:text-white transition-colors duration-300">
                <a href="mailto:rishitaraj1855@gmail.com">
                  rishitaraj1855@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-md border border-violet-400/40 rounded-2xl shadow-xl p-10 transform hover:scale-105 hover:shadow-violet-500/40 transition-all duration-500 ease-in-out hover:bg-violet-500/10">
            <div className="flex flex-col items-center space-y-4">
              <FiPhone className="text-violet-400 w-10 h-10" />
              <p className="text-gray-300 text-lg hover:text-white transition-colors duration-300">
                +91 9508901018
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-md border border-violet-400/40 rounded-2xl shadow-xl p-10 transform hover:scale-105 hover:shadow-violet-500/40 transition-all duration-500 ease-in-out hover:bg-violet-500/10">
            <div className="flex flex-col items-center space-y-4">
              <FiMapPin className="text-violet-400 w-10 h-10" />
              <p className="text-gray-300 text-lg hover:text-white transition-colors duration-300">
                Dhanbad, Jharkhand, India.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Contact;
