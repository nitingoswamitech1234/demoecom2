import React from "react";
import { useState } from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsEnvelope,
  BsWhatsapp,
} from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faSkype } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import TawkToChat from "./LiveChat";

function HomeLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleNested = (menu) => {
    setNestedDropdown(nestedDropdown === menu ? null : menu);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggle = (dropdownName) => {
    // Toggle the dropdown: if already active, close it; otherwise, open it
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="">
      {/* {Top View} */}
      <div className="w-full sticky top-0 z-50 flex md:pl-[4%] bg-blue-700">
        <div className="md:w-[50%] w-full flex justify-start md:space-x-4">
          {/* Phone Section */}
          <div className="flex items-center pl-[5%] lg:pl-[2%] w-[50%] lg:w-[30%] space-x-2">
            <BsPhone className="text-white text-[10px] md:text-[16px]" />
            <p className="text-white text-[10px] md:text-[15px] lg:text-[17px]">
            (+30) 210 1234567
            </p>
          </div>
          {/* Email Section */}
          <div className="flex items-center w-[50%] lg:w-[35%] space-x-2">
            <BsEnvelope className="text-white text-[10px] md:text-[16px]" />
            <p className="text-white text-[10px] md:text-[15px] lg:text-[17px]">
              info@lawfirmweb.com
            </p>
          </div>
        </div>
        {/* Social Media Section */}
        <div className="md:w-[50%] md:pr-[7%] justify-center md:gap-1 mb-2 space-x-4 mt-2 hidden md:flex md:justify-end">
          {/* Facebook Icon */}
          <a
            href="https://api.whatsapp.com/send/?phone=919354458048&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <BsWhatsapp />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/onlinesportstechofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-700 transition-all ease-in-out duration-300"
          >
            <BsInstagram />
          </a>

          {/* Linkedin Icon */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  text-2xl hover:text-blue-600 transition-all ease-in-out duration-300"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
      <div className="w-full sticky md:top-10 top-[15px] z-50 flex  justify-between h-auto text-black bg-white md:p-4 px-2 py-1 md:py-4">
        <div className="md:w-[20%] h-[40px] w-[50%] flex justify-start items-center">
          <Link to="/">
            <img
              className="w-[30%] md:w-[80%] lg:w-[46%] md:pl-[10%] lg:pl-[17%]"
              src="/healthcarelogo1.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Menubar Icon */}
        <div className="w-[50%] flex md:hidden justify-end">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl text-gray-700"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl text-gray-700"
              />
            )}
          </button>
        </div>

        {/* {For Large View} */}
        <div className=" hidden md:block md:w-[85%]  top-[80%]  w-full">
          <ul className="flex  p-2 flex-col md:flex-row md:justify-center lg:justify-end gap-[40px] lg:mr-[6%] pt-2">
            <li>
              <Link
                to="/service"
                className="text-[18px] lg:text-[20px]  font-semibold hover:bg-gradient-to-r hover:from-[#cf8632] hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all ease-in-out duration-300"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-[18px] lg:text-[20px]  font-semibold hover:bg-gradient-to-r hover:from-[#cf8632] hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all ease-in-out duration-300"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/departments"
                className="text-[18px] lg:text-[20px]  font-semibold hover:bg-gradient-to-r hover:from-[#cf8632] hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all ease-in-out duration-300"
              >
                Our Teams
              </Link>
            </li>
            <li>
              <Link
                to="/departments"
                className="text-[18px] lg:text-[20px]  font-semibold hover:bg-gradient-to-r hover:from-[#cf8632] hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all ease-in-out duration-300"
              >
                Practice Area
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[18px] lg:text-[20px]  font-semibold hover:bg-gradient-to-r hover:from-[#cf8632] hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all ease-in-out duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* for mobile */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white text-black w-full h-screen z-50 overflow-auto">
            <ul className="flex flex-col gap-[10px] pt-5">
              {/* About Us */}
              <li className="w-full">
                <Link
                  to="/service"
                  className="text-[16px] font-semibold px-5 py-3 block border-b"
                >
                  Service
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/about-us"
                  className="text-[16px] font-semibold px-5 py-3 block border-b"
                >
                 AboutUs
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/departments"
                  className="text-[16px] font-semibold px-5 py-3 block border-b"
                >
                  Departments
                </Link>
              </li>

              {/* Contact Us */}
              <li className="w-full">
                <Link
                  to="/contact"
                  className="text-[16px] font-semibold px-5 py-3 block border-b"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 bg-gray-300 px-3 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
      {/* <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 fixed hover:text-xl top-[75%] left-[30px] z-50 animate-spin"
        >
          <FontAwesomeIcon icon={faSkype} size="3x" />
        </a>
      </div> */}
      <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-xl fixed top-[85%] left-[30px] z-50 animate-bounce"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        </a>
      </div>
      <TawkToChat />
      {children}
    </div>
  );
}

export default HomeLayout;
