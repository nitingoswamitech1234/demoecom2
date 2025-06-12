import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "DOOR HARDWARE",
    "WINDOW HARDWARE",
    "CABINET HARDWARE",
    "ACCESSORIES",
    "HOME & GARDEN",
    "LIGHTING",
    "INSPIRATION",
    "HOW TO BUY",
  ];

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-[#def0dd] z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
        {/* Top: Search + Logo + Hamburger */}
        <div className="w-full  flex items-center justify-between mb-6">
          <div className="text-gray-700 hidden md:block cursor-pointer">
            <Search size={20} />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">A</span>
            <div className="h-6 w-[1px] bg-gray-400"></div>
            <span className="text-xl tracking-widest font-medium">
              Home of Timeless Craftsmanship
            </span>
          </div>

          {/* Mobile hamburger */}
          <div
            className="md:hidden text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          {/* Placeholder to balance search icon on desktop */}
          <div className="hidden md:block w-5 h-5" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden  w-full md:flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wider text-gray-800">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="hover:text-black">
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start text-left gap-6 mt-2 text-sm font-medium tracking-wider text-gray-800">
            {navLinks.map((link, index) => (
              <a key={index} href="#" className="hover:text-black">
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
