import Link from "next/link";
import montserratAlternates from "./fonts/Fonts";
const TermsAndPrivacyPage = () => {
  return (
    <div className={`${montserratAlternates.className} min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#FAF9F6]`}>
      <div className="w-full max-w-2xl bg-[#FAF8F0] border border-gray-400 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Terms and Privacy Policy</h1>
        
        <h2 className="text-xl font-semibold text-gray-700 mt-4">Terms of Service</h2>
        <p className="text-gray-600 mt-2">
          By accessing and using our website, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.
        </p>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Users must not misuse our services.</li>
          <li>All content provided is for informational purposes only.</li>
          <li>We reserve the right to update or change these terms at any time.</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-700 mt-6">Privacy Policy</h2>
        <p className="text-gray-600 mt-2">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
        </p>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>We collect data such as name, email, and usage information.</li>
          <li>Your information is used to improve our services and provide a personalized experience.</li>
          <li>We do not share your personal data with third parties without your consent.</li>
        </ul>
        
        <p className="text-gray-600 mt-4">
          For any concerns, feel free to contact us.
        </p>
        
        <Link href="/signup" className="bg-blue-500 text-white px-3 py-1 rounded-3xl mt-4 inline-block">
          Back to SignUp
        </Link>
      </div>
    </div>
  );
};

export default TermsAndPrivacyPage;
