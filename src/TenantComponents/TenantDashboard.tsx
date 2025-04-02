"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import montserratAlternates from "@/components/fonts/Fonts";
import Link from "next/link";

const TenantDashboard = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center px-6 py-8 font-[sans-serif]`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl flex justify-between items-center"
      >
        <h1 className="text-xl font-semibold text-gray-800">
          Lift Apartments <span className="text-gray-500">— August 21, 2023</span>
        </h1>
        <Link href="/chat">
        <button className="px-3 py-1 cursor-pointer border border-blue-400 text-gray-800 rounded-full hover:bg-gray-100 transition">
          Chat
        </button>
        </Link>
      </motion.div>

      <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300 w-full max-w-3xl mt-6">
        <motion.div whileHover={{ scale: 1.02 }} className="text-center mb-4">
          <span className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-sm">
            Account Details
          </span>
        </motion.div>

        <div className="space-y-3 text-gray-700">
          {[
            ["Name", "Trent Carie"],
            ["Account Number", "fvb5214"],
            ["Apt #", "20"],
            ["Status", "Active Tenant"],
            ["Monthly Amount", "$800.00"],
          ].map(([label, value], index) => (
            <div key={index} className="flex justify-between">
              <p>{label}:</p> 
              <p className="text-green-600 font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <Link href="/view-lease">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-4 w-full px-4 py-2 cursor-pointer rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center gap-2"
        >
          View Lease <FaArrowRight />
        </motion.button>
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-6 w-full max-w-3xl">
        <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300">
          <motion.div whileHover={{ scale: 1.02 }} className="text-center mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-sm">
              Last Payment
            </span>
          </motion.div>

          <div className="space-y-3 text-gray-700">
            {[
              ["Due", "$1,500.00"],
              ["Due Date", "2/23/24"],
              ["Bill Cycle", "1/22 - 2/22"],
              ["Status", "Paid"],
            ].map(([label, value], index) => (
              <div key={index} className="flex justify-between">
                <p>{label}:</p> 
                <p className="text-green-600 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300">
          <motion.div whileHover={{ scale: 1.02 }} className="text-center mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-sm">
              Account Summary
            </span>
          </motion.div>

          <div className="space-y-3 text-gray-700">
            {[
              ["Due", "$1,500.00"],
              ["Due Date", "2/23/24"],
              ["Bill Cycle", "1/22 - 2/22"],
              ["Next Payment", "2/24/24"],
            ].map(([label, value], index) => (
              <div key={index} className="flex justify-between">
                <p>{label}:</p> 
                <p className="text-green-600 font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <Link href="/pay">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 w-full cursor-pointer px-4 py-2 rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center gap-2"
          >
            Make a payment <FaArrowRight />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TenantDashboard;
