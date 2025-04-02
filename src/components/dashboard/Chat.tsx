import Link from "next/link";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import montserratAlternates from "../fonts/Fonts";

const Chat = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-screen bg-[#FAF9F6] flex flex-col items-center p-4`}>
      {/* Header */}
      <div className="w-full max-w-4xl bg-[#FAF8F0] shadow-md border border-gray-300 rounded-lg p-4 flex items-center space-x-3">
        <Link href="/dashboard">
          <button className="p-2 cursor-pointer bg-gray-200 rounded-full">
            <FaArrowLeft />
          </button>
        </Link>
        <h1 className="text-lg font-semibold flex-grow text-center">Chat — August 21, 2023</h1>
      </div>
      
      {/* Chat Section */}
      <div className="w-full max-w-4xl mt-4 flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-4">
          {["Trent Apartments", "Jelly Apartments", "Lift Apartments"].map((item, index) => (
            <div key={index} className="bg-[#FAF8F0] p-4 rounded-lg shadow-md border border-gray-300">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {item}
              </span>
              <p className="text-gray-500 text-sm mt-2">Trent Carie: <span className="text-black">Cool! 5:50PM</span></p>
            </div>
          ))}
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 bg-[#FAF8F0] shadow-md rounded-lg border border-gray-300 p-4 flex flex-col">
          {/* User Info */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="User" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">Trent Carie</p>
                <p className="text-xs text-gray-500">Apt#: 225 | Property Name: Trent Apartments</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 md:mt-0">View whole description</button>
          </div>

          {/* Messages */}
          <div className="flex flex-col space-y-3 p-4 overflow-y-auto max-h-96">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`self-${i % 2 === 0 ? "start" : "end"} bg-gray-300 text-sm px-4 py-2 rounded-lg max-w-xs`}
              >
                Lorem ipsum dolor sit 5:50PM
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="mt-auto flex items-center bg-gray-200 p-3 rounded-lg">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 p-2 rounded-md outline-none bg-white"
            />
            <button className="bg-blue-500 text-white p-2 rounded-full ml-2">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
