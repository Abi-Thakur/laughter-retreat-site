import { client } from "@/sanity/lib/client";
import { singleRetreatQuery } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function RetreatPage({ params }) {
  const { slug } = await params;

  const data = await client.fetch(singleRetreatQuery, { slug });

  if (!data) return <div>Not Found</div>;

  return (
    <div className="px-6 md:px-16 py-16 bg-(--background-color)">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-(--secondary-text)">
            {data.tag}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-(--text-color)">
            {data.title}
          </h1>

          <p className="text-(--secondary-text)">
            📍 {data.location}
          </p>

          <p className="text-(--secondary-text)">
            {new Date(data.startDate).toDateString()} →{" "}
            {new Date(data.endDate).toDateString()}
          </p>

          <p className="text-xl font-semibold text-(--primary-color)">
            {data.currency} {data.price}
          </p>

          <p className="text-(--secondary-text) leading-relaxed">
            {data.excerpt}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-87.5 md:h-[450px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-3xl mb-20">
        <h2 className="text-2xl font-serif mb-6 text-(--text-color)">
          About the Retreat
        </h2>

        <div className="space-y-4 text-(--secondary-text) leading-relaxed">
          {data.description?.map((block, i) => (
            <p key={i}>{block.children?.[0]?.text}</p>
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      {data.highlights?.length > 0 && (
        <div className="mb-20">
          <h2 className="text-2xl font-serif mb-6">Highlights</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.highlights.map((item, i) => (
              <div
                key={i}
                className="p-4 border border-(--border-color) rounded-lg text-(--secondary-text)"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ROOMS */}
      {data.rooms?.length > 0 && (
        <div className="mb-20">
          <h2 className="text-2xl font-serif mb-8">Accommodation</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.rooms.map((room, i) => (
              <div
                key={i}
                className="border border-(--border-color) rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-(--text-color)">
                    {room.title}
                  </h3>
                  <p className="text-(--secondary-text)">
                    {data.currency} {room.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INCLUDED / NOT INCLUDED */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-xl font-serif mb-4">Included</h3>
          <ul className="space-y-2 text-(--secondary-text)">
            {data.included?.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-serif mb-4">Not Included</h3>
          <ul className="space-y-2 text-(--secondary-text)">
            {data.notIncluded?.map((item, i) => (
              <li key={i}>✘ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center border-t pt-12">
        <h2 className="text-2xl font-serif mb-4">
          Ready to Join This Retreat?
        </h2>

        <a
          href={data.bookingLink}
          className="inline-block px-6 py-3 bg-(--primary-color) text-white rounded-full mt-4"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}