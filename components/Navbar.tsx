"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import CartModal from "./CartModal";
import { useCart } from "../context/CardContext";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [emptyCartWarning, setEmptyCartWarning] = useState(false);

  const { cart } = useCart();

  const handleCartClick = () => {
    if (cart.length === 0) {
      setEmptyCartWarning(true); 
    } else {
      setCartOpen(true); 
    }
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h3 className="text-2xl font-black tracking-tighter text-slate-900">
              FOOD<span className="text-orange-500">HUB.</span>
            </h3>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative font-medium transition-all duration-300 ${isActive ? "text-black" : "text-gray-500 hover:text-black"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            <button onClick={handleCartClick} className="relative">
              <ShoppingCart className="w-6 h-6 text-black" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium ${isActive ? "text-black" : "text-gray-500"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {cartOpen && <CartModal close={() => setCartOpen(false)} />}

      {emptyCartWarning && (        
        <div className=" inset-0 z-2 flex items-center justify-center bg-orange-500 backdrop-blur-md animate-in fade-in duration-300 h-screen">

          <div className="relative bg-white w-full max-w-[340px] p-8 rounded-2xl shadow-2xl text-center mx-4 transform transition-all animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-out">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-500 animate-pulse"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status-icon-path-here" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Your cart is empty
            </h2>

            <p className="mt-3 text-slate-500 leading-relaxed">
              Looks like you haven't added anything to your bag yet.
            </p>

            <button
              onClick={() => setEmptyCartWarning(false)}
              className="mt-8 w-full bg-slate-900 hover:bg-black text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg active:scale-[0.97] transition-all duration-200"
            >
              Start Shopping
            </button>

            <button
              onClick={() => setEmptyCartWarning(false)}
              className="mt-4 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}