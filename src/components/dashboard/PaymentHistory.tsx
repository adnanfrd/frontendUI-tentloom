import { FaArrowLeft, FaReceipt } from "react-icons/fa";
import Link from "next/link";
import montserratAlternates from "../fonts/Fonts";

const payments = [
  {
    title: "Lift Apartments",
    amount: "$1,500.00",
    date: "09/2/2023",
    link: "/confirmpaymentdetails",
  },
  { title: "Jelly Apartments", amount: "$1,400.00", date: "10/2/2023" },
  { title: "City Apartments", amount: "$2,000.00", date: "11/2/2023" },
  { title: "Tents Apartments", amount: "$1,500.00", date: "12/2/2023" },
];

export default function PaymentHistory() {
  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] px-6 py-10 flex flex-col items-center`}>
      
      {/* Header Section (max-w-7xl) */}
      <div className="w-full max-w-7xl mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          
          {/* Back Button */}
          <Link href="/settings" className="flex px-3 py-1 border rounded-3xl border-gray-200 items-center space-x-2 text-gray-600 hover:text-black">
            <FaArrowLeft />
            <span>Back to settings</span>
          </Link>

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 text-center sm:text-left">
            Payment History <span className="text-gray-500">— August 21, 2023</span>
          </h1>
        </div>
      </div>

      {/* Payment List (max-w-2xl) */}
      <div className="w-full max-w-2xl space-y-4">
        {payments.map((payment, index) => {
          const paymentItem = (
            <div
              key={index}
              className={`flex items-center justify-between p-6 bg-[#FAF8F0] shadow-md rounded-lg border border-gray-300 
              transition hover:shadow-lg ${payment.link ? "hover:bg-blue-50 cursor-pointer" : ""}`}
            >
              <div className="flex items-center space-x-4">
                <FaReceipt className="text-blue-500 text-3xl" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {payment.title}
                  </h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-semibold">
                  {payment.amount}
                </p>
                <p className="text-gray-500 text-sm">{payment.date}</p>
              </div>
            </div>
          );

          return payment.link ? (
            <Link href={payment.link} key={index} className="block">
              {paymentItem}
            </Link>
          ) : (
            paymentItem
          );
        })}
      </div>
    </div>
  );
}
