import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CardContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f9fafb] text-slate-900 antialiased">

        <CartProvider>
          <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
            <Navbar />
          </nav>
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            <div className="w-full h-full">
              {children}
            </div>
          </main>

          <footer className="w-full bg-white border-t border-slate-200 mt-auto">
            <Footer />
          </footer>
        </CartProvider>


      </body>
    </html>
  );
}