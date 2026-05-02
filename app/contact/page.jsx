"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="px-6 md:px-16 py-20 bg-(--background-color)">

      {/* HEADER */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-widest text-(--secondary-text)">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-(--text-color) mt-4">
          Start Your Journey
        </h1>

        <p className="text-(--secondary-text) mt-4 leading-relaxed">
          Have questions or need help choosing the right retreat?
          Reach out and we&apos;ll guide you personally.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* CONTACT INFO */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color)">
                <Mail size={18} />
              </div>
              <p className="text-(--text-color)">
                alwayslaughterlovelive@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color)">
                <Phone size={18} />
              </div>
              <p className="text-(--text-color)">
                +91 62308 79866
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-(--primary-color)/10 flex items-center justify-center text-(--primary-color)">
                <MapPin size={18} />
              </div>
              <p className="text-(--text-color)">
                Kullu, Himachal Pradesh, India
              </p>
            </div>
          </div>

          {/* EXTRA TEXT (Trust building) */}
          <div className="text-(--secondary-text) leading-relaxed">
            <p>
              We usually respond within 24 hours. If you&apos;re reaching out
              for a specific retreat, feel free to mention the program name
              and your preferred dates.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-(--secondary-background) p-8 rounded-2xl space-y-6 border border-(--border-color)">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}