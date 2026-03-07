"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CardContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); 

    return () => clearTimeout(timer);
  }, []);



  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f9fafb] text-slate-900 antialiased">

        {isLoading && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-orange-500 backdrop-blur-xl transition-opacity duration-500">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-slate-800 tracking-tight animate-pulse">
                  FoodHub
                </p>
                <p className="text-xs text-white uppercase tracking-[0.3em] mt-1">
                  Established 2024
                </p>
              </div>
            </div>
          </div>
        )}

        <CartProvider>
          <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
            <Navbar />
          </nav>

          <main className={`flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {children}
          </main>

          <footer className="w-full bg-white border-t border-slate-200 mt-auto">
            <Footer />
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}