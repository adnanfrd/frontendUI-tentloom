import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import montserratAlternates from "../fonts/Fonts";

const settingsOptions = [
  { title: "Personal Settings", imgSrc: "/personel.jpeg", link: "/personelsettings" },
  { title: "Payment Methods", imgSrc: "/payment.png", link: "/paymentmethod" },
  { title: "Security & Privacy", imgSrc: "/security.png", link: "/securityprivacy" },
  { title: "Payment History", imgSrc: "/historyp.jpeg", link: "/paymenthistory" },
];

export default function SettingsPage() {
  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center`}>
      
      {/* Header Section (max-w-7xl) */}
      <div className="w-full max-w-7xl mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          
          {/* Back Button */}
          <Link href="/dashboard" className="flex cursor-pointer border rounded-3xl py-1 px-3 items-center space-x-2 text-gray-600 hover:text-black">
            <FaArrowLeft />
            <span>Back to home</span>
          </Link>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 text-center sm:text-left">
            Settings <span className="text-gray-500">— August 21, 2023</span>
          </h1>
        </div>
      </div>

      {/* Settings List (max-w-2xl) */}
      <div className="w-full max-w-2xl space-y-4">
        {settingsOptions.map((option, index) => (
          <Link key={index} href={option.link} className="block">
            <div className="flex items-center p-4 border border-gray-300 bg-[#FAF8F0] shadow-md rounded-lg hover:shadow-lg transition cursor-pointer">
              <div className="w-16 h-16 relative">
                <Image src={option.imgSrc} alt={option.title} layout="fill" objectFit="contain" />
              </div>
              <span className="ml-4 text-lg font-medium text-gray-800">{option.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
