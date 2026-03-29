import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // Input validation errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="pt-32 px-4 pb-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full border p-3 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full border p-3 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className={`w-full border p-3 rounded-lg ${errors.message ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-700 text-white px-6 py-3 rounded-lg w-full flex justify-center items-center gap-2"
        >
          {loading && <span className="loader-border animate-spin w-5 h-5 border-2 border-white rounded-full"></span>}
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;