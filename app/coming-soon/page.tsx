"use client"
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Home Button */}
            <Link 
                href="/" 
                className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-primary hover:bg-white transition-all duration-200 shadow-lg"
            >
                <Home size={20} />
                <span>Back to Home</span>
            </Link>

            <div className="max-w-md w-full mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center">
                <div className="relative h-16 w-auto mx-auto mb-6">
                    <Image 
                        src="/logo/logo.png" 
                        alt="Pixel Animation" 
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                    Coming Soon
                </h2>
                <div className="flex items-center justify-center mb-6">
                    <div className="w-7 bg-secondary h-0.5"></div>
                    <div className="w-[10px] h-[10px] bg-secondary rotate-45"></div>
                    <span className="ml-3 text-gray-600">FEATURE IN DEVELOPMENT</span>
                </div>
                <p className="text-gray-600 mb-8">
                    We're working hard to bring you this feature. Please check back soon!
                </p>
                <Link 
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
} 