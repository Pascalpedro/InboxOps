import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      setStatus(result.message);
      setForm({ name: "", email: "", message: "" }); // Clear form after success
    } catch {
      setStatus("❌ Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <input
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
        disabled={loading}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
        disabled={loading}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        value={form.message}
        onChange={handleChange}
        disabled={loading}
        className="w-full p-2 mb-4 border rounded h-32"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {status && (
        <p className="mt-4 text-sm text-center text-green-600">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
