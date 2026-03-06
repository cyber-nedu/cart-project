"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Contact Background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            We’re Hungry For <br /> <span className="text-orange-500">Your Feedback</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a question about an order, a dietary requirement, or just want to say hi? Our team is standing by.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1 space-y-6">
            {[
              { title: "Visit Us", detail: "123 Flavor Avenue, Food City, FC 456", icon: "📍", color: "bg-blue-50 text-blue-600" },
              { title: "Call Us", detail: "+1 (555) 000-FOOD", icon: "📞", color: "bg-green-50 text-green-600" },
              { title: "Email Us", detail: "hello@foodhub.com", icon: "✉️", color: "bg-orange-50 text-orange-600" },
              { title: "Work Hours", detail: "Mon - Sun: 9am - 10pm", icon: "⏰", color: "bg-purple-50 text-purple-600" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 flex items-center gap-6 group hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-inner`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/60 border border-slate-50 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20">
                {/* <div className="text-6xl mb-6">🎉</div> */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Message Received!</h2>
                <p className="text-slate-500">We'll get back to you faster than a pizza delivery.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-orange-500 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
                <form action="https://formsubmit.co/your@email.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full bg-slate-50 rounded-2xl px-6 pt-6 pb-3 outline-none focus:ring-4 focus:ring-orange-500/10"
                      />

                      <label
                        className="absolute left-6 top-3 text-slate-500 text-sm transition-all
                          peer-placeholder-shown:top-5
                          peer-placeholder-shown:text-base
                          peer-focus:top-3
                          peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full bg-slate-50 rounded-2xl px-6 pt-6 pb-3 outline-none focus:ring-4 focus:ring-orange-500/10"
                      />

                      <label
                        className="absolute left-6 top-3 text-slate-500 text-sm transition-all
                           peer-placeholder-shown:top-5
                           peer-placeholder-shown:text-base
                           peer-focus:top-3
                           peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                    </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Subject</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 transition-all">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Catering Request</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Message</label>
                  <textarea rows={5} required placeholder="Tell us everything..." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            )}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does delivery take?", a: "Most orders arrive within 30-45 minutes depending on your location." },
              { q: "Do you offer vegan options?", a: "Yes! Check our 'Healthy' category for a full list of vegan and vegetarian meals." },
              { q: "Can I cancel my order?", a: "Orders can be cancelled within 5 minutes of placement through the 'My Orders' tab." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-3xl p-6 border border-slate-100 cursor-pointer transition-all hover:shadow-md">
                <summary className="font-bold text-lg text-slate-800 flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-orange-500 transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <div className="text-4xl mb-2">📍</div>
            <p className="font-bold text-slate-400">Interactive Map Loading...</p>
            <p className="text-xs text-slate-400">123 Flavor Avenue, Food City</p>
          </div>
        </div>
        {/* If you have a Google Maps API Key, you can replace this div with an iframe */}
      </section>
    </main>
  );
}