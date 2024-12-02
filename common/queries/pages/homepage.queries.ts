

import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "home"][0] {
    _id,
    title,
    entry,
    image {
        "url": asset -> url,
        alt,
    },
    "project": project[] -> {
    title,
    content,
    "slug": slug.current,
    mainImage {
        "url": asset -> url,
        alt,
    },
  }
}`