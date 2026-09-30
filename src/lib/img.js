// Helper para imágenes de Unsplash (provisionales, verificadas).
// Elena: sustituye estos IDs por fotos propias cuando las tengas,
// o cambia la función para servir imágenes locales de /public/images.
const U = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const IMG = {
  // Foto de fondo de la portada. Elena: pon aquí una foto tuya de viaje
  // (p. ej. '/images/portada.jpg' tras subirla a /public/images).
  heroHome: U('1470770841072-f978cf4d019e', 2400),
  // Japón
  japanKyoto: U('1493976040374-85c8e12f0c0e'),
  japanTorii: U('1492571350019-22de08371fd3'),
  japanInari: U('1478436127897-769e1b3f0f36'),
  japanTokyo: U('1540959733332-eab4deabeeaf'),
  japanPagoda: U('1545569341-9eb8b30979d9'),
  // Grecia
  greeceOia: U('1613395877344-13d4a8e0d49e'),
  greeceAcropolis: U('1555993539-1732b0258235'),
  greeceMykonos: U('1601581875309-fafbf2d3ed3a'),
  greeceSantorini: U('1570077188670-e3a8d69ac5ff'),
  greeceAthens: U('1603565816030-6b389eeb23cb'),
  // España
  baztan: U('1441974231531-c6227db76b6e'),
  tuscanyHero: U('1444723121867-7a241cacace9', 2000),
  tuscany1: U('1523906834658-6e24ef2386f9'),
  tuscany2: U('1543429776-2782fc8e1acd'),
  tuscany3: U('1444723121867-7a241cacace9'),
  dolomites: U('1601918774946-25832a4be0d6'),
  dolomitesHero: U('1601918774946-25832a4be0d6', 2000),
  amalfi1: U('1612698093158-e07ac200d44e'),
  amalfi2: U('1534445867742-43195f401b6c'),
  amalfi3: U('1590523277543-a94d2e4eb00b'),
  paris: U('1502602898657-3e91760cbb34'),
  parisHero: U('1502602898657-3e91760cbb34', 2000),
  provence: U('1499002238440-d264edd596ec'),
  lavender: U('1499002238440-d264edd596ec'),
  como: U('1571003123894-1f0594d2b5d9'),
  sicily: U('1523365154888-8a758819b722'),
  mallorca: U('1509233725247-49e657c54213'),
  sevilla: U('1559386081-325882507af7'),
  cinque1: U('1516483638261-f4dbaf036963'),
  cinque2: U('1607346256330-dee7af15f7c5'),
  venice: U('1514890547357-a9ee288728e0'),
  alps: U('1531210483974-4f8c1f33fd35'),
  portugal: U('1555881400-74d7acaacd8b'),
  santorini: U('1570077188670-e3a8d69ac5ff'),
  hotel: U('1566073771259-6a8506099945'),
  food: U('1414235077428-338989a2e8c0'),
  vienna: U('1516550893923-42d28e5677af'),
  cotswolds: U('1589994160839-163cd867cfe8'),
  cotswolds2: U('1519677100203-a0e668c92439'),
  countryside: U('1470770841072-f978cf4d019e', 2000),
  italyFood: U('1481931098730-318b6f776db0'),
  winery: U('1506377247377-2a5b3b417ebb'),
  village: U('1533105079780-92b9be482077'),
  portrait: U('1531123897727-8f129e1688ce'),
};

export { U };
