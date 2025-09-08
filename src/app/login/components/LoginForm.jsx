"use client";

import React from "react";
import { Mail, Lock } from "lucide-react";
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



export default function LoginForm() {
  const router = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    toast("Submitting...")
   try {
    const response =  await signIn("credentials", { email, password, callbackUrl: "/" , redirect: false});
    if(response.ok){
      router.push("/");
      toast.success("Login successful!")
      e.target.reset();
    }else {
      toast.error("Login failed")
    }
    
    //  console.log(email, password)
   } catch (error) {
    console.log(error)
     alert("Login failed: " + error.message);
   }

    
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
}
