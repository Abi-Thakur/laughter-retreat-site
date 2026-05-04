import { client } from "@/sanity/lib/client";
import { allBlogsQuery } from "@/sanity/lib/queries";
import BlogCard from "../components/ui/BlogCard";

export default async function BlogPage() {
  const blogs = await client.fetch(allBlogsQuery);

  return (
    <section className="px-6 md:px-16 py-12">

      {/* HEADER */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Our Blog
        </h1>
        <p className="text-gray-500">
          Insights, stories, and wisdom on meditation, healing, and conscious living.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>

    </section>
  );
}