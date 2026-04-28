"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default  function ContactSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-(--background-color)">

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8 max-w-md">

          <p className="text-xs tracking-[0.3em] uppercase text-(--secondary-text)">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-(--text-color)">
            Start Your Journey
          </h2>

          <p className="text-(--secondary-text) leading-relaxed">
            Have questions or want help choosing the right retreat?  
            Reach out and we’ll guide you personally.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 pt-4">

            <div className="flex items-center gap-3 text-(--text-color)">
              <Mail size={18} className="text-(--accent-color)" />
              <span>hello@yourretreat.com</span>
            </div>

            <div className="flex items-center gap-3 text-(--text-color)">
              <Phone size={18} className="text-(--accent-color)" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3 text-(--text-color)">
              <MapPin size={18} className="text-(--accent-color)" />
              <span>Rishikesh, India</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-(--secondary-background) rounded-2xl p-8 md:p-10 shadow-sm">
          <ContactForm />
        </div>
      </div>

    </section>
  );
}