"use client";
import {
  Mail,
  Lock,
  Facebook,
  Linkedin,
  Chrome,
  Settings,
  Shield,
  User,
  Github,
} from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin =(providerName) => {
    signIn(providerName);
  
  };
  useEffect(()=> {
    if(session?.status === "authenticated"){
        router.push("/");
        toast.success("Login successful!")
    }
  }, [session?.status])
  return (
    <div className="flex justify-center space-x-4">
      {/* Google */}
      <button
        type="button"
        onClick={(e) => handleSocialLogin("google", e)}
        className="p-3 border cursor-pointer border-gray-300 rounded-full hover:bg-red-50 hover:border-red-300 transition-colors"
      >
        <Chrome className="w-5 h-5 text-red-500" />
      </button>

      {/* GitHub */}
      <button
        type="button"
        onClick={(e) => handleSocialLogin("github", e)}
        className="p-3 border cursor-pointer border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        <Github className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
}
