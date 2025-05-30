import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About the Ministry", path: "/about" },
    { name: "Department & Units", path: "/departments" },
    { name: "Sports We Govern", path: "/sports" },
    { name: " Athlete Profiles", path: "/athletes" },
    { name: "Upcoming Events/Competitions", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Facilities & Venue", path: "/facilities" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">SL Sport</h1>

        {/* Hamburger Icon (Mobile) */}
        <button className="md:hidden text-2xl text-green-700" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-green-600 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
