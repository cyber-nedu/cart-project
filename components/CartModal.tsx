"use client";

import { useCart } from "../context/CardContext";
import OrderModal from "./OrderModal";
import { useState } from "react";

export default function CartModal({ close }: { close: () => void }) {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [orderOpen, setOrderOpen] = useState(false);


  return (
    <>
      
      <div className="fixed  inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">

        <div className="bg-white w-full max-w-md h-screen shadow-2xl flex flex-col transform transition-all animate-in slide-in-from-right duration-500 ease-out">

          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Your Cart</h2>
            <button onClick={close} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                <span className="text-5xl">🛒</span>
                <p className="text-lg">Your cart is feeling light.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 group animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="h-20 w-20 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex  justify-between flex-grow">
                    <div>
                      <h3 className="font-semibold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.quantity} x ${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-medium text-red-500 hover:text-red-700 underline underline-offset-4 cursor-pointer decoration-red-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="space-y-3">
              <button
                disabled={cart.length === 0}
                onClick={() => setOrderOpen(true)}
                className="w-full bg-slate-900 hover:bg-black disabled:bg-slate-300 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
              >
                Checkout Now
              </button>

              <button
                onClick={close}
                className="w-full text-slate-500 text-sm font-semibold py-2 hover:text-slate-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {orderOpen && <OrderModal close={() => { setOrderOpen(false); close(); }} />}
      </div>
    </>
  );
}