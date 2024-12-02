import { groq } from "next-sanity";



export const POST_BY_SLUG = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": current.slug,
    mainImage {
        "url": asset -> url,
        alt,
    },
    content,
    publishedAt,
}`