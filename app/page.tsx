"use client";

import { foods } from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Home() {


  if (typeof window !== "undefined") {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal")

      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (top < windowHeight - 100) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", reveal)
  }
  return (
    <>
      <div className="overflow-x-hidden">
        <section className="relative min-h-[80vh] flex items-center bg-white">
          <div className="absolute top-0 right-0 -z-10 w-[50%] h-full bg-orange-50/50 rounded-bl-[100px] hidden lg:block " />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ">

            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>Now Delivering 24/7</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Deliciousness <br />
                <span className="text-orange-500">Delivered</span> to <br />
                Your Door.
              </h1>

              <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                Experience the finest local ingredients prepared by world-class chefs.
                Fresh, fast, and always flavorful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:scale-95">
                  Order Now
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all">
                  View Menu
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-slate-100 reveal">
                <div>
                  <p className="text-2xl font-bold">5k+</p>
                  <p className="text-sm text-slate-500">Happy Customers</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-slate-500">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <style>{`
    @keyframes slowFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    .animate-float {
      animation: slowFloat 5s ease-in-out infinite;
    }
  `}</style>

              <div className="relative w-full max-w-[500px] aspect-square animate-float">
                <div className="w-full h-full bg-gradient-to-tr from-orange-200 via-white to-orange-50 rounded-full overflow-hidden shadow-2xl border-[12px] border-white relative group">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                    alt="Delicious Bowl"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
                </div>

                <div className="absolute top-10 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-orange-100 transition-all duration-500 hover:-translate-y-2 cursor-default">
                  <p className="text-orange-500 font-bold flex items-center gap-2">
                    <span className="animate-pulse">🔥</span> Hot Deals
                  </p>
                </div>

                <div className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-green-100 transition-all duration-500 hover:-translate-y-2 cursor-default">
                  <p className="text-green-500 font-bold flex items-center gap-2">
                    <span>🥗</span> 100% Healthy
                  </p>
                </div>

                <div className="absolute -inset-4 bg-orange-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
              </div>
            </div>
          </div>
        </section> <br /><br />

        <section className="bg-slate-900 py-12 ">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Free Delivery', icon: '🚚' },
              { label: 'Secure Payment', icon: '💳' },
              { label: 'Best Quality', icon: '⭐' },
              { label: 'Fast Support', icon: '🎧' }
            ].map((feature, i) => (
              <div key={i} className="space-y-2">
                <span className="text-2xl">{feature.icon}</span>
                <p className="text-white font-medium text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Popular Dishes</h2>
              <div className="h-1 w-20 bg-orange-500 mt-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {foods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-64 bg-orange-100/30 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 ">
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Our Features</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why We Are The Best <br className="hidden md:block" /> In <span className="text-orange-500 underline decoration-orange-200 underline-offset-8">Food Delivery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="group p-10 rounded-[32px] bg-slate-50 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform">
                🛵
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Ultra Fast Delivery</h4>
              <p className="text-slate-500 leading-relaxed">
                Your food is our priority. We deliver within 30 minutes or the next meal is on us. Hot and fresh, every time.
              </p>
            </div>

            <div className="group p-10 rounded-[32px] bg-slate-50 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform">
                🌱
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Fresh Ingredients</h4>
              <p className="text-slate-500 leading-relaxed">
                We source directly from local farms. No preservatives, no frozen meat—just pure, organic goodness in every bite.
              </p>
            </div>

            <div className="group p-10 rounded-[32px] bg-slate-50 border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 transition-transform">
                📱
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Easy To Order</h4>
              <p className="text-slate-500 leading-relaxed">
                Our intuitive app and web interface make ordering a breeze. Customize your toppings and track your rider in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 relative overflow-hidden rounded-xl">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Our Mission</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                We Don’t Just Cook, <br />
                We Create <span className="text-orange-500">Memories.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Started in a small kitchen in 2015, our goal has always been simple:
                to provide high-quality, chef-inspired meals that anyone can enjoy at home.
                We believe food is a universal language that brings people together.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-white font-medium text-sm">Best App Award 2024</span>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3">
                  <span className="text-2xl">🌱</span>
                  <span className="text-white font-medium text-sm">Eco-Friendly Packaging</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-colors group">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">12k+</p>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-xs">Daily Orders</p>
              </div>

              <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-colors group translate-y-6">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">450+</p>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-xs">Expert Chefs</p>
              </div>

              <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-colors group">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">28+</p>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-xs">Cities Covered</p>
              </div>

              <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-colors group translate-y-6">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">99%</p>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-xs">Positive Reviews</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Step by Step</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Easy Way To <span className="text-orange-500">Order</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-dashed bg-slate-200 border-t-2 border-dashed border-slate-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

              <div className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center text-3xl mb-6 border-2 border-transparent group-hover:border-orange-500 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                  📍
                </div>
                <div className="absolute top-0 right-1/4 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Set Location</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Select your location to see restaurants delivering to your doorstep.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-3xl mb-6 border-2 border-transparent group-hover:border-blue-500 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                  🍔
                </div>
                <div className="absolute top-0 right-1/4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Choose Food</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Browse through our wide variety of dishes and add your favorites to cart.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center text-3xl mb-6 border-2 border-transparent group-hover:border-purple-500 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                  💳
                </div>
                <div className="absolute top-0 right-1/4 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Easy Payment</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Pay securely with Credit Card, PayPal, or Cash on Delivery.
                </p>
              </div>

              <div className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center text-3xl mb-6 border-2 border-transparent group-hover:border-green-500 group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                  🏠
                </div>
                <div className="absolute top-0 right-1/4 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">4</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Enjoy Meal</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Sit back and relax. Your hot meal will be at your door in 30 minutes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 ">Community Love</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Join <span className="text-orange-500">10,000+</span> Happy <br /> Daily Foodies
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4,].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex text-orange-400 text-sm">★★★★★</div>
                <p className="text-xs font-bold text-slate-900">4.9/5 Average Rating</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 group animate-in fadeIn slide-in-from-bottom-4 ">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=1" alt="User" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "The truffle pasta was absolutely divine! It arrived in 20 minutes, still steaming hot. I don't think I'll ever cook on Fridays again."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-md border border-orange-200 hover:shadow-2xl transition-all duration-300 lg:scale-105 relative z-10">
              <div className="absolute top-6 right-8 text-orange-500 text-4xl opacity-20 font-serif">"</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Marcus Thorne</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "Fastest delivery I've ever experienced. Usually, 'fast' means cold food, but these guys have mastered the logistics. 10/10!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=3" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Elena Rodriguez</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "Finally a delivery service that offers healthy options that actually taste good. The Quinoa Salad bowl is my new daily lunch."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=4" alt="User" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">David Chen</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "As a software engineer, I live on delivery. This app is by far the smoothest UI/UX I've used. Ordering takes less than 30 seconds."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=5" alt="User" width={48} height={48} /> 
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Aisha Khan</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "I ordered for a house party of 15 people. Every single dish was correct, labeled, and hot. Incredible service for large orders!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=6" alt="User" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">James Wilson</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "The rewards program is actually worth it. I've already earned two free meals just by ordering my usual weekly lunches."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=7" alt="User" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sofia G.</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "Best sushi delivery in the city. The packaging is premium and the fish is incredibly fresh. Highly recommend the Volcano Roll."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=8" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Robert Vance</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "I had an issue with a late rider once, and customer support fixed it in seconds with a full refund and a voucher. That's how you keep customers."
              </p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-100">
                  <img src="https://i.pravatar.cc/150?u=9" alt="User" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Linda Wu</h4>
                  <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</span>
                    Verified Foodie
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "The curated 'Healthy Picks' section has made my diet so much easier to stick to. No more searching for calories—it's all right there."
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-900 rounded-[40px] p-8 md:p-20 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                  Ready to taste the <br />
                  <span className="text-orange-500 text-glow">Difference?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0">
                  Join thousands of happy foodies. Your first delivery is on us when you sign up today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                    Get Started Now
                  </button>
                  <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all">
                    Contact Sales
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px]">
                <h3 className="text-xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
                <p className="text-slate-400 text-sm mb-6">Weekly recipes, discounts, and food news.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500 transition-all"
                  />
                  <button className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-orange-50 transition-all active:scale-[0.98]">
                    Join the Hub
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-24 pb-12 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="relative bg-slate-900 rounded-[48px] p-8 md:p-16 overflow-hidden shadow-2xl shadow-slate-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                  Get <span className="text-orange-500">20% Off</span> Your <br /> First Order!
                </h2>
                <p className="text-slate-400 text-lg">
                  Join our newsletter and stay updated with new dishes, exclusive offers, and local food news.
                </p>
              </div>

              <form className="w-full max-w-md group" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 focus-within:border-orange-500/50 transition-all">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
                    required
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-500/20">
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-xs text-slate-500 text-center lg:text-left">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 flex flex-col items-center justify-center space-y-6">

        <p className="text-sm text-slate-500 font-medium">
          Showing <span className="text-slate-900 font-bold">1</span> to <span className="text-slate-900 font-bold">8</span> of <span className="text-slate-900 font-bold">48</span> dishes
        </p>

        <nav className="flex items-center gap-2">
          <button className="flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 active:scale-90 disabled:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2 px-2">
            <button className="w-12 h-12 rounded-2xl bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 transition-all active:scale-95">
              1
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:border-orange-500 hover:text-orange-500 transition-all active:scale-95 hidden sm:flex items-center justify-center">
              2
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:border-orange-500 hover:text-orange-500 transition-all active:scale-95 hidden sm:flex items-center justify-center">
              3
            </button>

            <span className="w-8 text-center text-slate-400 font-bold">...</span>

            <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:border-orange-500 hover:text-orange-500 transition-all active:scale-95 flex items-center justify-center">
              12
            </button>
          </div>

          <button className="flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-200 bg-white text-slate-600 hover:border-orange-500 hover:text-orange-500 transition-all duration-200 active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>

        <div className="pt-4 flex items-center gap-3">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Jump To</span>
          <input
            type="number"
            placeholder="Page"
            className="w-16 p-2 rounded-xl border border-slate-200 bg-white text-sm focus:border-orange-500 outline-none transition-all"
          />
        </div>
      </div>

      
    </>
  );
};