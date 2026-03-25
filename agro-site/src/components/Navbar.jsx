import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 sm:h-24 md:h-28 object-contain" 
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 font-medium shadow-md">
          <li>
            <Link to="/" className="block hover:text-green-600" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-green-600" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-green-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar