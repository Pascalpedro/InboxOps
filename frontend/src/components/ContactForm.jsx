import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" }); // success or error
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus({ message: result.message, type: "success" });
        setForm({ name: "", email: "", message: "" }); // reset on success
      } else {
        setStatus({ message: result.message || "Something went wrong.", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>

      <input
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-500 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status.message && (
        <p
          className={`mt-4 text-center text-sm ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
