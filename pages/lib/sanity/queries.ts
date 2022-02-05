import { groq } from "next-sanity"

export const indexQuery = groq`
*[_type == "page"]{
    _id,
    title,
    content,
    description,
    "slug": slug.current
  }
`
export const documentQuery = groq`
*[_type == "documents"]
`

export const getPageByData = (key: string, val: string, limit: number) => {
  return groq`
  *[_type == "page" && ${key} == '${val}'][${limit}]
  `
}

export const getRefByData = (document: string, key: string, ref: string, limit: string = '') => {
  return groq`
  *[_type == "${document}" && ${key} == "${ref}"][${limit}]
  `
}

export const routeQuery = groq`
*[_type == "navigation"]
`

export const slugQuery = (slug) => {
  return groq`*[_type == "page" && slug.current == '${slug}'][0]`
}

export const singleSlug = (slug) => {
  return groq`
    *[_type == "page" && _id == ${slug}']{
      "slug": slug.current
    }
  `
}

export const siteConfig = () => {
  return groq`
    *[_type == "siteConfig"][0]
  `
}