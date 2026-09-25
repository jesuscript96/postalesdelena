import { defineCollection, z } from 'astro:content';

// Guías de viaje (productos digitales)
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    country: z.string(), // p.ej. "Italia"
    region: z.enum(['Italia', 'Francia', 'España', 'Resto de Europa']),
    price: z.number(),
    duration: z.string(), // "7 días"
    bestWhen: z.string(), // "Mayo a Octubre"
    forWho: z.string(), // "Amantes del arte, la gastronomía y los pueblos con encanto"
    styles: z.array(z.string()).default([]), // ["Romántico","Gastronómico"]
    pages: z.number().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    includes: z
      .array(z.object({ title: z.string(), text: z.string() }))
      .default([]),
    buyUrl: z.string().default('#'), // enlace de la pasarela (Lemon Squeezy / Stripe)
    featured: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// Artículos del Diario (blog)
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['Destinos', 'Hoteles', 'Gastronomía', 'Rituales Slow']),
    cover: z.string(),
    date: z.date(),
    readingTime: z.string().default('5 min'),
    relatedGuide: z.string().optional(), // slug de una guía
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides, articles };
