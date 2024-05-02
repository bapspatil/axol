import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const blogs = await getCollection("blog")
  return rss({
    title: "Axol.io Blog",
    description: "Stake sustainably with self-healing nodes",
    site: context.site,
    items: blogs.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `https://axol.io/blog/${post.slug}`,
    })),
  })
}
