"use client";

import { useCart } from "../context/CardContext";
import Image from "next/image"

export default function FoodCard({ food }: { food: { id: number; name: string; price: number; image: string } }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <Image
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">{food.name}</h3>
      <p className="text-gray-600">${food.price}</p>
      <button
        onClick={() => addToCart(food)}
        className="flex items-center justify-center gap-2 w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
      >
       <Image src="/images/cart.png" alt=" Cart-icon" /> Add to Cart
      </button>
    </div>
  );
}