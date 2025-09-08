"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CheckOutForm({ data }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    phone: "",
    date: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  toast("Submitting your order...", { icon: "🛎️" });

  const finalData = {
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    dueAmount: data?.price || 0,
    phone: formData.phone,
    address: formData.address,
    date: formData.date,
    service_id: data._id,
    service_name: data.title,
    service_img: data.img,
    service_price: data.price,
  };

  console.log("Form submitted:", finalData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service`, {
    method: "POST",
    body: JSON.stringify(finalData),
  });

  const postedData = await res.json();
  console.log(postedData);

  // Call resetForm here
  resetForm();
};

// Define resetForm in the same component
const resetForm = () => {
  setFormData({
    phone: "",
    date: "",
    address: "",
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Banner */}
      <section className="relative container mx-auto rounded-2xl h-96 overflow-hidden shadow-2xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900">
          <Image
            src="/assets/images/checkout/checkout.png"
            alt="Service Banner"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Check Out
            </h1>
            <div className="flex items-center space-x-3 text-lg">
              <span className="text-white/90">Home</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Checkout
              </span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-4">
            <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mt-4"></div>
          </div>
        </div>
      </section>

      {/* Service Title */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-blue-600 p-1 rounded-2xl shadow-lg">
          <div className="bg-white px-8 py-4 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Book Service: {data?.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Service Booking Form
              </h3>
              <p className="text-gray-500">
                Please fill out the details below to complete your booking
              </p>
            </div>

            {/* Actual Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    defaultValue={session?.user?.name}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    readOnly
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    defaultValue={session?.user?.email}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    readOnly
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600"
                  />
                </div>
              </div>

              {/* Price Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Price
                </label>
                <input
                  type="text"
                  name="dueAmount"
                  value={`$${data?.price || 0}`}
                  readOnly
                  className="w-full px-6 py-4 border-2 border-orange-200 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 font-bold text-lg"
                />
              </div>

              {/* Phone and Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Present Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl"
                />
              </div>

             

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold py-5 px-8 rounded-2xl"
                >
                  Order Confirm
                </button>
              </div>
            </form>
          </div>

          {/* Security Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
              <span className="text-sm font-medium">
                Secure & Protected Booking
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
