import Link from "next/link";
import Image from "next/image";
import { MapPin, Tag } from "lucide-react";

export default function RetreatCard({
  title,
  slug,
  description,
  startDate,
  endDate,
  price,
  image,
  tag,
  location,
  currency,
}) {
  return (
    <Link href={`/retreat/${slug}`}>
      <div className="group bg-(--background-color)] rounded-l-3xl rounded-r-xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">

        {/* IMAGE */}
        <div className="relative h-64 w-full overflow-hidden">

          {/* TAG */}
          {tag && (
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-wider uppercase text-(--text-color)">
              <Tag size={12} />
              {tag}
            </div>
          )}

          {/* IMAGE */}
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-(--secondary-text) bg-(--alternate-background)">
              No Image
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col gap-4">

          {/* LOCATION */}
          {location && (
            <div className="flex items-center gap-2 text-xs text-(--secondary-text)">
              <MapPin size={14} className="text-(--primary-color)" />
              {location}
            </div>
          )}

          {/* TITLE */}
          <h3 className="font-serif text-xl text-(--text-color) leading-snug">
            {title}
          </h3>

          {/* DESCRIPTION */}
          {description && (
            <p className="text-sm text-(--secondary-text) line-clamp-2">
              {description}
            </p>
          )}

          {/* DATE */}
          {startDate && endDate ? (
  <p className="text-xs text-(--secondary-text)">
    {new Date(startDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    })}{" "}
    →{" "}
    {new Date(endDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    })}
  </p>
) : (
  <p className="text-xs text-(--secondary-text)">
    Dates coming soon
  </p>
)}

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-4 border-t border-black/5">

            {/* PRICE */}
            <div>
              <p className="text-xs text-(--secondary-text)">
                Starts from
              </p>
              <p className="text-lg font-semibold text-(--secondary-color)">
                {currency} {price}
              </p>
            </div>

            {/* CTA */}
            <span className="text-sm text-(--secondary-color) group-hover:translate-x-1 transition-transform">
              Learn More →
            </span>

          </div>
        </div>
      </div>
    </Link>
  );
}