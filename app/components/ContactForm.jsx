"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent ✅");
        router.push("/thankyou");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Full Name"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        placeholder="Phone Number"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        required
        placeholder="Your Message"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full bg-black text-white"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
}