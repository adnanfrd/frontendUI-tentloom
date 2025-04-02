"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import montserratAlternates from "../fonts/Fonts";

export default function AddPaymentBank() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center`}>
      {/* Responsive Header */}
      <div className="w-full max-w-7xl flex items-center justify-between ">
        <Link href="/settings" className="flex items-center border rounded-3xl px-3 py-1 space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back</span>
        </Link>
        <h1 className="text-xl md:text-xl font-semibold text-gray-800">Add Payment Bank <span className="text-gray-500">— April 02, 2025</span></h1>
      </div>

      <div className="w-full max-w-lg mt-6">
        <div className="p-6 bg-[#FAF8F0] shadow-lg rounded-xl border border-gray-300">
          {["Name", "Bank Name", "Account Number", "Routing Number"].map((label, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type="text"
                name={label.toLowerCase().replace(/ /g, "")}
                value={formData[label.toLowerCase().replace(/ /g, "") as keyof typeof formData]}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none transition disabled:bg-gray-100"
                placeholder={label}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 border border-gray-500 text-gray-800 rounded-lg hover:bg-gray-100 transition"
          >
            Edit
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}