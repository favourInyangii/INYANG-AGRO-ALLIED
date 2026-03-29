import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            Inyang Agro-Allied Limited
          </h2>
          <p className="text-sm text-gray-200">
            Supplying quality palm oil, rice, and fresh farm produce across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm text-gray-200">Email: info@inyangagro.com</p>
          <p className="text-sm text-gray-200">Phone: +234 XXX XXX XXXX</p>
          <p className="text-sm text-gray-200">Location:Kaduna,  Nigeria</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm py-4 border-t border-green-700">
        © {new Date().getFullYear()} Inyang Agro-Allied Limited. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer