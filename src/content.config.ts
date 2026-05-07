import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string().optional(),
    }),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  blog: blogCollection,
}
