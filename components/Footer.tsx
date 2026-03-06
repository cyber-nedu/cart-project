import { Github, Instagram, TwitterIcon, Youtube } from "lucide-react";
const icons = [
  { icon: <Github />, url: "https://cyber-nedu" },
  { icon: <Instagram />, url: "https://www.instagram.com/cyber_nedu/" },
  { icon: <TwitterIcon />, url: "https://twitter.com/cyber_nedu" },
  { icon: <Youtube />, url: "https://www.youtube.com/@cybernedu" },
];

export default function Footer() {
  return (
      <footer className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16">

          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-black tracking-tighter text-slate-900">
              FOOD<span className="text-orange-500">HUB.</span>
            </h3>
            <p className="text-slate-500 max-w-xs leading-relaxed">
              Bringing the best flavors from local kitchens straight to your doorstep. Freshness guaranteed in every bite.
            </p>
          <div className="flex gap-4">
            {icons.map(({ icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {icon}
              </a>
            ))}
          </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Popular Dishes</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Healthy Picks</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Offers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Our Chefs</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Delivery Area</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
        <p className="text-sm text-slate-400 font-medium">
          © {new Date().getFullYear()} FoodHub Inc. Built with ❤️ for food lovers.
        </p>          <div className="flex gap-8">
            <span className="hover:text-slate-900 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer">Terms</span>
            <span className="hover:text-slate-900 cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>
  );
}