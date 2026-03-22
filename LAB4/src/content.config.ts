import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
    items: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    role: z.string(),
    initials: z.string(),
    order: z.number(),
  }),
});

const partners = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, testimonials, partners };
