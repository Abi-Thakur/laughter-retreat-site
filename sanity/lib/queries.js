export const featuredRetreatsQuery = `
  *[_type == "retreat"] | order(startDate asc) {
    title,
    "slug": slug.current,
    excerpt,
    startDate,
    endDate,
    price,
    currency,
    tag,
    location,
    "image": featuredImage.asset->url
  }
`;


export const singleRetreatQuery = `
  *[_type == "retreat" && slug.current == $slug][0]{
    title,
    location,
    startDate,
    endDate,
    price,
    currency,
    tag,
    excerpt,
    description,
    highlights,
    included,
    notIncluded,
    itinerary,
    rooms,
    bookingLink,
    "image": featuredImage.asset->url,
    "gallery": gallery[].asset->url
  }
`;


export const allRetreatsQuery = `
  *[_type == "retreat"] | order(startDate asc) {
    title,
    "slug": slug.current,
    excerpt,
    startDate,
    endDate,
    price,
    currency,
    tag,
    location,
    "image": featuredImage.asset->url
  }
`;



export const allBlogsQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage.asset->url,
    publishedAt,
    author,
    category,
    content
  }
`;