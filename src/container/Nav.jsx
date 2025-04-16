import React from 'react'

export default function Nav() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">SL Sport</h1>
          
          <nav className="mt-3 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-gray-700 font-medium">
              <li className="hover:text-green-600 cursor-pointer">Home</li>
              <li className="hover:text-green-600 cursor-pointer">About</li>
              <li className="hover:text-green-600 cursor-pointer">Units</li>
              <li className="hover:text-green-600 cursor-pointer">Sports We Govern</li>
              <li className="hover:text-green-600 cursor-pointer">Upcoming Events</li>
              <li className="hover:text-green-600 cursor-pointer">Gallery</li>
              <li className="hover:text-green-600 cursor-pointer">Facilities & Venue</li>
              <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
