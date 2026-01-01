import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="my-16 flex items-center justify-between px10">
        <div className="flex mx-16 items-center gap-2">
          <Link href="/">
            <Image src={logo} alt="Club Crest" width={50} height={50} />
          </Link>
          <span className="font-archivo-black">Mokoka FC</span>
        </div>
        <ul className="flex items-center gap-8 font-archivo text-text mx-16">
          <li className="relative group ">
            <Link
              href="#about"
              className="hover:text-light-green transition-colors duration-300"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              About
            </Link>
          </li>
          <li className="relative group ">
            <Link
              href="#skills"
              className="hover:text-light-green transition-colors duration-300"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              Skills
            </Link>
          </li>
          <li className="relative group ">
            <Link
              href="#projects"
              className="hover:text-light-green transition-colors duration-300"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              Projects
            </Link>
          </li>
          <li className="relative group ">
            <Link
              href="#contact"
              className="hover:text-light-green transition-colors duration-300"
            >
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
