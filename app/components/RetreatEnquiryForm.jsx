"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RetreatEnquiryForm({ retreatTitle }) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });

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

      const res = await fetch("/api/retreat-enquiry", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...form,
          retreatTitle,
        }),
      });

      const data = await res.json();

      if (data.success) {

        router.push("/thankyou");

      } else {

        alert(data.error || "Something went wrong");

      }

    } catch (error) {

      console.log(error);

      alert("Server error");

    }

    setLoading(false);
  };

  return (
    <section
      id="enquire"
      className="
      bg-white
      border border-black/5
      rounded-[40px]
      p-8 md:p-14
      shadow-[0_20px_60px_rgba(0,0,0,0.04)]
      "
    >
      <div className="max-w-3xl mx-auto">

        <p className="uppercase tracking-[0.25em] text-sm text-[#9a927f] mb-4">
          Reserve your place
        </p>

        <h2 className="text-5xl font-serif mb-6 text-[#2b2b2b]">
          Ready to join?
        </h2>

        <p className="text-[#5f5b52] leading-relaxed mb-12 max-w-xl">
          Fill in your details and we’ll get back to you
          within 24 hours with all retreat information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
              className="
              w-full
              bg-[#f5f2ec]
              border border-[#d9d2c3]
              rounded-2xl
              px-5
              py-4
              text-[#2b2b2b]
              placeholder:text-[#8f8a7f]
              outline-none
              transition-all
              duration-300
              focus:border-[#97ab8b]
              focus:ring-4
              focus:ring-[#97ab8b]/10
              "
            />

            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
              className="
              w-full
              bg-[#f5f2ec]
              border border-[#d9d2c3]
              rounded-2xl
              px-5
              py-4
              text-[#2b2b2b]
              placeholder:text-[#8f8a7f]
              outline-none
              transition-all
              duration-300
              focus:border-[#97ab8b]
              focus:ring-4
              focus:ring-[#97ab8b]/10
              "
            />

          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="
            w-full
            bg-[#f5f2ec]
            border border-[#d9d2c3]
            rounded-2xl
            px-5
            py-4
            text-[#2b2b2b]
            placeholder:text-[#8f8a7f]
            outline-none
            transition-all
            duration-300
            focus:border-[#97ab8b]
            focus:ring-4
            focus:ring-[#97ab8b]/10
            "
          />

          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="
            w-full
            bg-[#f5f2ec]
            border border-[#d9d2c3]
            rounded-2xl
            px-5
            py-4
            text-[#2b2b2b]
            placeholder:text-[#8f8a7f]
            outline-none
            transition-all
            duration-300
            focus:border-[#97ab8b]
            focus:ring-4
            focus:ring-[#97ab8b]/10
            "
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            className="
            w-full
            bg-[#f5f2ec]
            border border-[#d9d2c3]
            rounded-2xl
            px-5
            py-4
            text-[#2b2b2b]
            placeholder:text-[#8f8a7f]
            outline-none
            resize-none
            transition-all
            duration-300
            focus:border-[#97ab8b]
            focus:ring-4
            focus:ring-[#97ab8b]/10
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-5
            rounded-full
            bg-[#97ab8b]
            text-white
            font-medium
            hover:scale-[1.01]
            active:scale-[0.99]
            transition-all
            duration-300
            shadow-lg
            disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send my enquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}