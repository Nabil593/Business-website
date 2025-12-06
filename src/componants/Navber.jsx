import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navber = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [activeLink, setactiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Price" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-20 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-5 h-5 -mr-3 bg-blue-600 rounded-full opacity-60 hover:opacity-100 transition-opacity"></div>
          <div className="w-5 h-5 bg-red-600 rounded-full opacity-60 hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setisMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* Destop navitems */}
        <div className="hidden md:flex items-center gap-10 ">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setactiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get in touxh button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm  font-medium transition-all hover:shadow-lg hover:shadow-blue-200">
          <a href="#neslwtter">Get in touch</a>
        </button>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <div className="container mx-auto space-y-3">
            {navLinks.map((link, index) => (
              <a
                onClick={() => (setactiveLink(link.href), setisMenuOpen(false))}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            <a
              className="w-full text-center block md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 text-sm  font-medium transition-all hover:shadow-lg hover:shadow-blue-200"
              onClick={() => (setisMenuOpen(false), setactiveLink(null))}
              href="#neslwtter"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
