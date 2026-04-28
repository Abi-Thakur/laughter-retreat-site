import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-28 px-6 md:px-16 bg-(--background-color)">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8 max-w-xl">

          <p className="text-xs tracking-[0.3em] uppercase text-(--secondary-text)">
            The Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-(--text-color)">
            More Than a Retreat — A Shift Within
          </h2>

          <p className="text-(--secondary-text) leading-relaxed">
            From the moment you arrive, everything slows down. 
            The noise fades, and a deeper awareness begins to emerge.
          </p>

          <p className="text-(--secondary-text) leading-relaxed">
            Through guided meditations, silent moments, and conscious connection,
            you’ll begin to release what you’ve been holding — and rediscover 
            clarity, stillness, and inner freedom.
          </p>

          {/* HIGHLIGHTS */}
          <div className="space-y-3 pt-4">
            <p className="text-(--text-color)">• Daily meditation & mindfulness</p>
            <p className="text-(--text-color)">• Nature immersion & silence</p>
            <p className="text-(--text-color)">• Emotional release practices</p>
            <p className="text-(--text-color)">• Deep connection & community</p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-100 md:h-130 overflow-hidden rounded-2xl">
          <Image
            src="/ExperienceSection.jpg"
            alt="Retreat Experience"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </section>
  );
}