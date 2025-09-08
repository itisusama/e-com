import { MenuIcon, XIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { navlinks } from "../data/navlinks";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react"; 

 const cartItems = [
    { id: 1, name: "Product A", price: 29.99, qty: 1 },
    { id: 2, name: "Product B", price: 49.99, qty: 2 },
  ];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { openSignIn } = useClerk(); // 👈 get the function to open modal

    return (
        <>
            <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
            >
                <Link href="/">
                    <h1>E-Com</h1>
                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-blue-500 transition">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <button
              className="px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-full"
              onClick={() => openSignIn()}
            >
              Login
            </button>
          </SignedOut>

           <SignedIn>
            {/* Cart Icon */}
            <div className="relative">
              <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setCartOpen((prev) => !prev)}
              >
                <ShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4 z-50">
                  <h3 className="font-semibold mb-2">Your Cart</h3>
                  <div className="max-h-48 overflow-y-auto">
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm mb-2"
                        >
                          <span>{item.name} x {item.qty}</span>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">Cart is empty</p>
                    )}
                  </div>
                  <Link
                    to="/cart"
                    className="block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg py-2 transition"
                    onClick={() => setCartOpen(false)}
                  >
                    Go to Cart
                  </Link>
                </div>
              )}
            </div>

            {/* Clerk User Profile */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link) => (
                    <Link key={link.name} href={link.href} onNavigate={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}
                <SignedOut>
          <button
            onClick={() => openSignIn()}
            className="px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition"
          >
            Login
          </button>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}