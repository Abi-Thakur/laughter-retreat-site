import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

const query = `
  *[_type == "blog" && slug.current == $slug][0]{
    title,
    "image": mainImage.asset->url,
    content,
    publishedAt
  }
`;

export default async function BlogDetail({ params }) {
  // 🔥 FIX
  const { slug } = await params;

  if (!slug) {
    throw new Error("Slug not found ❌");
  }

  const blog = await client.fetch(query, { slug });

  if (!blog) return <div>Blog not found</div>;

  return (
    <article className="px-6 md:px-16 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif mb-6">{blog.title}</h1>

      <p className="text-sm text-gray-400 mb-8">
        {new Date(blog.publishedAt).toDateString()}
      </p>

      <div className="prose max-w-none">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
}