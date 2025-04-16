import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './container/Nav';
import Home from './container/Pages/Home';
import About from './container/Pages/About';
import Sports from './container/Pages/Sports';
import Events from './container/Pages/Events';
import Gallery from './container/Pages/Gallery';
import Departments from './container/Pages/Departments';
import Facilities from './container/Pages/Facilities';
import Athletes from './container/Athletes';
import Contact from './container/Contact';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here when needed */}
      </Routes>
    </Router>
  );
}
