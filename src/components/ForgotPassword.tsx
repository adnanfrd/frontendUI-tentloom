"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import montserratAlternates from "./fonts/Fonts";

const ForgotPassword = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${montserratAlternates.className} flex flex-col items-center justify-center min-h-[88vh] px-4 py-10 bg-[#FAF9F6]`}
    >
      <div className="w-full max-w-sm bg-[#FAF8F0] p-6 rounded-xl border border-gray-400 shadow-md space-y-6">
        <h2 className="text-center text-2xl font-bold">Forgot Password</h2>
        <p className="text-center text-gray-600">
          Enter your email address and we will send you a link to reset your password.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition"
          >
            Send Reset Link
          </motion.button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Remembered your password? {" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.section>
  );
};

export default ForgotPassword;
