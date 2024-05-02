import { defineCollection, z } from "astro:content"

const blogCollection = defineCollection({
  type: "content",
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
