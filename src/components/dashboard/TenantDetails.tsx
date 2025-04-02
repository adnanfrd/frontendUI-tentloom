'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function TenantDetails() {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
            <Link href="/propertydetails">
            <button 
                className="self-start mb-6 flex items-center px-4 py-2 bg-gray-200 rounded-lg shadow-sm hover:bg-gray-300 transition"
            >
                ⬅ Back
            </button>
            </Link>
            <motion.div 
                ref={cardRef}
                className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center border border-gray-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Account Details
                </motion.button>
                <div className="text-gray-700 space-y-2">
                    <div className="flex justify-between">
                        <p><strong>Name:</strong></p>
                        <p className="text-green-600">Terry Meez</p>
                    </div>
                    <div className="flex justify-between">
                        <p><strong>Account Number:</strong></p>
                        <p className="text-green-600">fvb5214</p>
                    </div>
                    <div className="flex justify-between">
                        <p><strong>Apt #:</strong></p>
                        <p className="text-green-600">20</p>
                    </div>
                    <div className="flex justify-between">
                        <p><strong>Status:</strong></p>
                        <p className="text-green-600">Active Tenant</p>
                    </div>
                    <div className="flex justify-between">
                        <p><strong>Contact:</strong></p>
                        <p className="text-green-600">323-705-6551</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
