import React, { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const productDropdown = [
    "Contact us",
    "About us",
    "Delivery & Returns",
    "How to order",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-[#f3e4e6] z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
        {/* Top: Search + Logo + Hamburger */}
        <div className="w-full flex items-center justify-between md:mb-6">
          <div className="text-gray-700 hidden md:block cursor-pointer">
            <Search size={20} />
          </div>

          <div className="flex items-center space-x-2">
            {/* <span className="text-2xl font-bold">A</span> */}
            {/* <div className="h-6 w-[1px] bg-gray-400"></div> */}
            <span className="text-xl tracking-widest font-cinzel font-medium">
              BrassMan India
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
        <nav className="hidden w-full md:flex flex-wrap font-cinzel justify-center gap-6 text-sm font-medium tracking-wider text-gray-800 relative">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="relative group hover:text-black">
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Dropdown at the end */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-black"
            >
              ABOUT <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0  mt-2 w-48 bg-[#f3e4e6] shadow-lg rounded-md py-2 z-10">
                {productDropdown.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 hover:bg-[#f3e4e6]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start text-left gap-4 mt-4 text-sm font-medium tracking-wider text-gray-800">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="relative group hover:text-black"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Mobile Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 py-2"
              >
                ABOUT <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {productDropdown.map((item, idx) => (
                    <a key={idx} href="#" className="hover:text-black">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
