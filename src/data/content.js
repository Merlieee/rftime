export const speakers2024 = [
  {
    name: 'Maciej Wójcik',
    title: 'dr hab. n. med.',
    location: 'UM Lublin / WSS Biała Podlaska',
    photo: '/speakers/maciej-wojcik-lublin-poland-web.webp',
    talks: ['Rozwój metod ablacji RF', 'Prowadzenie warsztatów i zabiegów live'],
  },
  {
    name: 'Andreas Goette',
    title: 'prof. dr',
    location: 'St. Vincenz Hospital Paderborn / Uni Magdeburg, Niemcy',
    photo: '/speakers/prof-Andreas-Goette-RFtime-2024.webp',
    talks: ['Atrial Cardiomyopathy (ESC 2024)', 'Zabieg live: izolacja elektryczna lewego przedsionka'],
  },
  {
    name: 'Christopher Piorkowski',
    title: 'prof. dr',
    location: 'Minneapolis, USA',
    photo: '/speakers/RFtime-Piorkowski-Christopher-webb-scaled.webp',
    talks: [
      'Clinical Outcomes of Low Voltage Targeted Ablation of AF',
      'Left-Right Atrial Separation & LAAO in End-Stage Atrial Myopathy',
    ],
  },
  {
    name: 'Yan Huo',
    title: 'prof. dr',
    location: 'Chiny',
    photo: '/speakers/RFtime-Yan-Huo-webb.webp',
    talks: ['Co-autor ERASE-AF trial', 'Operator zabiegów live'],
  },
  {
    name: 'Andrzej Hoffmann',
    title: 'dr n. med.',
    location: 'Polska',
    photo: '/speakers/Andrzej-Hoffman-RFtime.webp',
    talks: ['Moderator i operator zabiegów live'],
  },
  {
    name: 'Radosław Kiedrowicz',
    title: 'dr hab. n. med.',
    location: 'Polska',
    photo: '/speakers/RFtime-Radoslaw-Kiedrowicz-web.webp',
    talks: ['Moderator i operator zabiegów live'],
  },
];

export const speakers2025 = [
  {
    name: 'Maciej Wójcik',
    title: 'dr hab. n. med.',
    location: 'UM Lublin / WSS Biała Podlaska',
    photo: '/speakers/maciej-wojcik-lublin-poland-web.webp',
    talks: ['Follow-up zabiegów RFtime 2024', 'Prowadzenie warsztatów i zabiegów live'],
  },
  {
    name: 'Christopher Piorkowski',
    title: 'prof. dr',
    location: 'Minneapolis, USA',
    photo: '/speakers/RFtime-Piorkowski-Christopher-webb-scaled.webp',
    talks: [
      'PFA 2nd generation: Volt™ PFA Catheter, EnSite™ X',
      'Epicardial substrate mapping and ablation in complex AF/AT',
    ],
  },
  {
    name: 'Thomas Neumann',
    title: 'prof. dr',
    location: 'Kerckoff Klinik, Bad Nauheim, Niemcy',
    photo: '/speakers/rftime-Thomas-Neumann-webb.webp',
    talks: ['Is PFA really the Holy Grail? Complications associated with PFA ablations'],
  },
  {
    name: 'Ivo Roca-Luque',
    title: 'prof. dr',
    location: 'Universitat de Barcelona, Hiszpania',
    photo: '/speakers/Ivo-Roca-Luque.webp',
    talks: ['Ablacja VT w protokole S3', 'Zabieg live transmitowany z Barcelony'],
  },
  {
    name: 'Andrzej Hoffmann',
    title: 'dr n. med.',
    location: 'Polska',
    photo: '/speakers/Andrzej-Hoffman-RFtime.webp',
    talks: ['Moderator i operator zabiegów live'],
  },
  {
    name: 'Radosław Kiedrowicz',
    title: 'dr hab. n. med.',
    location: 'Polska',
    photo: '/speakers/RFtime-Radoslaw-Kiedrowicz-web.webp',
    talks: ['Moderator i operator zabiegów live'],
  },
];

import { Video, Globe, ClipboardCheck, Users, Zap, Activity, Trophy } from 'lucide-react';

export const highlights2024 = [
  { icon: Video,           label: '5 zabiegów na żywo',    desc: 'Re-ablacje RF po krioablacji i PFA, izolacja elektryczna LP' },
  { icon: Globe,           label: '3 ośrodki zagraniczne', desc: 'USA, Niemcy, Chiny' },
  { icon: ClipboardCheck,  label: 'Certyfikacja PerClose™', desc: 'Szkolenie zamykania naczyń z certyfikatem' },
  { icon: Users,           label: 'Wieczorne spotkanie',   desc: 'Networking w Uroczysku Zaborek' },
];

export const highlights2025 = [
  { icon: Video,     label: '6+ zabiegów live',             desc: 'W tym transmisja wieloośrodkowa z Barcelony' },
  { icon: Zap,       label: 'PFA II generacji',             desc: 'Premiera cewnika Volt™ PFA, EnSite™ X — pierwsze użycie w Polsce' },
  { icon: Activity,  label: 'Ablacja VT — protokół S3',     desc: 'Mapowanie substratu komorowego z prof. Roca-Luque' },
  { icon: Trophy,    label: 'Konkurs kliniczny',            desc: 'Specjalny konkurs dla uczestników z nagrodami' },
];

