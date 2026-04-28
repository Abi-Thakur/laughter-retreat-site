const retreat = {
  name: "retreat",
  title: "Retreat",
  type: "document",

  fields: [
    // BASIC
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },

    {
      name: "tag",
      title: "Tag",
      type: "string",
    },

    // HERO SECTION
    {
      name: "featuredImage",
      title: "Featured Image (Hero)",
      type: "image",
    },

    // GALLERY
    {
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }],
    },

    // LOCATION & DATES
    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },

    // PRICING
    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "USD",
    },

    // SHORT TEXT (for cards)
    {
      name: "excerpt",
      title: "Short Description",
      type: "text",
    },

    // MAIN CONTENT (DETAIL PAGE)
    {
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    },

    // HIGHLIGHTS (bullet points)
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    },

    // INCLUDED / NOT INCLUDED
    {
      name: "included",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "notIncluded",
      title: "What's Not Included",
      type: "array",
      of: [{ type: "string" }],
    },

    // SCHEDULE / ITINERARY
    {
      name: "itinerary",
      title: "Daily Schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "string", title: "Day" },
            { name: "content", type: "text", title: "Details" },
          ],
        },
      ],
    },

    // ROOMS / ACCOMMODATION
    {
      name: "rooms",
      title: "Room Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "price", type: "number" },
            { name: "image", type: "image" },
          ],
        },
      ],
    },

    // CTA
    {
      name: "bookingLink",
      title: "Booking Link",
      type: "url",
    },

    // FEATURED (homepage)
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },

    // SEO
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    },
  ],
};

export default retreat;