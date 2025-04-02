"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IoMdArrowBack } from "react-icons/io";
import { FaPrint, FaUpload } from "react-icons/fa";
import montserratAlternates from "../fonts/Fonts";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbSignature } from "react-icons/tb";
import { RiKey2Fill } from "react-icons/ri";
import Link from "next/link";

// Payment method data
const paymentMethods = [
  { name: "PayPal", imageUrl: "/paypal.png" },
  { name: "CashApp", imageUrl: "/cashapp.png" },
  { name: "Zelle", imageUrl: "/zelle.jpeg" },
  { name: "Venmo", imageUrl: "/venmo.png" },
  { name: "Apple Pay", imageUrl: "/applepay.png" },
  { name: "Banking", imageUrl: "/bankingmethod.png" }
];

const TenantForm = () => {
  const buttonRef = useRef(null);
  const [signature, setSignature] = useState("");
  const [rentAmount, setRentAmount] = useState("1500");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 1.05, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" }
      );
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelectPaymentMethod = (methodName: string) => {
    setPaymentMethod(methodName);
    setDropdownOpen(false);
  };

  return (
    <div className={`${montserratAlternates.className} min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] p-4`}>
      <button className="flex items-center px-3 py-1 cursor-pointer border rounded-full hover:bg-gray-200 text-gray-600 mb-4 self-start">
        <Link href="/propertydetails" className="flex items-center"><IoMdArrowBack className="mr-2" /> Back </Link>
      </button>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#FAF8F0] p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-300"
      >
        <div className="space-y-4">
          {["Enter full name", "Driver license", "Apt #", "Employment Info"].map((label, index) => (
            <div key={index} className="relative">
              <label className="block text-sm text-gray-700 mb-1">{label}</label>
              <input 
                type="text" 
                placeholder={label} 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <MdOutlineDriveFileRenameOutline className="absolute right-3 top-9 text-gray-500" />
            </div>
          ))}

          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Signature</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <TbSignature className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Sign here..."
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="flex-1 outline-none"
              />
              <button onClick={() => setSignature("")} className="text-blue-500 px-3 py-1 cursor-pointer border rounded-md text-sm">
                Reset
              </button>
            </div>
          </div>

          {/* Custom Payment Method Dropdown */}
          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Payment Method</label>
            <div
              className="cursor-pointer flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2"
              onClick={toggleDropdown}
            >
              <span>{paymentMethod ? paymentMethod : "Select a payment method"}</span>
              <span className="text-gray-500">{dropdownOpen ? "▲" : "▼"}</span>
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectPaymentMethod(method.name)}
                  >
                    <img src={method.imageUrl} alt={method.name} className="w-6 h-6 mr-2" />
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Rent Amount</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <span className="text-gray-500 pr-2">$</span>
              <input
                type="number"
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
                className="flex-1 outline-none text-right"
              />
            </div>
          </div>

          <button className="w-full flex items-center justify-center border border-blue-500 rounded-3xl py-3">
            <FaPrint className="mr-2" /> Print
          </button>
          <button
            className="w-full flex items-center justify-center border border-blue-500  rounded-3xl py-3"
          >
            <FaUpload className="mr-2" /> Upload documents
          </button>
          <button 
            ref={buttonRef}
            className="w-full flex items-center justify-center border border-blue-500 rounded-3xl py-3"
          >
            <RiKey2Fill className="mr-2" /> Generate activation number
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TenantForm;
