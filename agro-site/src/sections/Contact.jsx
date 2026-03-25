import React from 'react'

const Contact = () => {
  return (
    <section className="pt-32 px-4 max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Reach out to us for inquiries, orders, or partnerships.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-2">
            Email: info@inyangagro.com
          </p>
          <p className="text-gray-600 mb-2">
            Phone: +234 XXX XXX XXXX
          </p>
          <p className="text-gray-600">
            Location: Nigeria
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input 
            type="email" 
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <textarea 
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>

          <button 
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 w-full"
          >
            Send Message
          </button>
        </form>

      </div>

    </section>
  )
}

export default Contact