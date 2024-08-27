import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#3A1078] text-[#F7F7F8] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Basic Banking System</Link>
        </h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:bg-[#4E31AA] px-3 py-2 rounded">Home</Link>
          <Link to="/All" className="hover:bg-[#4E31AA] px-3 py-2 rounded">Customers</Link>
          <Link to="/about" className="hover:bg-[#4E31AA] px-3 py-2 rounded">About</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-[#F7F7F8] focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className={`md:hidden fixed top-0 right-0 w-64 bg-[#3A1078] text-[#F7F7F8] h-full transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={toggleMenu} className="p-4 text-[#F7F7F8] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="hover:bg-[#4E31AA] px-3 py-2 rounded">Home</Link>
            <Link to="/All" className="hover:bg-[#4E31AA] px-3 py-2 rounded">Customers</Link>
            <Link to="/about" className="hover:bg-[#4E31AA] px-3 py-2 rounded">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
