// src/components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Speedy Turtles</Link>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/about" className="text-white px-4 py-2">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
