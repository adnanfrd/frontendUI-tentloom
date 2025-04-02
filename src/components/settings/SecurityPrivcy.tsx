"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function SecurityPrivacy() {
  const [formData, setFormData] = useState({
    securityLock: "",
    password: "",
    authenticator: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center">
      {/* Responsive Header */}
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/settings" className="flex items-center border rounded-3xl px-3 py-1 space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back to settings</span>
        </Link>
        <h1 className="text-xl md:text-xl font-semibold text-gray-800">Security & Privacy <span className="text-gray-500">— April 02, 2025</span></h1>
      </div>

      <div className="w-full max-w-lg mt-6">
        <div className="p-6 bg-[#FAF8F0] shadow-lg rounded-xl border border-gray-300">
          {[
            { label: "Security Lock", name: "securityLock" },
            { label: "Password", name: "password" },
            { label: "Use Authenticator", name: "authenticator" },
            { label: "New Password", name: "newPassword" },
            { label: "Confirm Password", name: "confirmPassword" },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
              <input
                type={field.name.includes("password") ? "password" : "text"}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:ring focus:ring-blue-500 focus:outline-none transition"
                placeholder={field.label}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="w-full max-w-sm px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}