"use client";
import Image from 'next/image'; 
import Eyebrow from './ui/Eyebrow';

export default function TransformationSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[var(--background-color)] ">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <div className='mb-4'>
            <Eyebrow variant="dark">Transformation Stories</Eyebrow>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-[var(--text-color)] leading-tight mb-6">
            Transformation <em>Stories</em>
          </h2>

          <p className="text-lg md:text-xl text-[var(--secondary-text)] leading-relaxed italic">
            ““I arrived feeling overwhelmed and disconnected… but left with clarity, inner peace, and a renewed sense of purpose. This experience helped me reconnect with myself in ways I never imagined.””
          </p>

          <div className="mt-6">
            <p className="font-medium text-[var(--text-color)]">
              James Walker
            </p>
            <p className="text-sm text-[var(--secondary-text)]">
              Freedom from Sorrow Retreat
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-100 w-full overflow-hidden">
          <Image
            src="/Transformation.jpg"
            alt="testimonial"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}