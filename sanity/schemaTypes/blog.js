import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    // TITLE
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // SLUG (URL)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // FEATURED IMAGE
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    // EXCERPT (for cards / SEO preview)
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),

    // AUTHOR
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Admin",
    }),

    // CATEGORY
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Meditation", value: "meditation" },
          { title: "Spirituality", value: "spirituality" },
          { title: "Healing", value: "healing" },
          { title: "Retreats", value: "retreats" },
        ],
      },
    }),

    // PUBLISH DATE
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    // FEATURED BLOG (for homepage)
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    // 🔥 MAIN CONTENT (RICH TEXT)
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),

    // SEO TITLE
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),

    // SEO DESCRIPTION
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],

  // 🔥 PREVIEW IN SANITY
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "category",
    },
  },
});