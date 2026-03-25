import React from 'react'
import logo from '../assets/logo.png'

const About = () => {
  return (
    <section className="pt-32 px-4 max-w-6xl mx-auto">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We supply quality palm oil, rice, and fresh farm produce across Nigeria.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            Who We Are
          </h3>
          <p className="text-gray-600 mb-4">
            Inyang Agro-Allied Limited is committed to delivering fresh and high-quality agricultural products to homes and businesses.
          </p>

          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To provide reliable, affordable, and top-quality agro products while supporting local farmers.
          </p>
        </div>

        {/* Optional Image Placeholder */}
       <div className="flex justify-center items-center">
  <img 
    src={logo} 
    alt="Inyang Agro-Allied Limited Logo" 
    className="w-48 sm:w-56 md:w-64 object-contain"
  />
</div>

      </div>

    </section>
  )
}

export default About