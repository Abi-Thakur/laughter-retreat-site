import Image from "next/image";
import Eyebrow from "./ui/Eyebrow";


export default function OurStory() {
  return (
    <section className="py-10 sm:py-24 px-6 md:px-16 bg-(--background-color)">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-100 md:h-125px overflow-hidden rounded-2xl">
          <Image
            src="/OurStory.jpg"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 max-w-xl">

          <div>
            <Eyebrow variant="dark">Our Story</Eyebrow>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-(--text-color)">
            Where the Journey Began
          </h2>

          <p className="text-(--secondary-text) leading-relaxed">
            What began as a personal search for clarity and inner peace 
            slowly evolved into a vision — to create spaces where others 
            could pause, breathe, and reconnect with themselves.
          </p>

          <p className="text-(--secondary-text) leading-relaxed">
            Through carefully curated retreats across serene locations, 
            we guide individuals toward awareness, healing, and transformation.
          </p>

          {/* SIGNATURE TOUCH */}
          <p className="font-serif text-lg text-(--primary-color)">
            — Laughter Love Live
          </p>

        </div>

      </div>

    </section>
  );
}