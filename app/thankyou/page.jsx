import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <main>
        <section className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-(--secondary-background)">

      <div className="max-w-2xl text-center space-y-6">

        {/* ICON */}
        <div className="w-16 h-16 mx-auto rounded-full bg-(--primary-color)/20 flex items-center justify-center text-(--primary-color) text-2xl">
          ✓
        </div>

        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-serif text-(--text-color)">
          Thank You
        </h1>

        {/* SUBTEXT */}
        <p className="text-(--secondary-text) text-lg leading-relaxed">
          Your message has been received.  
          Our team will get back to you shortly to guide you on your retreat journey.
        </p>

        {/* CTA BUTTON */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-(--primary-color) text-white hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </section>
    </main>
    
    </>
  )
}
