import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const blogs = await getCollection("blog")
  return rss({
    title: "Axol.io Blog",
    description: "Stake sustainably with self-healing nodes",
    site: context.site,
    items: blogs.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  })
}
