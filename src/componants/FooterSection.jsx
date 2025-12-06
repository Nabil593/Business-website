import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Carrer", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 ">
          {/* brand colum */}
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center mb-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-5 h-5 -mr-3 bg-blue-600 rounded-full opacity-60 hover:opacity-100 transition-opacity"></div>
                <div className="w-5 h-5 bg-red-600 rounded-full opacity-60 hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-medium ml-1">The next design</span>
            </div>
            <p className="text-gray-600 mb-6 md:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dignissimos rem vitae? Temporibus, nulla reiciendis.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:text-white transition-all duration-200"
              >
                <FaTwitter className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="size-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* footer navi items */}

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([catagory, links], catagoryIndex) => (
                  <div key={catagoryIndex}>
                    <h3 className="text-lg font-medium mb-4 uppercase">
                      {catagory}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* footer bottom section */}

        <div className="border-t border-e-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between item-center gap-4">
            <p className="text-gray-600 text-sm">
              Copyright {new Date().getFullYear()} Nabil.com
            </p>

            <p className="text-gray-600 text-sm">Created by Me from youtube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
