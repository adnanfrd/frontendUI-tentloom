"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import montserratAlternates from "./fonts/Fonts";

const Hero = () => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${montserratAlternates.className} flex flex-col bg-[#FAF9F6] items-center justify-center h-[100vh] text-center px-4`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-1" // Increased from text-2xl to text-3xl
      >
        TentLoom
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <Image src="/logo.png" alt="Logo" width={200} height={200} /> {/* Increased dimensions */}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl mt-4 font-bold"
      >
        Seamless Living, Simplified Payments
      </motion.p>
      <Link href="/signup">
        <motion.button
          ref={buttonRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-full text-xl shadow-md hover:bg-blue-600 transition flex items-center space-x-2" // Increased text size from text-lg to text-xl
        >
          <span>Get started</span>
          <span>→</span>
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default Hero;
