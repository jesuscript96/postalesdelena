import { defineCollection, z } from 'astro:content';

// Guías de viaje (productos digitales)
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // "Japón"
    subtitle: z.string().optional(),
    price: z.number(),
    duration: z.string().optional(), // "14 días"
    pages: z.number().optional(),
    // Foto de ambiente (se usa para la portada provisional y el fondo del libro)
    cover: z.string(),
    // Portada real de la guía (imagen). Si se deja vacía se muestra una portada provisional.
    bookCover: z.string().optional(),
    // Páginas de muestra que se hojean como un libro (de la 1 a la 7).
    // Si se deja vacío se generan páginas provisionales con `gallery` e `includes`.
    preview: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
    includes: z
      .array(z.object({ title: z.string(), text: z.string() }))
      .default([]),
    buyUrl: z.string().default('#'), // enlace de la pasarela (Lemon Squeezy / Stripe)
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
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides, articles };
