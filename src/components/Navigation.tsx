import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [show, setShow] = useState(false);

  const BASE = import.meta.env.BASE_URL;

  const handleClose = () => setShow(false);

  return (
    <nav className="relative bg-gradient-to-r from-white to-gray-400 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to={`${BASE}`}>
          <img
            src={`${BASE}logo.png`}
            alt="CadgeTools"
            className="h-12 cursor-pointer transition-transform hover:scale-110"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setShow(!show)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg"
          aria-expanded={show ? 'true' : 'false'}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link to={`${BASE}`} className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to={`${BASE}about`} className="text-white hover:text-yellow-300">
            About Us
          </Link>
          <Link to={`${BASE}products`} className="text-white hover:text-yellow-300">
            Products
          </Link>
          <Link to={`${BASE}services`} className="text-white hover:text-yellow-300">
            Services
          </Link>
          <Link to={`${BASE}contact`} className="text-white hover:text-yellow-300">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-800 shadow-lg ${
          show ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <Link onClick={handleClose} to={`${BASE}`} className="text-white">
            Home
          </Link>
          <Link onClick={handleClose} to={`${BASE}about`} className="text-white">
            About Us
          </Link>
          <Link onClick={handleClose} to={`${BASE}products`} className="text-white">
            Products
          </Link>
          <Link onClick={handleClose} to={`${BASE}services`} className="text-white">
            Services
          </Link>
          <Link onClick={handleClose} to={`${BASE}contact`} className="text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}