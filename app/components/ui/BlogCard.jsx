import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-200">

        {/* IMAGE */}
        <div className="relative h-60 w-full overflow-hidden">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">

          {/* CATEGORY */}
          {blog.category && (
            <span className="text-xs uppercase text-gray-400">
              {blog.category}
            </span>
          )}

          {/* TITLE */}
          <h3 className="text-lg font-semibold leading-snug group-hover:text-green-700 transition">
            {blog.title}
          </h3>

          {/* EXCERPT */}
          <p className="text-sm text-gray-500 line-clamp-2">
            {blog.excerpt}
          </p>

          {/* DATE */}
          <p className="text-xs text-gray-400">
            {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>

        </div>
      </div>
    </Link>
  );
}