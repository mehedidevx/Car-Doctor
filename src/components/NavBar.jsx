"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ModernDropdown from "./Dropdown";

export default function NavBar() {
  const { data: session, status } = useSession();
  console.log(session);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navMenu = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "My-Bookings", href: "/my-bookings" },
    { id: 5, label: "Blog", href: "/blog" },
    { id: 6, label: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={` transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between py-4">
          
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-lg">
                  <Image 
                    src="/assets/logo.svg" 
                    width={40} 
                    height={40} 
                    alt="Logo"
                    className="transition-transform group-hover:rotate-3"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  AutoService
                </h1>
                <p className="text-xs text-gray-500">Professional Care</p>
              </div>
            </Link>
          </div>

          {/* Center Section - Desktop Navigation */}
          <div className="hidden lg:flex">
            <ul className="flex items-center space-x-1">
              {navMenu.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors duration-200 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Auth & Actions */}
          <div className="flex items-center space-x-3">
            
           

            {/* Authentication Buttons */}
            {status === "authenticated" ? (
              <div className="flex items-center space-x-3">
                <ModernDropdown />
                
               
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  href="/login"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-orange-500 rounded-xl transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Login</span>
                </Link>
                
               
              </div>
            )}

            {/* Appointment Button */}
            <Link
              href="/appointment"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium hidden sm:inline">Appointment</span>
            </Link>
             {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-colors duration-200 flex items-center space-x-3"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full"></span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              {status === "authenticated" ? (
                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="mt-4 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-200 flex items-center space-x-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Log Out</span>
                </button>
              ) : (
                <div className="mt-4 space-y-2">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-colors duration-200 flex items-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-medium">Login</span>
                  </Link>
                  
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl transition-all duration-200 flex items-center space-x-3 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="font-medium">Register</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Overlay for Mobile */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}