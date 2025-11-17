import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-transparent transition-all duration-500 ease-out ${
        hasScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
        THE GYRO GUYS
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 mr-12">
        <Link to="/menu" className="font-body text-lg text-white hover:text-orange-400 transition-colors">
          Menu
        </Link>
        <Link to="/#location" className="font-body text-lg text-white hover:text-orange-400 transition-colors">
          Location
        </Link>
        <a
          href="https://order.online/store/gyro-guys-houston-441834/?hideModal=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Order Now
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            <Link
              to="/menu"
              className="font-body text-xl text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/#location"
              className="font-body text-xl text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <a
              href="https://order.online/store/gyro-guys-houston-441834/?hideModal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-display font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
