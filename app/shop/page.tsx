"use client";

import { useState } from "react";
import { useCart } from "../../context/CardContext";

const foods = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 12,
    category: "burger",
    image: "/images/burger1.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 18,
    category: "pizza",
    image: "/images/pizza1.jpg",
  },
  {
    id: 3,
    name: "Chicken Shawarma",
    price: 10,
    category: "shawarma",
    image: "/images/shawama6.jpg",
  },
  {
    id: 4,
    name: "Ice Cream",
    price: 8,
    category: "dessert",
    image: "/images/dessert1.jpg",
  },
  {
    id: 5,
    name: "Fried Chicken",
    price: 14,
    category: "chicken",
    image: "/images/fried-chick1.jpg",
  },
  {
    id: 6,
    name: "Veggie Pizza",
    price: 16,
    category: "pizza",
    image: "/images/pizza2.jpg",
  },
  {
    id: 7,
    name: "Grilled Chicken",
    price: 15,
    category: "chicken",
    image: "/images/fried-chick6.jpg",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    price: 9,
    category: "dessert",
    image: "/images/dessert2.jpg",
  },
  {
    id: 9,
    name: "Double Burger",
    price: 14,
    category: "burger",
    image: "/images/burger2.jpg",
  },
  {
    id: 10,
    name: "Chicken Shawarma Wrap",
    price: 11,
    category: "shawarma",
    image: "/images/shawama2.jpg",
  },
  {
    id: 11,
    name: "Margherita Pizza",
    price: 17,
    category: "pizza",
    image: "/images/pizza3.jpg",
  },
  {
    id: 12,
    name: "Spicy Chicken Wings",
    price: 13,
    category: "chicken",
    image: "/images/fried-chick2.jpg",
  },
  {
    id: 13,
    name: "Strawberry Cheesecake",
    price: 10,
    category: "dessert",
    image: "/images/dessert3.jpg",
  },
  {
    id: 14,
    name: "Bacon Burger",
    price: 13,
    category: "burger",
    image: "/images/burger3.jpg",
  },
  {
    id: 15,
    name: "Chicken Shawarma Plate",
    price: 12,
    category: "shawarma",
    image: "/images/shawama4.jpg",
  },
  {
    id: 16,
    name: "BBQ Chicken Pizza",
    price: 19,
    category: "pizza",
    image: "/images/pizza4.jpg",
  },
  {
    id: 17,
    name: "Chocolate Tart",
    price: 9,
    category: "dessert",
    image: "/images/dessert4.jpg",
  },
  {
    id: 18,
    name: "Veggie Burger",
    price: 11,
    category: "burger",
    image: "/images/burger4.jpg",
  },
  {
    id: 19,
    name: "Chicken Shawarma Sandwich",
    price: 10,
    category: "shawarma",
    image: "/images/shawama5.jpg",
  },
  {
    id: 20,
    name: "Pepperoni Pizza Slice",
    price: 5,
    category: "pizza",
    image: "/images/pizza5.jpg",
  },
  {
    id: 21,
    name: "Fried Chicken Drumsticks",
    price: 12,
    category: "chicken",
    image: "/images/fried-chick3.jpg",
  },
  {
    id: 22,
    name: "Vanilla Ice Cream",
    price: 7,
    category: "dessert",
    image: "/images/dessert5.jpg",
  },
  {
    id: 23,
    name: "Mushroom Burger",
    price: 12,
    category: "burger",
    image: "/images/burger5.jpg",
  },
  {
    id: 24,
    name: "Chicken Shawarma Platter",
    price: 13,
    category: "shawarma",
    image: "/images/shawama3.jpg",
  },
  {
    id: 25,
    name: "Supreme Pizza",
    price: 20,
    category: "pizza",
    image: "/images/pizza6.jpg",
  },
  {
    id: 26,
    name: "Grilled Chicken Salad",
    price: 14,
    category: "chicken",
    image: "/images/fried-chick4.jpg",
  },
  {
    id: 27,
    name: "Lemon Tart",
    price: 8,
    category: "dessert",
    image: "/images/dessert6.jpg",
  },
  {
    id: 28,
    name: "BBQ Bacon Burger",
    price: 14,
    category: "burger",
    image: "/images/burger6.jpg",
  },
  {
    id: 29,
    name: "Chicken Shawarma Bowl",
    price: 12,
    category: "shawarma",
    image: "/images/shawama6.jpg",
  },
  {
    id: 30,
    name: "Four Cheese Pizza",
    price: 18,
    category: "pizza",
    image: "/images/pizza6.jpg",
  },
  {
    id: 31,
    name: "Spicy Fried Chicken",
    price: 15,
    category: "chicken",
    image: "/images/fried-chick5.jpg",
  },
  {
    id: 32,
    name: "Carrot Cake",
    price: 9,
    category: "dessert",
    image: "/images/dessert7.jpg",
  },
  {
    id: 33,
    name: "Avocado Burger",
    price: 13,
    category: "burger",
    image: "/images/burger7.jpg",
  },
  {
    id: 34,
    name: "Chicken Shawarma Wrap",
    price: 11,
    category: "shawarma",
    image: "/images/shawama7.jpg",
  },
  {
    id: 35,
    name: "Veggie Pizza Slice",
    price: 6,
    category: "pizza",
    image: "/images/pizza7.jpg",
  },
  {
    id: 36,
    name: "Honey Glazed Chicken",
    price: 16,
    category: "chicken",
    image: "/images/fried-chick6.jpg",
  },
  {
    id: 37,
    name: "Blueberry Muffin",
    price: 7,
    category: "dessert",
    image: "/images/dessert8.jpg",
  },
  {
    id: 38,
    name: "Double Bacon Burger",
    price: 15,
    category: "burger",
    image: "/images/burger8.jpg",
  },
  {
    id: 39,
    name: "Chicken Shawarma Sandwich",
    price: 10,
    category: "shawarma",
    image: "/images/shawama8.jpg",
  },
  {
    id: 40,    name: "Margarita Pizza",
    price: 17,
    category: "pizza",
    image: "/images/pizza8.jpg",
  },
  {
    id: 41,
    name: "Crispy Fried Chicken",
    price: 14,
    category: "chicken",
    image: "/images/fried-chick8.jpg",
  },
  {
    id: 42,
    name: "Chocolate Brownie",
    price: 8,
    category: "dessert",
    image: "/images/dessert9.jpg",
  },
  {
    id: 43,
    name: "Mushroom Swiss Burger",
    price: 14,
    category: "burger",
    image: "/images/burger9.jpg",
  },
  {
    id: 44,
    name: "Chicken Shawarma Plate",
    price: 12,
    category: "shawarma",
    image: "/images/shawama9.jpg",
  },
  {
    id: 45,
    name: "Pepperoni Pizza",
    price: 18,
    category: "pizza",
    image: "/images/pizza9.jpg",
  },
  {
    id: 46,
    name: "Garlic Parmesan Chicken",
    price: 15,
    category: "chicken",
    image: "/images/fried-chick10.jpg",
  },
  {
    id: 47,
    name: "Strawberry Shortcake",
    price: 9,
    category: "dessert",
    image: "/images/dessert10.jpg",
  },
  {
    id: 48,
    name: "BBQ Burger",
    price: 13,
    category: "burger",
    image: "/images/burger10.jpg",
  },
  {
    id: 49,
    name: "Chicken Shawarma Wrap",
    price: 11,
    category: "shawarma",
    image: "/images/shawama10.jpg",
  },
  {
    id: 50,
    name: "Supreme Drinks",
    price: 20,
    category: "pizza",
    image: "/images/drink4.jpg",
  },
  {
    id: 51,
    name: "Champagne",
    price: 13,
    category: "chicken",
    image: "/images/drink7.jpg",
  },
  {
    id: 52,
    name: "Lemon Meringue Pie",
    price: 8,
    category: "dessert",
    image: "/images/dessert11.jpg",
  },
  {
    id: 53,
    name: "Coca-Cola",
    price: 11,
    category: "burger",
    image: "/images/drink1.jpg",
  },
  {
    id: 54,
    name: "Coffe",
    price: 12,
    category: "shawarma",
    image: "/images/drink2.jpg",
  },
  {
    id: 55,
    name: "Hot Drink",
    price: 18,
    category: "pizza",
    image: "/images/drink8.jpg",
  },
  {
    id: 56,
    name: "Venetta Wine",
    price: 15,
    category: "chicken",
    image: "/images/drink11.jpg",
  },
  {
    id: 57,
    name: "Rice and Chicken",
    price: 9,
    category: "dessert",
    image: "/images/rice1.jpg",
  },
  {
    id: 58,
    name: "Pasta",
    price: 13,
    category: "burger",
    image: "/images/pasta1.jpg",
  },
  {
    id: 59,
    name: "Macarroni",
    price: 11,
    category: "shawarma",
    image: "/images/pasta2.jpg",
  },
  {
    id: 60,
    name: "Noodles",
    price: 6,
    category: "pizza",
    image: "/images/pasta3.jpg",
  }
];

