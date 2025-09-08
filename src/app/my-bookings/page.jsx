// "use client";

import BookingTable from "@/components/BookingTable";
import { headers } from "next/headers";

const fetchMyBookings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service`,{
    headers: headers(),
  });
  const d = await res.json();
  console.log(d)
  return d;
};

export default async function MyBookings() {
    const bookings = await fetchMyBookings();
    console.log(bookings)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative py-10 h-79 container mx-auto my-4 rounded-md bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><defs><pattern id="automotive" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23333"/><circle cx="25" cy="25" r="15" fill="%23555" opacity="0.7"/><rect x="50" y="15" width="35" height="20" rx="3" fill="%23555" opacity="0.7"/><polygon points="15,70 35,70 25,85" fill="%23555" opacity="0.7"/><circle cx="70" cy="70" r="8" fill="%23555" opacity="0.5"/></pattern></defs><rect width="1200" height="400" fill="url(%23automotive)"/></svg>')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Bookings
          </h1>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-white hover:text-orange-400 cursor-pointer transition-colors">
              Home
            </span>
            <span className="text-orange-500">•</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-medium">
              My Bookings
            </span>
          </div>
        </div>
      </div>

      {/* Bookings Section */}
      <div className="container mx-auto  py-12">
        <div className="container mx-auto">
          {/* Header Stats */}

          {/* Bookings List */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Service Bookings
              </h2>
              <p className="text-gray-600 mt-1">
                Manage and track your service appointments
              </p>
            </div>
            {/* booking table */}
            <BookingTable bookings={bookings}></BookingTable>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Continue Browsing</span>
            </button>

            <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span>Clear All Bookings</span>
            </button>
          </div>

          {/* Summary Card */}
          <div className="mt-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Need Help with Your Bookings?
                </h3>
                <p className="text-white/90">
                  Contact our support team for assistance with your service
                  appointments
                </p>
              </div>
              <button className="mt-4 sm:mt-0 bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Contact Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
