"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import montserratAlternates from "../fonts/Fonts";
import Link from "next/link";

const properties = [
  { name: "Jelly Apartments", tenants: 30, paid: 17, unpaid: 13, amount: 2000, link: "/propertydetails" },
  { name: "Lift Apartments", tenants: 10, paid: 7, unpaid: 3, amount: 800, link: "/propertydetails" },
  { name: "City Apartments", tenants: 5, paid: 2, unpaid: 3, amount: 1000, link: "/propertydetails" },
  { name: "Trent Apartments", tenants: 50, paid: 25, unpaid: 25, amount: 2000, link: "/propertydetails" },
];

const Dashboard = () => {
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 1.05, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" }
      );
    }
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] p-4 sm:p-6 flex flex-col items-center`}> 
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full max-w-7xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          Properties — <span className="text-[#BBBBB9] font-medium">August 21, 2023</span>
        </h2>
        <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-0">
          <Link href="/paymentoverview"><button className="cursor-pointer px-3 py-1 border border-blue-500 rounded-full hover:bg-gray-200 transition">Payment Overview</button></Link>
          <Link href="/chat"><button className="cursor-pointer px-3 py-1 border border-blue-500 rounded-full hover:bg-gray-200 transition">Chats</button></Link>
        </div>
      </div>

      <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] w-full">
    {properties.map((property, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="bg-[#FAF8F0] p-10 sm:p-12 rounded-2xl shadow-md border border-gray-300 hover:shadow-lg transition transform hover:scale-105 cursor-pointer 
        w-full sm:w-[600px] max-w-[500px]" // Full width on mobile, fixed size on desktop
        onClick={() => router.push(property.link)}
      >
        <h3 className="text-xl sm:text-2xl font-semibold bg-blue-500 text-white rounded-full px-8 py-3 w-fit mx-auto">
          {property.name}
        </h3>

        <div className="mt-5 space-y-3 text-center">
          <div className="flex justify-between text-lg">
            <span>Tenants:</span>
            <span className="font-semibold">{property.tenants}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tenants Paid:</span>
            <span className="font-semibold text-green-600">{property.paid}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tenants Unpaid:</span>
            <span className="font-semibold text-red-600">{property.unpaid}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold text-green-600">
            <span>Monthly Amount:</span>
            <span>${property.amount.toFixed(2)}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>




      <Link href="/addapartment">
        <motion.button
          ref={buttonRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition w-full max-w-[300px] mx-auto"
        >
          + Add New Apartment
        </motion.button>
      </Link>
    </div>
  );
};

export default Dashboard;
