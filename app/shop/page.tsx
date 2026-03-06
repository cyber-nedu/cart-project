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
    name: "Shawarma Roll",
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
    name: "Gyros Shawarma ",
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
    name: "Spicy Shawarma",
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
    name: "Falafel Shawarma",
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
    name: "Sandwich Shawama",
    price: 10,
    category: "shawarma",
    image: "/images/shawama8.jpg",
  },
  {
    id: 40, name: "Margarita Pizza",
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
    name: "Full Shawama",
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
    price: 23,
    category: "shawarma",
    image: "/images/shawama10.jpg",
  },
  {
    id: 50,
    name: "Supreme Drinks",
    price: 20,
    category: "dessert",
    image: "/images/drink4.jpg",
  },
  {
    id: 51,
    name: "Champagne",
    price: 13,
    category: "dessert",
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
    category: "dessert",
    image: "/images/drink1.jpg",
  },
  {
    id: 54,
    name: "Coffe",
    price: 12,
    category: "dessert",
    image: "/images/drink2.jpg",
  },
  {
    id: 55,
    name: "Hot Drink",
    price: 18,
    category: "dessert",
    image: "/images/drink8.jpg",
  },
  {
    id: 56,
    name: "Venetta Wine",
    price: 15,
    category: "dessert",
    image: "/images/drink11.jpg",
  },
  {
    id: 57,
    name: "Rice and Chicken",
    price: 9,
    category: "starch",
    image: "/images/rice1.jpg",
  },
  {
    id: 58,
    name: "Pasta",
    price: 13,
    category: "starch",
    image: "/images/pasta1.jpg",
  },
  {
    id: 59,
    name: "Macarroni",
    price: 11,
    category: "starch",
    image: "/images/pasta2.jpg",
  },
  {
    id: 60,
    name: "Noodles",
    price: 6,
    category: "starch",
    image: "/images/pasta3.jpg",
  }
];

export default function Shop() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("all");
  const [selectedFood, setSelectedFood] = useState<typeof foods[0] | null>(null);


  const filteredFoods =
    category === "all"
      ? foods
      : foods.filter((food) => food.category === category);


  return (
    <>
      
      {selectedFood && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fadeIn"
          onClick={() => setSelectedFood(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scaleIn"
          >
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-black text-slate-800 mb-2">
                {selectedFood.name}
              </h2>

              <p className="text-slate-500 mb-6">
                Delicious freshly prepared {selectedFood.category} made with
                premium ingredients and delivered hot and fast.
              </p>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-orange-500">
                  ${selectedFood.price}
                </span>

                <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-xl text-sm font-bold">
                  {selectedFood.category}
                </span>
              </div>

              <button
                onClick={() => {
                  addToCart(selectedFood);
                  setSelectedFood(null);
                }}
                className="w-full py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => setSelectedFood(null)}
                className="w-full mt-3 py-3 text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      
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
          {["all", "burger", "pizza", "shawarma", "dessert", "chicken", "starch"].map(
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

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFoods.map((food) => (
            <div
              // key={food.id}
              // className="group bg-white rounded-[2.5rem] p-4 pb-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(255,115,0,0.15)] border border-transparent hover:border-orange-100 flex flex-col h-full"


              key={food.id}
              onClick={() => setSelectedFood(food)}
              className="cursor-pointer group bg-white rounded-[2.5rem] p-4 pb-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(255,115,0,0.15)] border border-transparent hover:border-orange-100 flex flex-col h-full"
            >

              <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] bg-slate-100">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-tighter text-orange-600">
                    {food.category}
                  </p>
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <p className="text-white font-bold mb-4">Quick Delivery Available</p>
                </div>
              </div>

              <div className="px-2 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-black text-slate-800 mb-1 group-hover:text-orange-500 transition-colors">
                  {food.name}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-xs text-slate-400 line-through">$ {food.price + 5}</span>
                    <span className="text-2xl font-black text-slate-900">${food.price}</span>
                  </div>
                  {/* 
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(food);
                  }} */}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(food);
                    }}
                    className="w-full py-4 bg-gray-800 text-white rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 overflow-hidden relative group/btn"
                  >
                    <span className="relative z-10">Add to Bag</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}