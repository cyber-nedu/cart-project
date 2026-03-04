"use client";

import { useCart } from "../context/CardContext";


export default function OrderModal({ close }: { close: () => void }) {
  const { totalPrice, clearCart } = useCart();

  const handleConfirm = () => {
    clearCart();
    close();
  };

  return (
    <>
      <div className="z-50 inset-0 fixed flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 h-screen">

        <div className="relative bg-white w-full max-w-[380px] p-8 rounded-2xl shadow-2xl text-center mx-4 transform transition-all animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 ease-out">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <span className="text-3xl animate-bounce"> <img src="/images/confirm.png" alt="" /></span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Order Confirmed
          </h2>

          <p className="mt-2 text-slate-500">
            Thank you for your purchase! Your items are on the way.
          </p>

          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Total Paid</span>
            <p className="text-3xl font-extrabold text-slate-900">${totalPrice.toFixed(2)}</p>
          </div>

          <button
            onClick={handleConfirm}
            className="mt-8 w-full bg-slate-900 hover:bg-black text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
          >
            Continue Shopping
          </button>

          <p className="mt-4 text-xs text-slate-400">
            A receipt has been sent to your email.
          </p>
        </div>
      </div>
    </>
  );
}
