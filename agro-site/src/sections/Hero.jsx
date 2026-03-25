import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/3.png'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-4 text-white">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Fresh Agro Products
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
          Supplying quality palm oil, rice, and farm produce.
        </p>

        <Link to="/about">
          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </button>
        </Link>

      </div>

    </section>
  )
}

export default Hero