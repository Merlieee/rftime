export default {
  // Banner
  banner: {
    message: 'Ta strona jest dostępna po polsku.',
    switch: 'Przejdź →',
  },

  // Hero
  hero: {
    date: 'October 29–30, 2026 · WSS Biała Podlaska',
    subtitle: 'International Ablation Workshop for Electrophysiologists',
    topics: ['3D Mapping', 'Complex RF/PFA Ablations'],
    note: 'Registration via WSzS Biała Podlaska',
    register: 'Register now',
    editions: 'Previous editions',
  },

  // About
  about: {
    label: 'About the workshop',
    heading: 'What is RFtime?',
    p1: 'RFtime is a meeting and knowledge-exchange platform for electrophysiologists specialising in high-density 3D mapping and focal RF/PFA ablation, founded by Assoc. Prof. Maciej Wójcik of the Medical University of Lublin.',
    p2: 'Each edition brings together operators and faculty from around the world with participants at every stage of their career — from medical students to seasoned electrophysiologists.',
    quote: '"We return to analysing cardiac electrical signals encoded in 3D maps and targeted ablation — pure electrophysiology with the latest technology."',
    quoteAuthor: 'Assoc. Prof. Maciej Wójcik, MD PhD',
    pillars: [
      { label: 'Live procedures',        desc: 'Ablation transmissions from the cath lab, including multi-centre connections with Barcelona, the US, and Germany.' },
      { label: 'World-class faculty',    desc: 'Invited specialists from leading cardiology centres across 3 continents.' },
      { label: 'High-density 3D mapping', desc: 'Substrate-guided RF ablation based on 3D mapping — pure electrophysiology with the latest technology.' },
      { label: 'Free admission',         desc: 'The workshop is fully free of charge for all registered participants.' },
    ],
  },

  // Program Announcement
  program: {
    label: 'RFtime 2026 · October 29–30',
    heading: 'Preliminary workshop programme*',
    intro: 'The next RFtime edition will take place at WSS Biała Podlaska. The programme includes live procedures performed with various technologies — RF, PFA (TactiFlex Duo, Volt, Affera) — transmissions from European centres, expert lectures, case presentations, and EP simulator sessions. Arrival possible from Wednesday evening.',
    scheduleHeading: 'Schedule overview',
    freeTitle: 'Free admission',
    freeDesc: 'The workshop is completely free of charge. The dinner (EP Night Meeting) is free for faculty and case presenters; cost for other participants is being finalised.',
    limitedTitle: 'Limited seats',
    limitedDesc: 'The number of seats in the lecture hall and accommodation is limited. Participation is granted on a first-come, first-served basis.',
    footnote: '* Final workshop programme will be published in June 2026.',
    items: [
      { label: '5 live procedures',          desc: 'Performed in the cath lab by experienced electrophysiologists using various ablation technologies.' },
      { label: '1–2 European transmissions', desc: 'Live cases from partner European centres — real-time multi-centre connections.' },
      { label: '4–5 expert lectures',        desc: 'Presentations by invited specialists from leading cardiology centres.' },
      { label: 'Case presentations',         desc: 'Interesting EP cases and procedures prepared by workshop participants.' },
      { label: 'EP simulators',              desc: 'Transseptal puncture, epicardial puncture, and virtual ablation on high-fidelity simulators.' },
    ],
    schedule: [
      {
        day: 'Thursday',
        date: 'October 29, 2026',
        items: [
          { time: '8:30',  label: 'Workshop opening' },
          { time: '19:00', label: 'End of session' },
          { time: '21:00', label: 'EP Night Meeting — Uroczysko Zaborek' },
        ],
      },
      {
        day: 'Friday',
        date: 'October 30, 2026',
        items: [
          { time: '9:00',  label: 'Workshop opening' },
          { time: '15:00', label: 'Planned end' },
        ],
      },
    ],
  },

  // Edition data (speakers, highlights, program)
  editions: {
    e2025: {
      date: '23–24 October 2025',
      theme: 'PFA 2nd gen., VT ablation, epicardial mapping',
      highlights: [
        { label: '6+ live procedures',      desc: 'Including multi-centre transmission from Barcelona' },
        { label: 'PFA 2nd generation',       desc: 'Volt™ PFA Catheter premiere, EnSite™ X — first use in Poland' },
        { label: 'VT ablation — S3 protocol', desc: 'Ventricular substrate mapping with Prof. Roca-Luque' },
        { label: 'Clinical competition',     desc: 'Special competition for participants with prizes' },
      ],
      speakers: [
        { title: 'Assoc. Prof., MD PhD', location: 'UM Lublin / WSS Biała Podlaska',       talks: ['RFtime 2024 procedure follow-up', 'Workshop and live procedure lead'] },
        { title: 'Prof., MD',            location: 'Minneapolis, USA',                      talks: ['PFA 2nd generation: Volt™ PFA Catheter, EnSite™ X', 'Epicardial substrate mapping and ablation in complex AF/AT'] },
        { title: 'Prof., MD',            location: 'Kerckoff Klinik, Bad Nauheim, Germany', talks: ['Is PFA really the Holy Grail? Complications associated with PFA ablations'] },
        { title: 'Prof., MD',            location: 'Universitat de Barcelona, Spain',       talks: ['VT ablation — S3 protocol', 'Live procedure transmitted from Barcelona'] },
        { title: 'MD PhD',               location: 'Poland',                                talks: ['Moderator and live procedure operator'] },
        { title: 'Assoc. Prof., MD PhD', location: 'Poland',                                talks: ['Moderator and live procedure operator'] },
      ],
      program: [
        {
          day: 'Thursday 23.10',
          items: [
            { time: '9:00–9:15',   title: 'Workshop opening',                                                   speaker: 'M. Wójcik, WSzS Management' },
            { time: '9:15–9:30',   title: 'RFtime 2024 procedure follow-up (annual)',                           speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Lecture: PFA 2nd gen. — Volt™ PFA Catheter, EnSite™ X',             speaker: 'C. Piorkowski' },
            { time: '10:00–13:30', title: 'Live procedures: AF ablation with 2nd generation PFA system',        speaker: 'O: Wójcik, Dąbkowski, Błaszkiewicz' },
            { time: '14:00–14:30', title: 'Lecture: Is PFA really the Holy Grail?',                             speaker: 'T. Neumann' },
            { time: '14:30–16:00', title: 'Live procedure: Atypical AFL re-ablation (HDgridX + AutoMarkIndex)', speaker: 'O: Wójcik, Błaszkiewicz' },
            { time: '16:00–16:15', title: 'Lecture: Epicardial substrate mapping in complex AF/AT',             speaker: 'C. Piorkowski' },
            { time: '16:30–19:30', title: 'Live procedure: AF re-ablation after 1st generation PFA',            speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
            { time: '20:30',       title: 'RFtime Evening Meeting *',                                           speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Friday 24.10',
          items: [
            { time: '9:30–10:00',  title: 'Lecture: VT ablation — S3 protocol',                              speaker: 'Prof. I. Roca-Luque' },
            { time: '10:00–13:30', title: 'Live procedure from Barcelona: VT ablation — S3 protocol',         speaker: 'O: I. Roca-Luque' },
            { time: '10:00–13:30', title: 'Live procedure Biała Podlaska: VT ablation — S3 protocol',         speaker: 'O: Wójcik, Hoffmann, Błaszkiewicz' },
            { time: '14:00–15:00', title: 'Interesting EP cases (participant presentations)',                  speaker: '' },
            { time: '15:00–16:30', title: 'Live procedure: AF re-ablation after balloon cryoablation',        speaker: 'O: Wójcik, Bińkowski, Błaszkiewicz' },
            { time: '16:30–16:45', title: 'RFtime 2025 Competition results',                                  speaker: 'Scientific Committee' },
            { time: '16:45–17:00', title: 'Summary and workshop closing',                                     speaker: 'Wójcik, Kiedrowicz, Hoffmann' },
          ],
        },
      ],
    },
    e2024: {
      date: '3–4 October 2024',
      theme: '3D mapping and complex RF ablations',
      highlights: [
        { label: '5 live procedures',       desc: 'RF re-ablations after cryoablation and PFA, electrical isolation of the LA' },
        { label: '3 international centres', desc: 'US, Germany, China' },
        { label: 'PerClose™ certification', desc: 'Vascular closure training with certification' },
        { label: 'Evening meeting',         desc: 'Networking at Uroczysko Zaborek' },
      ],
      speakers: [
        { title: 'Assoc. Prof., MD PhD', location: 'UM Lublin / WSS Biała Podlaska',                         talks: ['Development of RF ablation methods', 'Workshop and live procedure lead'] },
        { title: 'Prof., MD',            location: 'St. Vincenz Hospital Paderborn / Uni Magdeburg, Germany', talks: ['Atrial Cardiomyopathy (ESC 2024)', 'Live procedure: electrical isolation of the left atrium'] },
        { title: 'Prof., MD',            location: 'Minneapolis, USA',                                        talks: ['Clinical Outcomes of Low Voltage Targeted Ablation of AF', 'Left-Right Atrial Separation & LAAO in End-Stage Atrial Myopathy'] },
        { title: 'Prof., MD',            location: 'China',                                                   talks: ['Co-author ERASE-AF trial', 'Live procedure operator'] },
        { title: 'MD PhD',               location: 'Poland',                                                  talks: ['Moderator and live procedure operator'] },
        { title: 'Assoc. Prof., MD PhD', location: 'Poland',                                                  talks: ['Moderator and live procedure operator'] },
      ],
      program: [
        {
          day: 'Thursday 3.10',
          items: [
            { time: '13:00–14:00', title: 'Registration and refreshments',                      speaker: '' },
            { time: '14:10–14:30', title: 'Lecture: Development of RF ablation methods',         speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '14:30–16:00', title: 'Live procedure: RF re-ablation after cryoablation',   speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
            { time: '16:00–16:30', title: 'Lecture: Low Voltage Targeted Ablation of AF',        speaker: 'Y. Huo, C. Piorkowski' },
            { time: '16:30–18:30', title: 'Live procedure: AF re-ablation after PFA',            speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
            { time: '18:30–19:30', title: 'Interesting EP cases (participant presentations)',     speaker: '' },
            { time: '20:00',       title: 'RF Evening Meeting',                                  speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Friday 4.10',
          items: [
            { time: '9:30–10:00',  title: 'Lecture: Atrial Cardiomyopathy (ESC 2024)',                        speaker: 'Prof. A. Goette' },
            { time: '10:00–12:30', title: 'Live procedure: Electrical isolation of the left atrium',          speaker: 'O: Wójcik, Huo, Błaszkiewicz' },
            { time: '12:30–13:00', title: 'Lecture: Left-Right Atrial Separation & LAAO',                     speaker: 'Y. Huo, C. Piorkowski' },
            { time: '13:00–14:30', title: 'Live procedure: Atypical AFL ablation',                            speaker: 'O: Wójcik, Peller, Błaszkiewicz' },
            { time: '15:00–15:30', title: 'PerClose™ training with certification',                            speaker: 'S. Wójcik' },
            { time: '15:30–17:30', title: 'Live procedure: AF re-ablation after surgical ablation',           speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
            { time: '17:30–18:30', title: 'Interesting EP cases...',                                          speaker: '' },
          ],
        },
      ],
    },
  },

  // Edition Section
  edition: {
    secondEdition: 'Second edition',
    firstEdition: 'First edition',
    tabSpeakers: 'Speakers',
    tabProgram: 'Programme',
    recordingsHeading: 'Workshop recordings',
    seeMore: 'See more on our YouTube channel',
  },

  // Organizer
  organizer: {
    label: 'Organiser',
    name: 'Department of Electrophysiology and Cardiac Pacing',
    hospital: 'Regional Specialist Hospital in Biała Podlaska',
    desc: 'The EP lab performs both simple and complex ablations of supraventricular and ventricular arrhythmias using advanced 3D mapping technology. As one of the few EP labs in Poland, we perform ablations in patients with electrical storm.',
    patronsLabel: 'Previous patrons & CME credits',
  },

  // Media
  media: {
    label: 'Media',
    heading: 'RFtime in the media',
    intro: 'Television and press coverage of the RFtime workshops and the pioneering procedures performed by the team from Biała Podlaska.',
    tvHeading: 'On television',
    pressHeading: 'In the press',
    tvLabel: 'TV report',
    watch: 'Watch',
    read: 'Read',
    showMore: 'Show more',
    collapse: 'Show less',
    tags: {
      e2024: 'Edition 2024',
      e2025: 'Edition 2025',
      pfa: 'First in Poland',
    },
    tv: [
      { title: 'TV report from the RFtime 2025 workshop' },
      { title: 'TV report from the RFtime 2024 workshop' },
    ],
    articles: [
      { title: 'First ablation in Poland with the newest-generation catheter — state-of-the-art arrhythmia treatment' },
      { title: 'RFtime 2025 — ablation workshop at the Biała Podlaska hospital' },
      { title: 'Report from the RFtime ablation workshop — 3D mapping and complex RF ablations' },
      { title: 'Doctors from Biała Podlaska first in Poland to perform procedures with new arrhythmia technology' },
      { title: '3D mapping and RF ablation — RFtime as the theme of a conference at the Biała Podlaska hospital' },
      { title: 'Pioneering procedure in Biała Podlaska — a breakthrough for patients with arrhythmia' },
    ],
  },

  // Registration CTA
  cta: {
    label: 'RFtime 2026 · Biała Podlaska',
    heading: 'Join the next edition',
    desc: 'Programme details will be announced soon. Register to be the first to hear about participant enrolment for the 2026 edition. Free admission. First-come, first-served.',
    button: 'Register now',
    note: 'Registration via WSzS Biała Podlaska · GDPR',
  },

  // Footer
  footer: {
    tagline: 'Ablation Workshop for Electrophysiologists',
    location: 'Biała Podlaska · October 2026',
    navLabel: 'Navigation',
    navLinks: [
      { href: '#edycje',    label: 'Previous editions' },
      { href: 'https://www.szpitalbp.pl/pl/nauka/konferencje-2013/konferencje-2026/konferencja-kardio-war-abl_2026.html', label: 'Register' },
      { href: '/galeria',   label: 'Gallery' },
    ],
    prevLabel: 'Previous editions',
    copyright: '© 2026 RFtime · All rights reserved',
    hospital: 'EP Lab · WSzS Biała Podlaska',
    langButton: '🇵🇱 Polski',
  },

  // Gallery
  gallery: {
    label: 'Gallery',
    heading: 'Photos from previous editions',
    back: 'RFtime 2026',
    title: 'Gallery',
    photos: 'photos',
  },
};
