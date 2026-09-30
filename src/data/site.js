// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN CENTRAL DE LA MARCA
//  Elena: edita SOLO este archivo para cambiar nombre, textos,
//  redes, email y menús de toda la web.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'POSTALES DE ELENA',
  displayName: 'Postales de Elena', // el nombre en texto normal (títulos, pie…)
  tagline: 'Guías, lugares y pequeñas historias de viaje',
  author: 'Elena',
  description:
    'Guías de viaje, lugares especiales y pequeñas historias de viaje: hoteles con encanto, restaurantes, experiencias y recomendaciones basadas en experiencias reales.',
  email: 'hola@postalesdeelena.com',
  currency: '€',
  instagramHandle: '@postalesdeelena',
  // Redes sociales — deja en '' las que no uses
  social: {
    instagram: 'https://instagram.com/postalesdeelena',
    tiktok: '',
    youtube: '',
    pinterest: '',
  },
};

// Menú principal (arriba a la derecha)
export const NAV = [
  { label: 'Guías', href: '/guias' },
  { label: 'El Diario', href: '/diario' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Carro', href: '/carrito' },
];

// Enlaces del pie
export const FOOTER = {
  main: [
    { label: 'Guías de viaje', href: '/guias' },
    { label: 'El Diario de Elena', href: '/diario' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Política de privacidad', href: '/legal/privacidad' },
    { label: 'Política de cookies', href: '/legal/cookies' },
    { label: 'Términos y devoluciones', href: '/legal/terminos' },
    { label: 'Contacto', href: '/contacto' },
  ],
};
