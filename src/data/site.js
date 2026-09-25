// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN CENTRAL DE LA MARCA
//  Elena: edita SOLO este archivo para cambiar nombre, textos,
//  redes, email y menús de toda la web.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'VIVIR DESPACIO',
  // El nombre se muestra en tres líneas en el logo (edítalas):
  logoLines: ['VIVIR', 'DESPACIO'],
  tagline: 'El arte de viajar despacio',
  author: 'Elena',
  description:
    'Guías de viaje digitales y turismo lifestyle para descubrir Europa sin prisa: itinerarios cuidados, hoteles con alma, gastronomía y rincones auténticos.',
  email: 'hola@vivirdespacio.com',
  currency: '€',
  // Redes sociales — deja en '' las que no uses
  social: {
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    youtube: 'https://youtube.com/',
    pinterest: '',
  },
};

// Menú principal
export const NAV = [
  { label: 'Guías', href: '/guias' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Lifestyle', href: '/lifestyle' },
  { label: 'El Diario', href: '/diario' },
  { label: 'El Club', href: '/club' },
  { label: 'Sobre Elena', href: '/sobre-elena' },
];

// Enlaces del pie
export const FOOTER = {
  explore: [
    { label: 'Todas las guías', href: '/guias' },
    { label: 'Destinos', href: '/destinos' },
    { label: 'Viajes a medida', href: '/lifestyle' },
    { label: 'El Diario', href: '/diario' },
  ],
  help: [
    { label: 'Sobre Elena', href: '/sobre-elena' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Preguntas frecuentes', href: '/contacto#faq' },
    { label: 'El Club', href: '/club' },
  ],
  legal: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Privacidad', href: '/legal/privacidad' },
    { label: 'Cookies', href: '/legal/cookies' },
    { label: 'Términos y devoluciones', href: '/legal/terminos' },
  ],
};
