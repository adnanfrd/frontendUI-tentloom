"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import montserratAlternates from "@/components/fonts/Fonts";
import Link from "next/link";

const ViewLease = () => {
  useEffect(() => {
    gsap.fromTo(
      ".content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center px-6 py-8 font-[sans-serif]`}>
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between text-center sm:text-left"
>
  <Link href="/tenant-dashboard">
    <button className="flex items-center cursor-pointer gap-2 px-3 py-1 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-200 transition">
      <FaArrowLeft /> Back
    </button>
  </Link>
  <h1 className="text-xl font-semibold text-gray-800 mt-4 sm:mt-0">
    Lease Agreement <span className="text-gray-500">— March 26, 2025</span>
  </h1>
</motion.div>


      <motion.div
        className="content bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300 w-full max-w-2xl mt-6"
      >
        <h2 className="text-lg font-bold text-gray-900">
          Residential Lease Agreement
        </h2>

        <p className="mt-4 text-gray-700">
          This lease agreement is made between the **Landlord**, John Doe, and the **Tenant**, Jane Smith, for the rental property located at **123 Main Street, Cityville**.
        </p>

        <h3 className="mt-4 font-semibold text-gray-800">Lease Terms:</h3>
        <ul className="list-decimal list-inside text-gray-700 mt-2 space-y-1">
          <li>The lease term begins on **April 1, 2025**, and ends on **March 31, 2026**.</li>
          <li>The monthly rent is **$1,500**, due on the 1st of each month.</li>
          <li>A security deposit of **$2,000** is required before moving in.</li>
          <li>Late fees apply if rent is not received by the 5th of the month.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-gray-800">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>The Tenant agrees to keep the property clean and in good condition.</li>
          <li>The Landlord is responsible for maintenance and repairs, except for damages caused by the Tenant.</li>
          <li>No pets are allowed unless prior approval is granted.</li>
        </ul>

        <p className="mt-4 text-gray-700">
          By signing this agreement, both parties acknowledge and agree to the terms stated above.
        </p>
      </motion.div>
    </div>
  );
};

export default ViewLease;
