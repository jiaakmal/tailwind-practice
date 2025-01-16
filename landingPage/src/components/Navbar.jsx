import React from "react";
import logo from "../assets/profile-pictures/logo.png";
import { navItems } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function () {
  const [showMenu, setShowMenu] = useState(false);
  const toggleNav = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo image" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtralReality</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-gradient-to-r from-orange-500 to to-orange-800 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>{showMenu ? <X /> : <Menu />}</button>
          </div>
        </div>
        {showMenu && (
          <div className="fixed right-0 z-20 p-12 flex flex-col items-center justify-center bg-neutral-900 w-full lg:hidden">
            <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href} className="">
                  {item.label}
                </a>
              </li>
            ))}
            </ul>
        
        <div className="flex  space-x-6">
          <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className="py-2 px-3 bg-gradient-to-r from-orange-500 to to-orange-800 rounded-md"
          >
            Create an account
          </a>
        </div>
        </div>
    )}

      </div>
    </nav>
  );
}
