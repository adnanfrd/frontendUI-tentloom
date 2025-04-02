"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import montserratAlternates from "@/components/fonts/Fonts";
import Link from "next/link";

const PaymentPage = () => {
  const [confirmAmount, setConfirmAmount] = useState("");
  const amountDue = 1500.0;

  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      className={`${montserratAlternates.className} min-h-[80vh] bg-[#FAF9F6] flex flex-col items-center px-6 py-8 font-[sans-serif]`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center sm:text-left text-center"
      >
        <Link href="/tenant-dashboard">
          <button className="flex items-center cursor-pointer gap-2 px-3 py-1 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-200 transition">
            <FaArrowLeft /> Back to home
          </button>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800 mt-4 sm:mt-0">
          Payment Method{" "}
          <span className="text-gray-500">— August 21, 2023</span>
        </h1>
      </motion.div>

      <motion.div className="card bg-[#FAF8F0] p-6 rounded-xl shadow-md border border-gray-300 w-full max-w-md mt-10">
        <motion.div whileHover={{ scale: 1.02 }} className="text-center mb-4">
          <span className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-sm">
            Payment Summary
          </span>
        </motion.div>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <p>Amount Due:</p>
            <p className="text-green-600 font-semibold">
              ${amountDue.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p>Confirm Payment:</p>
            <input
              type="number"
              value={confirmAmount}
              onChange={(e) => setConfirmAmount(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 w-24 text-right text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex justify-between">
            <p>Payment Date:</p>
            <p className="text-green-600 font-semibold">2/23/24</p>
          </div>
          <div className="flex justify-between">
            <p>Payment Method:</p>
            <p className="text-green-600 font-semibold">CashApp</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`mt-6 w-full px-4 py-2 rounded-full text-white font-semibold flex items-center justify-center gap-2 ${
            parseFloat(confirmAmount) === amountDue
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={parseFloat(confirmAmount) !== amountDue}
        >
          Pay <FaArrowRight />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
