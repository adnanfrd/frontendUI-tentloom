"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import montserratAlternates from "../fonts/Fonts";
import Link from "next/link";

const PersonalSettings = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center px-6 py-8 font-[sans-serif]`}>

      {/* Header (max-w-7xl) */}
      <div className="w-full max-w-7xl mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          
          {/* Back Button */}
          <motion.button whileTap={{ scale: 0.95 }} className="self-start">
            <Link href="/settings" className="flex gap-2 items-center border rounded-3xl py-1 px-3 text-gray-600 hover:text-gray-900">
              <FaArrowLeft className="text-lg" />
              <span className="text-base font-medium">Back to settings</span>
            </Link>
          </motion.button>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl font-semibold text-gray-800 text-center sm:text-left"
          >
            Personal <span className="text-gray-500">— August 21, 2023</span>
          </motion.h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-[20rem] mt-4">
  <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium shadow-sm">
    Personal Info
  </motion.button>
  <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium shadow-sm">
    Contact Info
  </motion.button>
</div>


      {/* Cards Section (max-w-2xl) */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
        <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300">
          <h2 className="text-lg font-medium text-gray-700 mb-3">Personal Info</h2>
          <p className="text-gray-500 text-sm mb-4">
            Only you can see these details. We will use this info to help verify your identity.
          </p>
          <input type="text" placeholder="Legal Name" className="w-full p-2 border border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-3" />
          <input type="text" placeholder="Address" className="w-full p-2 border border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </motion.div>

        <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300">
          <h2 className="text-lg font-medium text-gray-700 mb-3">Contact Info</h2>
          <p className="text-gray-500 text-sm mb-4">
            This is the info used to sign in and notify you about important account activity.
          </p>
          <input type="text" placeholder="Phone" className="w-full p-2 border border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-3" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        </motion.div>
      </div>

    </div>
  );
};

export default PersonalSettings;
