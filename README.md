# POSTALES DE ELENA · Web de Elena

Web de guías de viaje digitales y pequeñas historias de viaje, inspirada en la estructura
de Simply Slow Traveler pero con marca, textos y fotos propios.

Construida con **Astro + Tailwind CSS**. Web estática, muy rápida y optimizada para SEO.

---

## 🚀 Puesta en marcha

```bash
npm install       # instalar dependencias (solo la primera vez)
npm run dev        # desarrollo en http://localhost:4321
npm run build      # generar la web final en /dist
npm run preview    # previsualizar la versión final
```

## 🎨 Cómo personalizar (para Elena)

Casi todo se edita desde **un solo archivo**:

- **`src/data/site.js`** → nombre de marca, eslogan, email, redes sociales y menús.
- **`tailwind.config.mjs`** → colores y tipografías.
- **`src/lib/img.js`** → imágenes (ahora son fotos provisionales de Unsplash; sustitúyelas por
  las tuyas subiéndolas a `/public/images` y cambiando las rutas).

- **Foto de portada de la home** → `heroHome` en `src/lib/img.js`.
- **Tu foto de "Sobre mí"** → `photo` en `src/pages/sobre-mi.astro`.

### Guías (Japón, Grecia…)
Cada guía es un archivo `.md` en `src/content/guides/`. En la cabecera:
- `bookCover` → la imagen de la portada real de la guía.
- `preview` → las imágenes de las páginas 1 a 7, que se hojean como un libro en /guias.
Mientras estén vacíos se muestran una portada y unas páginas provisionales.
Para añadir otra guía, copia `japon.md` y cámbiale los datos.

### Añadir un artículo al Diario
Crea un archivo `.md` en `src/content/articles/`. Igual de sencillo.

## 💳 Antes de vender (pendiente de cuentas de Elena)

1. **Pagos y entrega del PDF**: crea los productos en **Lemon Squeezy** o **Stripe Checkout** y pega
   cada enlace en el campo `buyUrl` de la guía correspondiente. Ellos gestionan el cobro, el IVA
   europeo y el envío automático del PDF.
2. **Boletín (pie de página)**: conecta los formularios a **MailerLite** o **Beehiiv**.
3. **Formulario de contacto**: conéctalos a **Formspree** o **Getform** (o a tu email).
4. **Dominio**: cambia `site:` en `astro.config.mjs` por el dominio definitivo.
5. **Legales**: revisa y completa las páginas de `/src/pages/legal/` con tus datos reales.

## 🌐 Publicar

Sube el repositorio a GitHub y conéctalo a **Vercel** o **Netlify** (gratis). Detectan Astro
automáticamente. Cada cambio que subas se publica solo.

---

## 🗂️ Páginas incluidas
Home · Guías (portada + libro hojeable + cesta) · El Diario (paginado) + artículos · Sobre mí ·
Contacto · Carro · 4 páginas legales · 404.

> Las imágenes actuales son de Unsplash (libres de uso) a modo de maqueta. Sustitúyelas por
> fotos propias antes de lanzar para tener una marca 100 % tuya.
