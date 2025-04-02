"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import montserratAlternates from "../fonts/Fonts";
import Link from "next/link";

const tenants = [
  { name: "Trent Carie", amount: 900, date: "4/07/24", status: "Unpaid" },
  { name: "Drew Casey", amount: 900, date: "4/07/24", status: "Paid" },
  { name: "Tim Carey", amount: 900, date: "4/07/24", status: "Paid" },
  { name: "Tom Cass", amount: 900, date: "4/07/24", status: "Paid" },
  { name: "Larry Tail", amount: 900, date: "4/07/24", status: "Unpaid" },
  { name: "Jarry Matt", amount: 0, date: "4/07/24", status: "Paid" },
];

const TenantDashboard = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5, ease: "power1.out" }
    );
  }, []);

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] p-4 flex flex-col items-center`}>
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <Link href="/propertydetails">
          <button className="flex cursor-pointer items-center text-gray-600 border py-1 px-3  rounded-2xl mb-4">
            <IoMdArrowBack className="mr-2" /> Back
          </button>
        </Link>
        <h2 className="text-xl font-semibold text-gray-800 text-center w-full sm:w-auto">
          Jelly Apartments <span className="text-gray-500">— August 21, 2023</span>
        </h2>
      </div>
       
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full max-w-5xl px-4 sm:px-6 md:px-8"
      >
        {tenants.map((tenant, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#FAF8F0] p-4 rounded-2xl shadow-md border border-gray-400"
          >
            <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full w-max">
              Tenant
            </div>
            <Link href="/tenantaccountdetils">
            <div className="mt-3 space-y-1 text-gray-700">
              <p className="flex justify-between">
                <span className="font-semibold">Name:</span>
                <span className="ml-1 text-green-600">{tenant.name}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Amount:</span>
                <span
                  className={`ml-1 ${
                    tenant.amount === 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  ${tenant.amount}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Date:</span> {tenant.date}
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Status:</span>
                <span
                  className={
                    tenant.status === "Unpaid"
                      ? "text-red-500"
                      : "text-green-600"
                  }
                >
                  {tenant.status}
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span className="font-semibold">Contract:</span>
               <div className="flex font-bold gap-4">
              
               <Link href="/contractdetails"><FaRegFileAlt className="ml-2 text-gray-500" /></Link>
               <LuCirclePlus />
               </div>
              </p>
            </div>
            </Link>

            <div className="mt-4 flex flex-wrap gap-2">
              {tenant.status === "Unpaid" && (
                <button className="flex-1 border border-blue-500 text-blue-500 rounded-lg py-2 text-sm">
                  Send a reminder
                </button>
              )}
              <button className="flex-1 border border-blue-500 text-blue-500 rounded-lg py-2 text-sm">
                View Payments
              </button>
            </div>
          </motion.div>
        ))}
            

      </motion.div>
    </div>
  );
};

export default TenantDashboard;
