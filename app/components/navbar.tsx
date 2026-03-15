"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 flex items-center justify-between px-6 md:px-10 lg:px-16">
      {/* Name/Logo - left side */}
      <div className="font-bebas text-2xl text-light-green tracking-widest">
        <Link href="/">
          KM<span className="text-gold">.</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-archivo text-text">
        {["about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="relative group">
            <Link
              href={`#${item}`}
              className="hover:text-light-green transition-colors duration-300 capitalize"
            >
              {item}
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-bg-main border-t border-light-green/20 z-50">
          <ul className="flex flex-col font-archivo text-text px-6 py-4 gap-6">
            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  className="hover:text-light-green transition-colors duration-300 capitalize text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