export const program2024 = [
  {
    day: 'Czwartek 3.10',
    items: [
      { time: '13:00–14:00', title: 'Rejestracja i poczęstunek', speaker: '' },
      { time: '14:10–14:30', title: 'Wykład: Rozwój metod ablacji RF', speaker: 'M. Wójcik, P. Błaszkiewicz' },
      { time: '14:30–16:00', title: 'Zabieg live: Re-ablacja RF po krioablacji', speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
      { time: '16:00–16:30', title: 'Wykład: Low Voltage Targeted Ablation of AF', speaker: 'Y. Huo, C. Piorkowski' },
      { time: '16:30–18:30', title: 'Zabieg live: Re-ablacja AF po PFA', speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
      { time: '18:30–19:30', title: 'Trudny pacjent, ciekawy zabieg... (prezentacje uczestników)', speaker: '' },
      { time: '20:00', title: 'Wieczorne Spotkanie RF', speaker: 'Uroczysko Zaborek' },
    ],
  },
  {
    day: 'Piątek 4.10',
    items: [
      { time: '9:30–10:00', title: 'Wykład: Atrial Cardiomyopathy (ESC 2024)', speaker: 'Prof. A. Goette' },
      { time: '10:00–12:30', title: 'Zabieg live: Izolacja elektryczna lewego przedsionka', speaker: 'O: Wójcik, Huo, Błaszkiewicz' },
      { time: '12:30–13:00', title: 'Wykład: Left-Right Atrial Separation & LAAO', speaker: 'Y. Huo, C. Piorkowski' },
      { time: '13:00–14:30', title: 'Zabieg live: Ablacja atypowego AFL', speaker: 'O: Wójcik, Peller, Błaszkiewicz' },
      { time: '15:00–15:30', title: 'Szkolenie PerClose™ z certyfikatem', speaker: 'S. Wójcik' },
      { time: '15:30–17:30', title: 'Zabieg live: Re-ablacja AF po ablacji K-Chirurgicznej', speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
      { time: '17:30–18:30', title: 'Trudny pacjent, ciekawy zabieg...', speaker: '' },
    ],
  },
];

export const program2025 = [
  {
    day: 'Czwartek 23.10',
    items: [
      { time: '9:00–9:15', title: 'Otwarcie warsztatów', speaker: 'M. Wójcik, Dyrekcja WSzS' },
      { time: '9:15–9:30', title: 'Follow-up zabiegów RFtime 2024 (roczny)', speaker: 'P. Błaszkiewicz, M. Wójcik' },
      { time: '9:30–10:00', title: 'Wykład: PFA II gen. — Volt™ PFA Catheter, EnSite™ X', speaker: 'C. Piorkowski' },
      { time: '10:00–13:30', title: 'Zabiegi live: Ablacja AF systemem PFA 2-giej generacji', speaker: 'O: Wójcik, Dąbkowski, Błaszkiewicz' },
      { time: '14:00–14:30', title: 'Wykład: Is PFA really the Holy Grail?', speaker: 'T. Neumann' },
      { time: '14:30–16:00', title: 'Zabieg live: Re-ablacja atypowego AFL (HDgridX + AutoMarkIndex)', speaker: 'O: Wójcik, Błaszkiewicz' },
      { time: '16:00–16:15', title: 'Wykład: Epicardial substrate mapping in complex AF/AT', speaker: 'C. Piorkowski' },
      { time: '16:30–19:30', title: 'Zabieg live: Re-ablacja AF po PFA I generacji', speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
      { time: '20:30', title: 'Wieczorne Spotkanie RFtime *', speaker: 'Uroczysko Zaborek' },
    ],
  },
  {
    day: 'Piątek 24.10',
    items: [
      { time: '9:30–10:00', title: 'Wykład: Ablacja VT w protokole S3', speaker: 'Prof. I. Roca-Luque' },
      { time: '10:00–13:30', title: 'Zabieg live z Barcelony: Ablacja VT — protokół S3', speaker: 'O: I. Roca-Luque' },
      { time: '10:00–13:30', title: 'Zabieg live Biała Podlaska: Ablacja VT — protokół S3', speaker: 'O: Wójcik, Hoffmann, Błaszkiewicz' },
      { time: '14:00–15:00', title: 'Trudny pacjent, ciekawy zabieg... (prezentacje uczestników)', speaker: '' },
      { time: '15:00–16:30', title: 'Zabieg live: Re-ablacja AF po krioablacji balonowej', speaker: 'O: Wójcik, Bińkowski, Błaszkiewicz' },
      { time: '16:30–16:45', title: 'Ogłoszenie wyników Konkursu RFtime 2025', speaker: 'Komitet Naukowy' },
      { time: '16:45–17:00', title: 'Podsumowanie i zakończenie warsztatów', speaker: 'Wójcik, Kiedrowicz, Hoffmann' },
    ],
  },
];
