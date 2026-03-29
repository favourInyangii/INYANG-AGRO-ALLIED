import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Sending data:", formData) // ✅ DEBUG

    setLoading(true)

    console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then((response) => {
      console.log("SUCCESS:", response)  // ✅ DEBUG
      alert("Message sent successfully!")
      setLoading(false)

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    })
    .catch((error) => {
      console.log("FAILED:", error) // ❗ VERY IMPORTANT
      alert("Failed to send message")
      setLoading(false)
    })
  }

  return (
    <section className="pt-32 px-4 pb-16 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">

        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button 
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </section>
  )
}

export default Contact