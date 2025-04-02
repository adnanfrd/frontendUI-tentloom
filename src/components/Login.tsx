"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FcGoogle } from "react-icons/fc";
import montserratAlternates from "./fonts/Fonts";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={` ${montserratAlternates.className} flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-[#FAF9F6]`}
    >
      <div className="w-full max-w-sm space-y-6 flex flex-col items-center">
        <div className="flex flex-col justify-center sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-3 w-full border border-gray-400 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition whitespace-nowrap"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-base">Login with Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-3 w-full border border-gray-400 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition whitespace-nowrap"
          >
            <FaFacebook className="text-blue-600 text-2xl" />
            <span className="text-base">Login with Facebook</span>
          </motion.button>
        </div>

        <div className="flex items-center w-full">
          <div className="h-[1px] w-full bg-gray-300"></div>
          <span className="px-3 text-gray-600">Or</span>
          <div className="h-[1px] w-full bg-gray-300"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#FAF8F0] border border-gray-400 p-6 rounded-xl shadow-md"
        >
          <form className="space-y-4">
            {[
              { label: "Email", type: "email", placeholder: "Email" },
              { label: "Password", type: "password", placeholder: "Password" },
            ].map(({ label, type, placeholder }, index) => (
              <div key={index}>
                <label className="block text-sm font-medium">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            ))}

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Remember me</span>
              </div>
              <Link href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Link href="/dashboard">
              <motion.button
                ref={buttonRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 cursor-pointer bg-blue-500 text-white px-8 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center space-x-3"
              >
                <span>Login</span>
                <span>→</span>
              </motion.button>
            </Link>
          </form>
        </motion.div>

        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.section>
  );
};

export default Login;
