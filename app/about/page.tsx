export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-tight">
              Crafting <span className="text-orange-500">Sweet Moments</span> Since 2010
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Welcome to our food shop! We are passionate about creating delicious and beautiful treats that bring joy to our customers. Our team of skilled chefs use only the finest ingredients to craft a wide variety of meals.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <h4 className="text-3xl font-black text-slate-900">15k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-slate-900">12+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Awards Won</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-slate-900">100%</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Organic</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50" />

            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                alt="Our Kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-gray-50">
              <p className="text-orange-500 font-black text-5xl">14</p>
              <p className="text-slate-700 font-bold uppercase text-xs tracking-tighter">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Ingredients",
                desc: "We source everything locally to ensure the highest quality and flavor in every bite.",
                icon: "🌿"
              },
              {
                title: "Expert Chefs",
                desc: "Our team consists of award-winning pastry chefs with decades of combined experience.",
                icon: "👨‍🍳"
              },
              {
                title: "Fast Delivery",
                desc: "We ensure your orders reach you fresh and beautiful, right at your doorstep.",
                icon: "🚚"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 bg-slate-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to taste the magic?</h2>
          <p className="text-slate-300 mb-10 text-lg">Browse our shop and find your new favorite dessert today.</p>
          <a href="/shop" className="inline-block bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95">
            Visit the Shop
          </a>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-70 animate-pulse" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="images/cooking.jpg"
                    className="rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500"
                    alt="Prepping"
                  />
                  <img
                    src="images/cooking2.jpg"
                    className="rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500"
                    alt="Cooking"
                  />
                </div>
                <div className="pt-12 space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=500&auto=format&fit=crop"
                    className="rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-500"
                    alt="Plating"
                  />
                  <div className="bg-gray-800 rounded-[2rem] p-8 text-white shadow-xl flex flex-col justify-center items-center text-center aspect-square">
                    <span className="text-4xl mb-2">✨</span>
                    <p className="font-bold">Magic in every bite</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">How we do it</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-10 leading-tight">
                From our kitchen to <br /> <span className="text-orange-500">your doorstep</span>
              </h2>

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Quality Sourcing",
                    desc: "We select only the freshest, organic ingredients from local farmers every morning."
                  },
                  {
                    step: "02",
                    title: "Masterful Crafting",
                    desc: "Our award-winning chefs blend traditional techniques with modern culinary creativity."
                  },
                  {
                    step: "03",
                    title: "Eco-Friendly Packing",
                    desc: "We use sustainable, heat-retaining packaging to ensure your food arrives perfectly."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-xl font-black text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-8">

            <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] group-hover:bg-orange-500/30 transition-colors duration-700" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Get the <span className="text-orange-500">Secret Menu</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md">
                  Be the first to know about our "Midnight Specials" and limited-edition dessert drops. No spam, just flavor.
                </p>

                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-orange-500/20">
                    Subscribe
                  </button>
                </form>
                <p className="text-slate-500 text-xs mt-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  1,240 people joined this week
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-orange-50 rounded-[3rem] p-10 flex flex-col justify-between border border-orange-100 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Hungry on the go?</h3>
                <p className="text-slate-600 mb-6">Download our app for 1-tap ordering and real-time delivery tracking.</p>

                <div className="flex gap-3">
                  <div className="h-10 w-28 bg-slate-900 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-[10px] text-white font-bold">App Store</span>
                  </div>
                  <div className="h-10 w-28 bg-slate-900 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <span className="text-[10px] text-white font-bold">Google Play</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-64 bg-white rounded-3xl shadow-2xl border-4 border-slate-900 rotate-12 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="App Preview" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="text-3xl font-black text-slate-900">Follow the <span className="text-orange-500">#FoodMagic</span></h3>
                <p className="text-slate-500 mt-2">Tag us in your photos for a chance to be featured!</p>
              </div>
              <a href="#" className="text-orange-500 font-bold hover:underline">@FoodHub_Official</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1484723088339-fe2a7a8f1d45?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1476224484767-4c991e09a10e?q=80&w=400&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-3xl overflow-hidden relative group cursor-pointer">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Insta Post" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-2xl">❤️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}