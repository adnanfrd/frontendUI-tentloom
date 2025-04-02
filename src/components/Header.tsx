"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import montserratAlternates from "./fonts/Fonts";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  const buttonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  if (pathname === "/detailsconfirmation" || pathname === "/") return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${montserratAlternates.className} flex bg-[#FAF9F6] justify-between items-center px-6 py-3 border-b-2 border-blue-300`}
    >
      <Link href="/dashboard">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center cursor-pointer space-x-2"
        >
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <span className="font-bold text-xl">TentLoom</span>
        </motion.div>
      </Link>

      <div className="flex items-center space-x-3">
        {pathname !== "/signup" && (
          <div className="bg-blue-500 text-white rounded-full p-2">
            <IoNotificationsOutline className="text-xl" />
          </div>
        )}

        {pathname === "/signup" ? (
          <Link href="/login">
            <motion.button
              ref={buttonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border px-4 py-1 rounded-full cursor-pointer text-base hover:bg-gray-100 transition"
            >
              Log In
            </motion.button>
          </Link>
        ) : (
          <Link href="/settings">
            <motion.button
              ref={buttonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center border border-blue-800 px-4 py-2 rounded-full cursor-pointer text-base hover:bg-gray-100 transition"
            >
              Settings
              <CiSettings className="ml-2 text-xl" />
            </motion.button>
          </Link>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
