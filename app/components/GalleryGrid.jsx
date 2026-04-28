"use client";

import Image from "next/image";

export default function GalleryGrid() {
  const images = [
    "/Gallery/g1.jpg",
    "/Gallery/g2.jpg",
    "/Gallery/g3.jpg",
    "/Gallery/g4.jpg",
    "/Gallery/g5.jpg",
    "/Gallery/g6.jpg",
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-(--background-color)">
      
      {/* HEADER */}
      <div className="max-w-2xl mb-12 space-y-4">
        <p className="text-sm tracking-widest uppercase text-(--secondary-text)">
          Gallery
        </p>

        <h2 className="text-3xl md:text-4xl font-serif text-(--text-color)">
          Retreat Moments
        </h2>

        <p className="text-(--secondary-text)">
          A glimpse into the experiences, spaces, and transformations that unfold during our retreats.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden group h-50 md:h-65"
          >
            {/* IMAGE */}
            <Image
              src={img}
              alt={`Retreat gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

            {/* OPTIONAL TEXT ON HOVER */}
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-500 text-sm tracking-wide">
              View Moment →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}