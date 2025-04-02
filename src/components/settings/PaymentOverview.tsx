"use client";
import { FaArrowLeft, FaDownload } from "react-icons/fa";
import montserratAlternates from "../fonts/Fonts";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "7 Sun", value: 1000 },
  { name: "8 Mon", value: 1500 },
  { name: "9 Tue", value: 1200 },
  { name: "10 Wed", value: 1700 },
  { name: "11 Thu", value: 1400 },
  { name: "12 Fri", value: 2000 },
  { name: "13 Sat", value: 1300 },
];

export default function PaymentOverview() {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2023");

  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center`}>
      {/* header */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mb-6 px-4">
        <Link
          href="/settings"
          className="flex items-center border rounded-3xl py-1 px-3 text-gray-600 hover:text-black"
        >
          <FaArrowLeft />
          <span className="ml-2">Back</span>
        </Link>
        <h1 className="text-xl font-semibold text-center mt-4 sm:mt-0">
          Payment Overview <span className="text-gray-500">—August 21, 2023</span>
        </h1>
      </div>

      <div className="w-full max-w-2xl">
        <div className="mt-6 bg-[#FAF8F0] p-6 rounded-lg border border-gray-300 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Statistics</h2>
          <div className="overflow-x-auto">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  wrapperStyle={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#3B82F6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 bg-[#FAF8F0] p-6 rounded-lg border border-gray-300 shadow-md flex flex-col space-y-4">
          <label className="text-gray-700 font-semibold">
            Download financial report for this period
          </label>
          <div className="flex space-x-4">
            <select
              className="border rounded px-4 py-2"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              className="border rounded px-4 py-2"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {["2022", "2023", "2024"].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
            <FaDownload className="mr-2" /> Download
          </button>

          <Link href="/paymenthistory">
            <button className="w-full border rounded-lg py-2 text-gray-700 hover:bg-gray-200 transition">
              Payment History
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}