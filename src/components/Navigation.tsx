import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="CadgeTools" className="h-8" />
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About Us</Link>
          <Link to="/products" className="text-gray-700 hover:text-primary">Products</Link>
          <Link to="/services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}