"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import montserratAlternates from "./fonts/Fonts";
import Link from "next/link";

const Signup = () => {
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
      className={`${montserratAlternates.className} flex flex-col items-center justify-center min-h-screen sm:min-h-[130vh] px-4 py-10 bg-[#FAF9F6]`}
    >
      <div className="w-full max-w-sm sm:max-w-md space-y-6 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto border border-gray-400 px-3 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm sm:text-base">Login with Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto border border-gray-400 px-3 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaFacebook className="text-blue-600 text-xl" />
            <span className="text-sm sm:text-base">Login with Facebook</span>
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
          className="w-full bg-[#FAF8F0] p-6 border border-gray-300 rounded-xl shadow-md"
        >
          <form className="space-y-4">
            {[
              { label: "Full Name", type: "text", placeholder: "Your full name" },
              { label: "Email", type: "email", placeholder: "Email" },
              { label: "Username", type: "text", placeholder: "Username" },
              { label: "Password", type: "password", placeholder: "Password" },
              { label: "Confirm Password", type: "password", placeholder: "Confirm password" },
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

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">
                I accept{" "}
                <Link href="/termsandprivacy" className="text-blue-500 underline">
                  Terms of Use & Privacy Policy
                </Link>
              </span>
            </div>
             
             <Link href="/detailsconfirmation" >
            <motion.button
              ref={buttonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center space-x-2"
            >
              <span>Sign Up</span>
              <span>→</span>
            </motion.button>
            </Link>
          </form>
        </motion.div>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.section>
  );
};

export default Signup;
