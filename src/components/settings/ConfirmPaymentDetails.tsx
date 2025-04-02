import { FaArrowLeft, FaReceipt } from "react-icons/fa";
import Link from "next/link";
import montserratAlternates from "../fonts/Fonts";

const payments = [
  { 
    title: "Lift Apartments", 
    name: "Terry Casie", 
    aptNo: "225", 
    amount: "$1,500.00", 
    date: "09/2/2023", 
    status: "Confirmed Payment", 
  },
  { 
    title: "Lift Apartments", 
    name: "Tom Carie", 
    aptNo: "325", 
    amount: "$2,500.00", 
    date: "10/2/2023", 
    status: "Confirmed Payment", 
  },
  { 
    title: "Lift Apartments", 
    name: "Arie Carol", 
    aptNo: "355", 
    amount: "$2,000.00", 
    date: "11/2/2023", 
    status: "Confirmed Payment", 
  },
];

export default function ConfirmPaymentDetails() {
  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center`}>
      
      {/* Header Section (Full Width: max-w-7xl) */}
      <div className="w-full max-w-7xl mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          
          {/* Back Button */}
          <Link href="/settings" className="flex px-3 py-1 border rounded-3xl border-gray-200 items-center space-x-2 text-gray-600 hover:text-black">
            <FaArrowLeft />
            <span>Back to settings</span>
          </Link>

          {/* Title & Date */}
          <h1 className="text-xl font-semibold text-gray-800 text-center sm:text-left">
            Payment History <span className="text-gray-500">— August 21, 2023</span>
          </h1>
        </div>
      </div>

      {/* Payment List (Limited to max-w-2xl) */}
      <div className="w-full max-w-2xl space-y-4">
        {payments.map((payment, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between p-5 bg-[#FAF8F0] shadow-md rounded-lg border border-gray-300 
            transition hover:shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <FaReceipt className="text-blue-500 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{payment.title}</h2>
                <p className="text-gray-600">{payment.name}</p>
                <p className="text-gray-500">
                  <span className="font-semibold">Apt#</span> <span className="text-green-600">{payment.aptNo}</span>
                </p>
                <p className="text-sm font-semibold text-green-600">{payment.status}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">{payment.amount}</p>
              <p className="text-gray-500 text-sm">{payment.date}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
