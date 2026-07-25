export default {
  // Banner
  banner: {
    message: 'Ta strona jest dostępna po polsku.',
    switch: 'Przejdź →',
  },

  // Privacy policy page
  privacyPage: {
    title: 'Privacy policy',
    updated: 'Last updated: June 2026',
    back: 'Back to homepage',
    sections: [
      {
        heading: 'Data controller',
        body: [
          'The data controller is the Electrophysiology and Cardiac Pacing Lab of the Provincial Specialist Hospital in Biała Podlaska, ul. Terebelska 57-65, 21-500 Biała Podlaska, Poland.',
          'For any matters regarding the protection of personal data, you can contact us by phone at +48 513 874 782.',
        ],
      },
      {
        heading: 'What data we collect',
        body: [
          'The RFtime website is purely informational. It has no account registration, no contact forms and no comment section, so we do not collect your personal data directly.',
          'Registration for the workshop takes place on a separate website of the Provincial Specialist Hospital in Biała Podlaska and is subject to that website’s privacy policy.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        body: [
          'We only use the browser’s functional local storage (localStorage) to remember your preferences — your selected language and your choice regarding the cookie notice. This information is stored on your device and is not sent to our servers.',
          'We do not use our own tracking cookies or analytics tools that profile users.',
          'You can delete the stored preferences at any time by clearing your browser data for this site.',
        ],
      },
      {
        heading: 'Embedded content from other websites',
        body: [
          'We embed video content from YouTube. Once you play such content, YouTube (Google) may set its own cookies and collect data in accordance with its privacy policy.',
          'The site also contains links to external services (including Facebook, Instagram, YouTube and news outlets). Once you visit those sites, their own privacy policies apply.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Under the GDPR you have the right to access your data, rectify it, erase it or restrict its processing, as well as the right to object and to lodge a complaint with the President of the Personal Data Protection Office.',
          'Because this website does not collect personal data, the exercise of these rights concerns data processed in connection with workshop registration or phone contact.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Electrophysiology and Cardiac Pacing Lab',
          'Provincial Specialist Hospital in Biała Podlaska',
          'ul. Terebelska 57-65, 21-500 Biała Podlaska, Poland',
          'phone +48 513 874 782',
        ],
      },
    ],
  },

  // Cookie consent
  cookies: {
    title: 'Cookies',
    message: 'We use cookies and local storage to remember your preferences (e.g. your selected language).',
    privacy: 'Privacy policy',
    accept: 'Accept',
    reject: 'Reject',
  },

  // Hero
  hero: {
    date: 'October 29–30, 2026 · WSS Biała Podlaska',
    dateShort: 'October 29–30, 2026',
    subtitle: 'International Ablation Workshop\nfor Electrophysiologists',
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
    quoteAuthor: 'Assoc. Prof. Maciej Wójcik, MD, PhD',
    pillars: [
      { label: 'Live procedures',        desc: 'Ablation transmissions from the cath lab, including multi-centre connections with Barcelona, the US, and Germany.' },
      { label: 'International expert faculty', desc: 'Specialists from leading electrophysiology centres.' },
      { label: 'High-density 3D mapping', desc: 'Substrate-guided RF ablation based on 3D mapping — pure electrophysiology with the latest technology.' },
      { label: 'Free admission',         desc: 'The workshop is fully free of charge for all registered participants.' },
    ],
  },

  // Program Announcement
  // Edition data (speakers, highlights, program)
  editions: {
    e2026: {
      date: 'October 29–30, 2026',
      theme: 'Anatomy for electrophysiologists, 3D mapping and complex RF/PFA ablations',
      highlights: [
        { label: '7 live procedures',      desc: 'RF and PFA ablations — Volt, Afferra, TactiFlex Duo, dual-energy PFA/RF' },
        { label: '3 live transmissions',   desc: 'Frankfurt, Barcelona, and Lublin — in real time' },
        { label: '5 expert lectures',      desc: 'Volt PFA, EP anatomy, VT ablation in the S3 protocol' },
        { label: 'Case presentations',  desc: 'Interesting EP case presentations by RFtime participants' },
      ],
      speakers: [
        { title: 'Assoc. Prof., MD, PhD', location: ['Department of Cardiology and Cardiac Surgery, Medical University of Lublin, Poland', 'University Clinical Hospital No. 4, Lublin, Poland', 'EP Laboratory, Provincial Specialist Hospital, Biała Podlaska, Poland'] },
        { title: 'Prof., MD, PhD, FESC, FEHRA', location: ['Principal Training/Education Specialist, Training Academy CAS EurAsia, Germany'] },
        { title: 'Prof., MD, PhD, FEHRA', location: ['CCB at Agaplesion Markus Hospital, Frankfurt am Main, Germany'] },
        { title: 'Prof., MD, PhD', location: ['MVZ CCB Frankfurt und Main-Taunus GbR, Frankfurt am Main, Germany'] },
        { title: 'Prof., MD, PhD, FHRS, FESC, FEHRA', location: ['University Hospital Schleswig-Holstein, Campus Lübeck, Department of Rhythmology, Lübeck, Germany', 'Fraunhofer Research Institution for Individualized Medical Technology and Engineering IMTE, Lübeck, Germany'] },
        { title: 'Prof., MD, PhD, FESC, FEHRA', location: ['Head of Arrhythmia Section, Cardiology Department, Cardiovascular Institute, Hospital Clínic, University of Barcelona, Spain'] },
        { title: 'Assoc. Prof., MD, PhD (Prof. MU Lublin)', location: ['Regional Consultant in Cardiology for the Lublin Province', 'Department of Cardiology and Cardiac Surgery, Medical University of Lublin, Poland', 'University Clinical Hospital No. 4, Lublin, Poland'] },
        { title: 'Assoc. Prof., MD, PhD', location: ['Department of Cardiology, Pomeranian Medical University in Szczecin, Poland'] },
        { title: 'MD, PhD', location: ['Department of Cardiology, Prof. Leszek Giec Upper-Silesian Medical Centre, Medical University of Silesia, Katowice, Poland'] },
      ],
      program: [
        {
          day: 'Thursday 29.10',
          items: [
            { time: '9:00–9:15',   title: 'Workshop opening',                                                                    speaker: 'M. Wójcik, WSzS Management' },
            { time: '9:15–9:30',   title: 'Follow-up of RFtime 2025 procedures (one-year)',                                       speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Lecture: How to perform Volt PFA ablation (Revolutionary Registry data)',             speaker: 'B. Schmidt, J. Chun' },
            { time: '10:00–11:30', title: 'Live from Frankfurt (transmitted): AF ablation with the 2nd-gen Volt PFA system',     speaker: 'J. Chun, B. Schmidt' },
            { time: '10:30–12:45', title: 'Live procedure: Beyond-PVI ablation with the 2nd-generation Volt PFA system',         speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '12:45–13:30', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '13:30–14:15', title: 'Lecture: Anatomy for Electrophysiologists, part 1',                                  speaker: 'M. Didenko' },
            { time: '14:15–14:30', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '14:30–15:15', title: 'Lecture: Anatomy for Electrophysiologists, part 2',                                  speaker: 'M. Didenko' },
            { time: '15:15–16:30', title: 'Live procedure: Re-ablation of atypical AFL with the TactiFlex Duo catheter',        speaker: 'R. Kiedrowicz, M. Wójcik, P. Błaszkiewicz' },
            { time: '16:30–17:00', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '17:00–19:00', title: 'Live procedure: AF substrate ablation with the Afferra catheter',                    speaker: 'A. Hoffmann, M. Wójcik, P. Błaszkiewicz' },
            { time: '19:00–20:00', title: 'Young EP Corner: Case presentations by young participants',                          speaker: 'Moderators: TBC' },
            { time: '21:00',       title: 'RFtime Evening Gathering',                                                           speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Friday 30.10',
          items: [
            { time: '9:30–10:00',  title: 'Lecture: PFA ablation of premature ventricular contractions',                        speaker: 'R. Tilz' },
            { time: '10:00–10:15', title: 'Lecture: VT ablation in the S3 protocol with a dual-energy PFA/RF catheter',         speaker: 'I. Roca-Luque' },
            { time: '10:15–12:00', title: 'Live from Barcelona: VT ablation — S3 protocol with a dual-energy PFA/RF catheter',  speaker: 'I. Roca-Luque' },
            { time: '10:45–13:00', title: 'Live Biała Podlaska: VT ablation or AF/AT substrate re-ablation',                    speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '13:00–14:30', title: 'Live from Lublin: AF ablation — OPAL HDx Software 7.0 + FARAVIEW',                    speaker: 'A. Głowniak' },
            { time: '14:30–15:30', title: 'Young EP Corner: Case presentations by young participants',                          speaker: 'Moderators: TBC' },
            { time: '15:30–16:00', title: 'Summary and closing of the workshop',                                               speaker: 'M. Wójcik, R. Kiedrowicz, A. Hoffmann' },
          ],
        },
      ],
    },
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
        { title: 'Assoc. Prof., MD, PhD', location: 'UM Lublin / WSS Biała Podlaska' },
        { title: 'Prof., MD, PhD',        location: 'Minneapolis, USA' },
        { title: 'Prof., MD, PhD',        location: 'Kerckoff Klinik, Bad Nauheim, Germany' },
        { title: 'Prof., MD, PhD',        location: 'Universitat de Barcelona, Spain' },
        { title: 'MD, PhD',               location: 'Poland' },
        { title: 'Assoc. Prof., MD, PhD', location: 'Poland' },
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
        { title: 'Assoc. Prof., MD, PhD', location: 'UM Lublin / WSS Biała Podlaska' },
        { title: 'Prof., MD, PhD',        location: 'St. Vincenz Hospital Paderborn / Uni Magdeburg, Germany' },
        { title: 'Prof., MD, PhD',        location: 'Minneapolis, USA' },
        { title: 'Prof., MD, PhD',        location: 'China' },
        { title: 'MD, PhD',               location: 'Poland' },
        { title: 'Assoc. Prof., MD, PhD', location: 'Poland' },
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
    thirdEdition: 'Third edition',
    secondEdition: 'Second edition',
    firstEdition: 'First edition',
    tabSpeakers: 'Speakers',
    tabProgram: 'Programme',
    speakerAlt: 'RFtime speaker',
    scheduleExpand: 'Show full programme',
    scheduleCollapse: 'Collapse programme',
    recordingsHeading: 'Workshop recordings',
    seeMore: 'See more on our YouTube channel',
  },

  // Committees
  committee: {
    scientificTab: 'Scientific Committee',
    organizingTab: 'Organizing Committee',
    chair: 'Committee Chair',
    // Same organizing committee across all editions
    organizing: [
      { name: 'Maciej Wójcik',        title: 'Assoc. Prof., MD, PhD' },
      { name: 'Radosław Kiedrowicz',  title: 'Assoc. Prof., MD, PhD' },
      { name: 'Andrzej Hoffmann',     title: 'MD, PhD' },
      { name: 'Paweł Błaszkiewicz',   title: 'MD, PhD' },
      { name: 'Sebastian Wójcik',     title: 'MD' },
      { name: 'Katarzyna Makarewicz', title: 'MSc' },
    ],
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
    heading: 'Join RFtime 2026',
    desc: 'Workshop admission is free, places allocated on a first-come, first-served basis.',
    button: 'Register now',
    note: 'Registration via WSzS Biała Podlaska',
  },

  // Footer
  footer: {
    tagline: 'International Ablation Workshop for Electrophysiologists',
    navLabel: 'Navigation',
    navLinks: [
      { href: '#edycje',    label: 'Previous editions' },
      { href: '/galeria',   label: 'Gallery' },
    ],
    contactLabel: 'Contact',
    socialLabel: 'Social media',
    copyright: '© 2026 RFtime · All rights reserved',
    privacy: 'Privacy policy',
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
