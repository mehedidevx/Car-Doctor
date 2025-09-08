"use client"

import DeleteBooking from "@/app/my-bookings/components/DeleteBooking";
import React, { useState } from "react";

// Status color helper
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "confirmed":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "canceled":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

// Sample data for demonstration
const sampleBookings = [
  {
    id: 1,
    service_name: "Premium Car Wash",
    service_img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
    service_price: 45,
    date: "2024-03-15",
    status: "confirmed",
    color: "Blue",
    size: "Large"
  },
  {
    id: 2,
    service_name: "Interior Cleaning",
    service_img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop",
    service_price: 25,
    date: "2024-03-18",
    status: "pending",
    color: "Red",
    size: "Medium"
  },
  {
    id: 3,
    service_name: "Full Detail Service",
    service_img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=100&h=100&fit=crop",
    service_price: 120,
    date: "2024-03-20",
    status: "canceled",
    color: "White",
    size: "Large"
  }
];

// Placeholder functions
const updateBooking = (id) => {
  console.log("Update booking with id:", id);
};

const deleteBooking = (id) => {
  console.log("Delete booking with id:", id);
};

export default function BookingTable({ bookings }) {
  console.log(bookings)


  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      
    

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Service
              </th>
             
              <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Price
              </th>
             
              <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Status
              </th>
              <th className="text-center py-4 px-6 font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-12">
                  <div className="flex flex-col items-center">
                    <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No bookings found</h3>
                    <p className="text-gray-500">Get started by creating your first booking</p>
                  </div>
                </td>
              </tr>
            ) : (
              bookings.map((booking, index) => (
                <tr key={booking.id || booking._id} className="hover:bg-gray-50 transition-all duration-200">
                  {/* Service Column */}
                  <td className="py-6 px-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm">
                          {booking.service_img ? (
                            <img
                              src={booking.service_img}
                              alt={booking.service_name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 truncate">
                          {booking.service_name || "Unknown Service"}
                        </h4>
                       
                      </div>
                    </div>
                  </td>

                 

                  {/* Price Column */}
                  <td className="py-6 px-6 text-center">
                    <div className="font-bold text-xl text-gray-900">
                      ${booking.service_price || 0}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Service Fee</div>
                  </td>

                  

                  {/* Status Column */}
                  <td className="py-6 px-6 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                      <span className={`w-2 h-2 rounded-full mr-2 ${booking.status?.toLowerCase() === 'confirmed' ? 'bg-emerald-600' : 
                        booking.status?.toLowerCase() === 'pending' ? 'bg-amber-600' : 'bg-red-600'}`}></span>
                      {booking.status || "Pending"}
                    </span>
                  </td>

                  {/* Actions Column */}
                  <td className="py-6 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      {/* Update Button */}
                      <button
                        onClick={() => updateBooking(booking.id || booking._id)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                        title="Edit booking"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>

                      {/* Delete Button */}
                      <DeleteBooking id={booking._id}></DeleteBooking>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {bookings.length > 0 && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {bookings.length} booking{bookings.length !== 1 ? 's' : ''}
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}