"use client";


import { Mail, Lock, Facebook, Linkedin, Chrome, Settings, Shield, User } from 'lucide-react';
import Link from 'next/link';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

export default function LoginPage() {


    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Side - Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
                <div className="relative max-w-md w-full">
                    {/* Background Elements */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-orange-300 rounded-full opacity-30"></div>
                    <div className="absolute -bottom-5 -right-5 w-16 h-16 border-2 border-orange-300 rounded-full opacity-30"></div>
                    
                    {/* Gear Icons */}
                    <Settings className="absolute top-10 right-20 w-8 h-8 text-orange-400 animate-spin" style={{animationDuration: '10s'}} />
                    <Settings className="absolute bottom-20 left-10 w-6 h-6 text-orange-300 animate-spin" style={{animationDuration: '15s'}} />
                    
                    {/* Main Illustration Container */}
                    <div className="relative">
                        {/* Computer/Device */}
                        <div className="relative bg-white border-4 border-orange-500 rounded-2xl p-6 shadow-lg transform rotate-3">
                            {/* Screen */}
                            <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                {/* Password dots */}
                                <div className="flex justify-center space-x-2 mb-4">
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                    <div className="w-3 h-3 bg-black rounded-full"></div>
                                </div>
                                
                                {/* Keypad */}
                                <div className="grid grid-cols-3 gap-2">
                                    {Array(9).fill(0).map((_, i) => (
                                        <div key={i} className="w-8 h-8 bg-white border border-gray-300 rounded"></div>
                                    ))}
                                </div>
                                
                                {/* Bottom section */}
                                <div className="mt-4 flex justify-center">
                                    <div className="w-12 h-4 bg-black rounded"></div>
                                </div>
                            </div>
                            
                            {/* Base */}
                            <div className="bg-gray-200 h-2 rounded-b-lg"></div>
                        </div>
                        
                        {/* Person silhouette */}
                        <div className="absolute -bottom-8 -left-8 z-10">
                            <div className="relative">
                                {/* Head */}
                                <div className="w-16 h-16 bg-black rounded-full mb-2"></div>
                                {/* Body */}
                                <div className="w-20 h-24 bg-black rounded-t-full"></div>
                                {/* Arms */}
                                <div className="absolute top-16 -right-2 w-12 h-4 bg-black rounded-full transform rotate-45"></div>
                                <div className="absolute top-20 right-8 w-8 h-3 bg-black rounded-full transform rotate-12"></div>
                            </div>
                        </div>
                        
                        {/* Security Shield */}
                        <div className="absolute -top-5 -left-12 bg-orange-500 rounded-full p-3 shadow-lg">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Decorative Settings Icon */}
                        <div className="absolute bottom-0 right-5 transform rotate-12">
                            <Settings className="w-8 h-8 text-gray-400" />
                        </div>
                        
                        {/* Arrow */}
                        <div className="absolute bottom-5 right-0 transform rotate-45">
                            <div className="w-8 h-0.5 bg-gray-400"></div>
                            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-400 ml-6"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Login</h2>
                        <p className="text-gray-600">Welcome back! Please sign in to your account</p>
                    </div>
                    
                    {/* Form */}
                    <LoginForm></LoginForm>
                    
                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-50 text-gray-500">Or Sign In with</span>
                        </div>
                    </div>
                    
                    {/* Social Login */}
                    <SocialLogin></SocialLogin>
                    
                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            Have an account? 
                            <Link href={'/register'} className="ml-1 text-orange-500 font-medium hover:text-orange-600">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
