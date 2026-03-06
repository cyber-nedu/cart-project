"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        <div className="relative mb-12 flex justify-center">
          <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full animate-pulse" />

          <div className="relative">
            <div className="text-[120px] md:text-[160px] leading-none animate-bounce-slow">
              🍽️
            </div>
            <span className="absolute -top-4 -right-4 text-4xl animate-bounce">❓</span>
            <span className="absolute top-10 -left-10 text-3xl animate-float-delayed">🔍</span>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          <h1 className="text-8xl md:text-9xl font-black text-slate-200 absolute -top-20 left-1/2 -translate-x-1/2 -z-10 select-none">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Order <span className="text-orange-500">Misplaced!</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
            We checked the kitchen and the pantry, but we couldn't find the page you're looking for. It might have been eaten!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95"
            >
              Back to Menu
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all"
            >
              Try Refreshing
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-sm text-slate-400 font-medium uppercase tracking-widest mb-4">
            Maybe try one of these?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-600">
            <Link href="/popular" className="hover:text-orange-500 transition-colors">Popular Dishes</Link>
            <Link href="/offers" className="hover:text-orange-500 transition-colors">Special Offers</Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}