export default function Shop() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("all");

  const filteredFoods =
    category === "all"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <main className="pb-20 min-h-screen bg-slate-50">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="Hero Background"
            className="object-cover opacity-40 scale-105 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-50" />
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-bounce [animation-duration:5s]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full animate-bounce [animation-duration:3s]">
            Premium Quality
          </span>

          <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
            Our <span className="text-orange-500 inline-block hover:scale-110 transition-transform cursor-default">Food Shop</span>
          </h1>

          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our delicious menu and order your favorite meals
          </p>

          <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 hidden md:block">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section> <br /><br /><br />

      <div className="relative z-20 -mt-10 flex justify-center flex-wrap gap-4 mb-20 px-6">
        {["all", "burger", "pizza", "shawarma", "dessert", "chicken"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform active:scale-90 shadow-xl backdrop-blur-md ${category === cat
                  ? "bg-orange-500 text-white scale-110 ring-4 ring-orange-500/20"
                  : "bg-white/80 text-slate-700 hover:bg-orange-100"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          )
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-slate-100"
          >
            <div className="relative h-64">
              <img
                src={food.image}
                alt={food.name}
                className="object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium">Quick Delivery Available</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{food.name}</h3>
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-lg font-bold">
                  {food.category}
                </span>
              </div>

              <p className="text-orange-500 text-3xl font-black mb-6">
                ${food.price}
              </p>

              <button
                onClick={() => addToCart(food)}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <span>Add to Cart</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}