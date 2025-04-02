"use client";
import { useState, useEffect } from 'react';  // Import useEffect hook
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';

const AddApartment = () => {
  const router = useRouter();
  const [form, setForm] = useState<{
    name: string;
    tenants: string;
    tenantsPaid: string;
    tenantsUnpaid: string;
    monthlyAmount: string;
  }>({
    name: '',
    tenants: '',
    tenantsPaid: '',
    tenantsUnpaid: '',
    monthlyAmount: '',
  });

  // Use useEffect to ensure gsap runs only on the client
  useEffect(() => {
    gsap.from('.form-container', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
  }, []);  // Empty dependency array ensures it runs only after component mounts

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <motion.div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 form-container'>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='mb-4 '>
        <Link href="/dashboard">
          <button type='button' onClick={() => router.back()} className='bg-gray-500 cursor-pointer text-white py-2 px-4 rounded-lg'>
            Back
          </button>
        </Link>
      </motion.div>
      <h2 className='text-2xl font-bold text-center mb-6'>Add New Apartment</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block font-semibold'>Apartment Name</label>
          <input type='text' name='name' value={form.name} onChange={handleChange} required className='w-full border p-2 rounded' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block font-semibold'>Tenants</label>
            <input type='number' name='tenants' value={form.tenants} onChange={handleChange} required className='w-full border p-2 rounded' />
          </div>
          <div>
            <label className='block font-semibold'>Tenants Paid</label>
            <input type='number' name='tenantsPaid' value={form.tenantsPaid} onChange={handleChange} required className='w-full border p-2 rounded' />
          </div>
          <div>
            <label className='block font-semibold'>Tenants Unpaid</label>
            <input type='number' name='tenantsUnpaid' value={form.tenantsUnpaid} onChange={handleChange} required className='w-full border p-2 rounded' />
          </div>
          <div>
            <label className='block font-semibold'>Monthly Amount ($)</label>
            <input type='number' name='monthlyAmount' value={form.monthlyAmount} onChange={handleChange} required className='w-full border p-2 rounded' />
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg'>
            Add Apartment
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default AddApartment;
