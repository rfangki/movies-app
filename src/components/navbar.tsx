"use client";
import React, { useState } from "react";
import Link from "next/link";

// ... (imports dan fungsi lainnya)

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Title */}
        <Link href={`/`}>
          <span className="text-white text-2xl font-bold">MyFlix</span>
        </Link>
        {/* SearchBar */}
        <div className="flex-grow mx-5">
          <input type="text" placeholder="Search..." className="w-full py-2 px-4 rounded-md bg-gray-800 text-white focus:outline-none" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 ml-5">
          <Link href={`/movies`}>
            <p className="text-white hover:text-gray-300">Movies</p>
          </Link>
          <Link href={`/favorite`}>
            <p className="text-white hover:text-gray-300">Favorite</p>
          </Link>
        </div>

        {/* Burger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Account Section */}
        <div className="lg:flex items-center space-x-6 ml-auto">
          {/* Dropdown Content (Hidden by default) */}
          <div className={`absolute top-12 right-0 bg-black p-2 mr-20 mt-3 rounded-md ${isDropdownOpen ? "block" : "hidden"}`}>
            <Link href={`/login`}>
              <p className="block text-white hover:text-gray-300 py-2">Login</p>
            </Link>
          </div>

          {/* Account Photo (Replace with actual account photo URL) */}
          <img
            src="https://placekitten.com/40/40" // Replace with actual account photo URL
            alt="Account Photo"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
