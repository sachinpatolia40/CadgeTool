import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-gray-400 w-full z-10 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img src={import.meta.env.BASE_URL + "logo.png"} alt="CadgeTools" className="h-10 cursor-pointer transition-transform transform hover:scale-110" />
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <div>
          <button
            onClick={() => setShow(!show)}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-default"
            aria-expanded={show ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Navbar Links */}
          <div className={`w-full md:flex md:items-center md:space-x-6 ${show ? 'block' : 'hidden'} md:block`} id="navbar-default">
            <Link to="/" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-300">About Us</Link>
            <Link to="/products" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-300">Products</Link>
            <Link to="/services" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-yellow-300 font-semibold transition-colors duration-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
