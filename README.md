# VIVIR DESPACIO · Web de Elena

Web de guías de viaje digitales y turismo *lifestyle* (slow travel), inspirada en la estructura
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

### Añadir una guía nueva
Crea un archivo `.md` en `src/content/guides/` (copia uno existente como plantilla). El precio,
la duración, las fotos y el contenido se definen en la cabecera del archivo. Aparece sola en la web.

### Añadir un artículo al Diario
Crea un archivo `.md` en `src/content/articles/`. Igual de sencillo.

## 💳 Antes de vender (pendiente de cuentas de Elena)

1. **Pagos y entrega del PDF**: crea los productos en **Lemon Squeezy** o **Stripe Checkout** y pega
   cada enlace en el campo `buyUrl` de la guía correspondiente. Ellos gestionan el cobro, el IVA
   europeo y el envío automático del PDF.
2. **Newsletter / Club**: conecta los formularios a **MailerLite** o **Beehiiv**.
3. **Formularios de contacto y viajes a medida**: conéctalos a **Formspree** o **Getform** (o a tu email).
4. **Dominio**: cambia `site:` en `astro.config.mjs` por el dominio definitivo.
5. **Legales**: revisa y completa las páginas de `/src/pages/legal/` con tus datos reales.

## 🌐 Publicar

Sube el repositorio a GitHub y conéctalo a **Vercel** o **Netlify** (gratis). Detectan Astro
automáticamente. Cada cambio que subas se publica solo.

---

## 🗂️ Páginas incluidas
Home · Guías (con filtros) · Ficha de guía · Destinos + hub por país · Lifestyle (viajes a medida) ·
El Diario + artículos · El Club · Sobre Elena · Contacto (+ FAQ) · Carrito · 4 páginas legales · 404.

> Las imágenes actuales son de Unsplash (libres de uso) a modo de maqueta. Sustitúyelas por
> fotos propias antes de lanzar para tener una marca 100 % tuya.
