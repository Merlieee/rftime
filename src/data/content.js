import { Video, Globe, ClipboardCheck, Users, Zap, Activity, Trophy } from 'lucide-react';

export const speakerBase2024 = [
  { name: 'Maciej Wójcik',          title: 'dr hab. n. med.', photo: '/speakers/maciej-wojcik-lublin-poland-web.webp' },
  { name: 'Andreas Goette',         title: 'prof. dr',        photo: '/speakers/prof-Andreas-Goette-RFtime-2024.webp' },
  { name: 'Christopher Piorkowski', title: 'prof. dr',        photo: '/speakers/RFtime-Piorkowski-Christopher-webb-scaled.webp' },
  { name: 'Yan Huo',                title: 'prof. dr',        photo: '/speakers/RFtime-Yan-Huo-webb.webp' },
  { name: 'Andrzej Hoffmann',       title: 'dr n. med.',      photo: '/speakers/Andrzej-Hoffman-RFtime.webp' },
  { name: 'Radosław Kiedrowicz',    title: 'dr hab. n. med.', photo: '/speakers/RFtime-Radoslaw-Kiedrowicz-web.webp' },
];

export const speakerBase2025 = [
  { name: 'Maciej Wójcik',          title: 'dr hab. n. med.', photo: '/speakers/maciej-wojcik-lublin-poland-web.webp' },
  { name: 'Christopher Piorkowski', title: 'prof. dr',        photo: '/speakers/RFtime-Piorkowski-Christopher-webb-scaled.webp' },
  { name: 'Thomas Neumann',         title: 'prof. dr',        photo: '/speakers/rftime-Thomas-Neumann-webb.webp' },
  { name: 'Ivo Roca-Luque',         title: 'prof. dr',        photo: '/speakers/Ivo-Roca-Luque.webp' },
  { name: 'Andrzej Hoffmann',       title: 'dr n. med.',      photo: '/speakers/Andrzej-Hoffman-RFtime.webp' },
  { name: 'Radosław Kiedrowicz',    title: 'dr hab. n. med.', photo: '/speakers/RFtime-Radoslaw-Kiedrowicz-web.webp' },
];

export const highlightIcons2024 = [Video, Globe, ClipboardCheck, Users];
export const highlightIcons2025 = [Video, Zap, Activity, Trophy];

// Media coverage — TV segments and press articles.
// Titles live in i18n (media.tv / media.articles), merged by index.
export const mediaTV = [
  { url: 'https://www.facebook.com/reel/1176735267850886', outlet: 'facebook.com', tag: 'e2025' },
  { url: 'https://www.facebook.com/reel/845743287704451',  outlet: 'facebook.com', tag: 'e2024' },
];

export const mediaArticles = [
  { url: 'https://bialasiedzieje.pl/informacje-bialskie/biala-podlaska-pierwsza-ablacja-w-polsce-z-najnowszym-cewnikiem-najnowoczesniejsze-usuwanie-arytmii-serca/PIakyMHTQOvVAvK3iA2V', outlet: 'bialasiedzieje.pl', tag: 'e2025' },
  { url: 'https://bp24.pl/artykul/biala-podlaska-bije-n2068239',                                                                                                          outlet: 'bp24.pl',           tag: 'e2025' },
  { url: 'https://bialanews.pl/relacja-z-warsztatow-ablacyjnych-rftime-mapowanie-3d-i-zlozone-ablacje-rf/',                                                               outlet: 'bialanews.pl',      tag: 'e2024' },
  { url: 'https://podlaski.info/2026/03/13/lekarze-z-bialej-podlaskiej-jako-pierwsi-w-polsce-wykonali-zabiegi-nowa-technologia-leczenia-arytmii/',                        outlet: 'podlaski.info',     tag: 'e2025' },
  { url: 'https://radiobiper.info/2025/10/24/mapowanie-3d-i-ablacja-rf-rftime-tematem-konferencji-w-bialskim-szpitalu-galeria/',                                          outlet: 'radiobiper.info',   tag: 'e2025' },
  { url: 'https://www.slowopodlasia.pl/artykul/39991,pionierski-zabieg-w-bialej-podlaskiej-przelom-dla-pacjentow-z-arytmia',                                              outlet: 'slowopodlasia.pl',  tag: 'e2025' },
];
