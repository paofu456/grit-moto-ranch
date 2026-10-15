import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(1),
    summary: z.string().min(1),
    // Five product families from the customer's own catalog; the collection must
    // express one category per entry so /products/ can group them.
    // Keep this key set in sync with src/lib/categories.ts.
    category: z.enum(["riding", "desktop", "car", "auto-acc", "laptop"]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(0),
    images: z.array(
      z.object({
        src: z.string().startsWith("/"),
        alt: z.string().min(1),
      }),
    ).min(1),
    specifications: z.array(
      z.object({
        label: z.string().min(1),
        value: z.string().min(1),
      }),
    ).default([]),
    seo: z.object({
      title: z.string().min(10).max(70),
      description: z.string().min(40).max(170),
    }),
  }),
});

export const collections = { products };
