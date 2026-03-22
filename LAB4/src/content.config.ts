import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
    items: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    initials: z.string(),
    order: z.number(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/partners" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = { services, testimonials, partners };
