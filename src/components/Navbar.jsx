import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { navlinks } from "../data/navlinks";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

                <button className="hidden md:block px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-full">
                    Login
                </button>
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
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-blue-600 hover:bg-blue-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}