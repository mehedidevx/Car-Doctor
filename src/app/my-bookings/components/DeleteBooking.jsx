
import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteBooking({ id }) {
    const router = useRouter()
  const handleBooking = async () => {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service/${id}`,{
        method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh()
  };
  
  return (
    <div>
      {" "}
      <button
        onClick={() => handleBooking(id)}
        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
        title="Delete booking"
      >
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
      </button>
    </div>
  );
}
