import { client } from "@/sanity/lib/client";
import { allRetreatsQuery } from "@/sanity/lib/queries";
import RetreatCard from "@/app/components/ui/RetreatCard";

export default async function RetreatsPage() {
  const retreats = await client.fetch(allRetreatsQuery);

  return (
    <section className="px-6 md:px-16 py-20 bg-(--background-color)">

      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <p className="text-sm uppercase tracking-widest text-(--secondary-text)">
          Retreats
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-(--text-color) mt-4">
          All Retreats
        </h1>

        <p className="text-(--secondary-text) mt-4">
          Explore all our upcoming retreats designed for transformation,
          healing, and inner growth.
        </p>
      </div>

      {/* GRID */}
      {retreats?.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {retreats.map((item) => (
            <RetreatCard
              key={item.slug}
              title={item.title}
              slug={item.slug}
              description={item.excerpt}
              startDate={item.startDate}
              endDate={item.endDate}
              price={item.price}
              image={item.image}
              tag={item.tag}
              location={item.location}
              currency={item.currency}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-(--secondary-text)">
          No retreats available right now.
        </div>
      )}

    </section>
  );
}