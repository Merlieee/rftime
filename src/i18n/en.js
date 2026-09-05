import { POLICY_URL, REGISTRATION_URL } from '../config';

export default {
  // Document head — kept in sync with the English share page at public/en/index.html
  meta: {
    title: 'RFtime 2026 — International Ablation Workshop',
    description: 'RFtime 2026 — International Ablation Workshop for Electrophysiologists. Biała Podlaska, October 2026.',
  },

  // Banner
  banner: {
    message: 'Ta strona jest dostępna po polsku.',
    switch: 'Przejdź →',
  },

  // Privacy policy page — English rendering of docs/polityka_prywatnosci_rftime_5.md.
  // Keep the two in sync: that file is the reviewed source of truth, and the Polish
  // text on this site is the legally binding one (see `note` below).
  //
  // Scope note: this page covers ONLY what rftime.pl itself does. Registration data is
  // collected by the form on elkardia.pl and governed by the policy published there
  // (POLICY_URL) — that document is the binding one, this page just points at it.
  privacyPage: {
    title: 'Privacy policy of the rftime.pl website',
    updated: 'Last updated: 5 September 2026',
    back: 'Back to homepage',
    note: 'This English version is provided for convenience. The Polish version of this policy is the legally binding text; in the event of any discrepancy, the Polish version prevails.',
    intro: 'The rftime.pl website is purely informational — it does not collect or store any personal data of participants. This document describes what happens when you use the website itself.',
    lead: `Registration for the Workshop is run on the Organizer’s own website, at elkardia.pl/rftime2026-rejestracja, and the “Register” button merely takes you there. The processing of registration data — the scope of data collected, purposes and legal bases, recipients, retention periods and PTK educational points — is governed by the [RFtime 2026 Workshop Privacy Policy](${POLICY_URL}), which is the binding document in that respect.`,
    sections: [
      {
        heading: '1. Data controller',
        body: [
          'The controller of personal data is **Elkardia Sp. z o.o.**, seated in Lublin, ul. Rotmistrza Witolda Pileckiego 23/20, 20-091 Lublin, Poland (the “Controller” or “Organizer”).',
          'Contact for data protection matters:',
          { ul: [
            'e-mail: rodo@elkardia.pl',
            'by post: Elkardia Sp. z o.o., ul. Rot. W. Pileckiego 23/20, 20-091 Lublin, Poland',
          ] },
        ],
      },
      {
        heading: '2. Data collected by rftime.pl',
        body: [
          'The rftime.pl website has no forms, no user accounts and no newsletter sign-up. **We collect no personal data through it** — we do not ask for your name, e-mail address or any other identifying information.',
          'The only data processed in connection with a visit to the website are the technical connection details automatically recorded in server logs by the hosting provider (IP address, date and time of the request, browser type and similar). They serve solely to keep the website secure and working correctly — legal basis: Art. 6(1)(f) GDPR (the Controller’s legitimate interest). These data are not combined with participants’ registration data, nor used to identify visitors.',
        ],
      },
      {
        heading: '3. Browser local storage',
        body: [
          'The rftime.pl website **sets no cookies of its own**. It uses only the essential local storage of your browser (localStorage) needed for the site to work correctly — it remembers your chosen language and the fact that you have seen the privacy notice.',
          'These values stay in your browser, are never sent to a server or shared with anyone, and you can remove them at any time by clearing site data in your browser settings.',
          'We use no analytics or tracking tools, and fonts and images are served from the website’s own servers, with no calls to third-party providers.',
        ],
      },
      {
        heading: '4. Embedded content (YouTube)',
        body: [
          'The website embeds video recordings from YouTube. The YouTube player **does not load automatically** — it starts only after you click the play button. Until then, no requests are sent to YouTube.',
          'Once the player starts, YouTube (Google Ireland Limited) may set its own cookies and process your data in accordance with its own privacy policy, available at policies.google.com/privacy. If you would rather not send any data to YouTube, simply do not start playback.',
        ],
      },
      {
        heading: '5. Website hosting',
        body: [
          'The informational website rftime.pl is hosted by Vercel Inc., seated in the USA — an entity certified under the EU-US Data Privacy Framework, covered by the European Commission’s adequacy decision (Art. 45 GDPR).',
          'Because no personal data of participants is collected or stored through this website, **the hosting provider has no access to registration data** — those are processed within the Controller’s own infrastructure, in the territory of the Republic of Poland.',
        ],
      },
      {
        heading: '6. Your rights and contact',
        body: [
          'In respect of data processed in connection with your use of the website, you have the right to access your data, to rectify or erase it, to restrict processing, and to object to processing based on Art. 6(1)(f) GDPR. Simply write to: rodo@elkardia.pl.',
          `Rights concerning the data you provide in the registration form are described in the [RFtime 2026 Workshop Privacy Policy](${POLICY_URL}).`,
          'You also have the right to lodge a complaint with the supervisory authority — the **President of the Personal Data Protection Office** (ul. Stawki 2, 00-193 Warsaw, Poland, uodo.gov.pl).',
        ],
      },
      {
        heading: '7. Changes to this Privacy Policy',
        body: [
          'The Controller may update this Policy. The current version is always available on this page.',
        ],
      },
    ],
  },

  // Terms & conditions page — English rendering of docs/regulamin_rftime_2026.md, itself
  // a copy of elkardia.pl/rftime-2026-regulamin. That published Polish version is the
  // binding one (see `note` below); keep all three in sync, and re-check § 3 once PTK
  // rules on accreditation — the wording is conditional on a decision that had not
  // arrived when this was written.
  termsPage: {
    title: 'Terms and conditions of the RFtime 2026 scientific and training workshop',
    updated: 'Last updated: 5 September 2026',
    back: 'Back to homepage',
    note: 'This English version is provided for convenience. The Polish version of these terms is the legally binding text; in the event of any discrepancy, the Polish version prevails.',
    intro: 'Version with conditional provisions concerning PTK accreditation — to be applied until the decision of the Polish Cardiac Society is received.',
    lead: `Registration for the Workshop runs at [elkardia.pl/rftime2026-rejestracja](${REGISTRATION_URL}); submitting the form requires accepting these Terms. The processing of registration data is described in the [RFtime 2026 Workshop Privacy Policy](${POLICY_URL}).`,
    sections: [
      {
        heading: '§ 1. General provisions',
        body: [
          { ol: [
            'These Terms (the “Terms”) set out the conditions of participation, the rules of registration, and the rights and obligations of participants in the “RFtime” scientific and training workshop (the “Workshop”).',
            'The organizer of the Workshop is **Elkardia Sp. z o.o.**, seated in Lublin (20-091), ul. Rotmistrza Witolda Pileckiego 23/20, Poland, entered in the Register of Entrepreneurs of the National Court Register, operating among others in the field of education (PKD 85), hereinafter the “Organizer”.',
            'The official website of the Workshop is: rftime.pl.',
            'The Workshop is scientific and educational in nature. Its purpose is to broaden knowledge and skills in the field of cardiology.',
            'Participation in the scientific and training programme of the Workshop is entirely free of charge for qualified participants — the Organizer charges no entry fees.',
            'Participation in the accompanying evening gathering (the “RFtime Evening Gathering”) is optional and paid — participants cover its cost themselves. The gathering does not form part of the scientific and training programme and is not funded by member companies of the POLMED Chamber or MedTech Polska.',
          ] },
        ],
      },
      {
        heading: '§ 2. Conditions of participation and registration',
        body: [
          { ol: [
            { text: 'The Workshop is addressed exclusively to:', ul: [
              'doctors holding a licence to practise medicine in the territory of the Republic of Poland,',
              'students of medical faculties at medical universities.',
            ] },
            { text: 'Participation in the Workshop is conditional upon:', ul: [
              'correctly completing and submitting the registration form available at elkardia.pl/rftime2026-rejestracja (a link to the form is also on rftime.pl),',
              'acceptance of these Terms,',
              'receiving electronic confirmation from the Organizer of qualification onto the participant list (places may be limited).',
            ] },
            'In the registration form the participant is obliged to provide truthful data: first name, surname, e-mail address, participant status (doctor / medical student), name of the university (for students), place of work — EP centre — and academic title (for doctors), as well as the medical licence number (PWZ) — for doctors applying for educational points.',
            'Providing the PWZ number is voluntary, but necessary in order to apply for the educational points referred to in § 3.',
          ] },
        ],
      },
      {
        heading: '§ 3. Educational points and certificates',
        body: [
          { ol: [
            'The Organizer informs that **the procedure for obtaining accreditation and educational points of the Polish Cardiac Society (PTK) for the Workshop is under way**. The award of points to participants who are doctors depends on a positive PTK decision. The Organizer will announce the outcome of the procedure on rftime.pl.',
            { text: 'Should accreditation be granted, a doctor obtaining PTK educational points and a certificate bearing them is conditional upon:', ul: [
              'providing a correct PWZ number during registration,',
              'personal attendance at the Workshop, verified in accordance with the Organizer’s procedure.',
            ] },
            'Participants with medical-student status receive a certificate of participation without PTK educational points.',
            'Digital certificates will be sent to participants at the e-mail address given during registration, within 14 days of the end of the Workshop.',
          ] },
        ],
      },
      {
        heading: '§ 4. Rights and obligations of the participant',
        body: [
          { ol: [
            'The participant has the right to take part in the lecture and workshop sessions in accordance with the official programme published on rftime.pl.',
            'The participant is obliged to observe the safety rules and the order in force at the venue of the Workshop.',
            'The Organizer does not cover participants’ travel or accommodation costs.',
          ] },
        ],
      },
      {
        heading: '§ 5. Personal data protection (GDPR)',
        body: [
          { ol: [
            'The controller of participants’ personal data is **Elkardia Sp. z o.o.**, seated in Lublin at ul. Rotmistrza Witolda Pileckiego 23/20 (20-091 Lublin, Poland). Contact for data protection matters: e-mail rodo@elkardia.pl.',
            { text: 'Participants’ personal data is processed for the purpose of:', ul: [
              'registration, organisation, delivery and logistical handling of the Workshop, and issuing and sending certificates of participation (basis: Art. 6(1)(b) GDPR — performance of the participation agreement),',
              'verifying participant status (doctor / medical student) and — **if accreditation is granted by PTK** — awarding educational points and accounting for the scientific accreditation before the Polish Cardiac Society (basis: Art. 6(1)(b) GDPR and Art. 6(1)(f) GDPR — the legitimate interest of the Organizer and of a third party in the proper settlement of the educational programme),',
              'establishing, pursuing or defending against any claims connected with the organisation of the Workshop (basis: Art. 6(1)(f) GDPR).',
            ] },
            'The recipient of the personal data of doctors applying for educational points (first name, surname, PWZ number) will be the **Polish Cardiac Society**, seated in Warsaw — **conditionally and solely for the purpose of registering the points once a positive PTK accreditation decision has been obtained**. Data may additionally be entrusted to entities providing technical services to the Organizer (including website and form hosting, e-mail services) under data processing agreements.',
            'Participants’ personal data will be stored for the period necessary to deliver, settle and document the Workshop, and for the period required by generally applicable law, by PTK guidelines on the reporting of educational programmes, and by the limitation period for any claims.',
            'The participant has the right to access their data, to rectify or erase it, to restrict processing, to data portability, and to object to processing based on Art. 6(1)(f) GDPR. These rights may be exercised by writing to: rodo@elkardia.pl.',
            'The participant has the right to lodge a complaint with the President of the Personal Data Protection Office (ul. Stawki 2, 00-193 Warsaw, Poland) if they consider that the processing of their data infringes the GDPR.',
            'Providing data is voluntary but necessary for registration and participation in the Workshop; providing the PWZ number is necessary solely in order to apply for educational points.',
            'Personal data collected through the form **will not be used for marketing purposes** of the Organizer or of any third parties (including sponsors and partners of the Workshop), will not be transferred to third countries, and will not be subject to automated decision-making, including profiling.',
            `The full scope of information on the processing of personal data is set out in the [RFtime 2026 Workshop Privacy Policy](${POLICY_URL}).`,
          ] },
        ],
      },
      {
        heading: '§ 6. Final provisions',
        body: [
          { ol: [
            'The Organizer reserves the right to make changes to the Workshop programme for reasons beyond its control.',
            'Matters not governed by these Terms are subject to the provisions of the Civil Code and the GDPR.',
            'These Terms enter into force on the day of their publication on rftime.pl.',
          ] },
        ],
      },
    ],
  },

  // Cookie consent
  cookies: {
    title: 'Privacy and local storage',
    message: 'We use only essential local storage to remember your preferences (e.g. your selected language). We do not use analytics or tracking cookies.',
    privacy: 'Privacy policy',
    ok: 'Got it',
  },

  // Hero
  hero: {
    date: 'October 29–30, 2026 · WSS Biała Podlaska',
    dateShort: 'October 29–30, 2026',
    subtitle: 'International Ablation Workshop\nfor Electrophysiologists',
    topics: ['3D Mapping', 'Complex RF/PFA Ablations'],
    note: 'Organizer: Elkardia Sp. z o.o.',
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
        { label: '7 live procedures',      desc: 'RF and PFA ablations — Volt™, Affera™, TactiFlex™ Duo, dual-energy PFA/RF' },
        { label: '3 live transmissions',   desc: 'Frankfurt, Barcelona, and Lublin — in real time' },
        { label: '5 expert lectures',      desc: 'Volt™ PFA, EP anatomy, VT ablation in the S3 protocol' },
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
          day: 'Thursday 29.10.2026',
          items: [
            { time: '8:00–9:00',   title: 'Participant registration',                                                            speaker: '' },
            { time: '9:00–9:15',   title: 'Workshop opening',                                                                    speaker: 'M. Wójcik, WSS Management' },
            { time: '9:15–9:30',   title: 'Follow-up of RFtime 2025 procedures (one-year)',                                       speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Lecture: How to perform Volt™ PFA ablation (Revolutionary Registry data)',            speaker: 'B. Schmidt, J. Chun' },
            { time: '10:00–11:30', title: 'Live procedure from Frankfurt: AF ablation with the 2nd-generation Volt™ PFA system', speaker: 'J. Chun, B. Schmidt' },
            { time: '10:30–12:45', title: 'Live procedure: Beyond-PVI ablation with the 2nd-generation Volt™ PFA system',        speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '12:45–13:30', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '13:30–14:15', title: 'Lecture: Anatomy for electrophysiologists, part 1',                                  speaker: 'M. Didenko' },
            { time: '14:15–14:30', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '14:30–15:15', title: 'Lecture: Anatomy for electrophysiologists, part 2',                                  speaker: 'M. Didenko' },
            { time: '15:15–16:30', title: 'Live procedure: Re-ablation of atypical AFL with the TactiFlex™ Duo catheter',       speaker: 'R. Kiedrowicz, M. Wójcik, P. Błaszkiewicz' },
            { time: '16:30–17:00', title: 'Interesting case presentations by RFtime participants',                              speaker: 'Moderators: TBC' },
            { time: '17:00–19:00', title: 'Live procedure: AF substrate ablation with the Affera™ catheter',                    speaker: 'A. Hoffmann, M. Wójcik, P. Błaszkiewicz' },
            { time: '19:00–20:00', title: 'Young EP Corner: Case presentations by young participants',                          speaker: 'Moderators: TBC' },
            {
              time: '21:00',
              title: 'RFtime Evening Gathering',
              speaker: 'Uroczysko Zaborek',
              note: 'An accompanying networking event, held outside the scientific and training programme. Participation is optional and paid — attendees cover the cost themselves. The gathering is not funded by member companies of the POLMED Chamber or MedTech Polska.',
            },
          ],
        },
        {
          day: 'Friday 30.10.2026',
          items: [
            { time: '9:00–9:30',   title: 'Young EP Corner: Case presentations by young participants',                          speaker: 'Moderators: TBC' },
            { time: '9:30–10:00',  title: 'Lecture: PFA ablation of premature ventricular contractions',                        speaker: 'R. Tilz' },
            { time: '10:00–10:15', title: 'Lecture: VT ablation in the S3 protocol with a dual-energy PFA/RF catheter',         speaker: 'I. Roca-Luque' },
            { time: '10:15–12:00', title: 'Live procedure from Barcelona: VT ablation — S3 protocol with a dual-energy PFA/RF catheter', speaker: 'I. Roca-Luque' },
            { time: '10:45–13:00', title: 'Live procedure from Biała Podlaska: VT ablation or AF/AT substrate re-ablation',      speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '13:00–14:30', title: 'Live procedure from Lublin: AF ablation — OPAL HDx™ Software 7.0 + FARAVIEW™',        speaker: 'A. Głowniak' },
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
          day: 'Thursday 23.10.2025',
          items: [
            { time: '9:00–9:15',   title: 'Workshop opening',                                                   speaker: 'M. Wójcik, WSS Management' },
            { time: '9:15–9:30',   title: 'RFtime 2024 procedure follow-up (annual)',                           speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Lecture: PFA 2nd gen. — Volt™ PFA Catheter, EnSite™ X',             speaker: 'C. Piorkowski' },
            { time: '10:00–13:30', title: 'Live procedures: AF ablation with 2nd generation PFA system',        speaker: 'O: Wójcik, Dąbkowski, Błaszkiewicz' },
            { time: '14:00–14:30', title: 'Lecture: Is PFA really the Holy Grail?',                             speaker: 'T. Neumann' },
            { time: '14:30–16:00', title: 'Live procedure: Atypical AFL re-ablation (HDgridX + AutoMarkIndex)', speaker: 'O: Wójcik, Błaszkiewicz' },
            { time: '16:00–16:15', title: 'Lecture: Epicardial substrate mapping in complex AF/AT',             speaker: 'C. Piorkowski' },
            { time: '16:30–19:30', title: 'Live procedure: AF re-ablation after 1st generation PFA',            speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
            { time: '20:30',       title: 'RFtime Evening Meeting',                                             speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Friday 24.10.2025',
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
          day: 'Thursday 3.10.2024',
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
          day: 'Friday 4.10.2024',
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
    tabProgramNamed: 'RFtime {{edition}} programme',
    speakerAlt: 'RFtime speaker',
    scheduleExpand: 'Show full RFtime {{edition}} programme',
    scheduleCollapse: 'Collapse RFtime {{edition}} programme',
    recordingsHeading: 'RFtime {{edition}} workshop recordings',
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
  // Organiser differs per edition: 2024 and 2025 were run by the hospital, 2026 by Elkardia.
  // EditionSection picks the entry via its `organizerKey` prop.
  organizer: {
    label: 'Organiser',
    patronsLabel: 'Previous patrons & CME credits',
    wss: {
      name: 'Department of Electrophysiology and Cardiac Pacing',
      hospital: 'Regional Specialist Hospital in Biała Podlaska',
      desc: 'The EP lab performs both simple and complex ablations of supraventricular and ventricular arrhythmias using advanced 3D mapping technology. As one of the few EP labs in Poland, we perform ablations in patients with electrical storm.',
      logo: '/szpital-logo.webp',
    },
    elkardia: {
      name: 'Elkardia Sp. z o.o.',
      hospital: 'Lublin Cardiology Centre for children and adults',
      desc: 'Full cardiac diagnostics on site, innovative equipment and a team of specialist physicians — for children and adults. Elkardia is the organiser of the RFtime 2026 workshop.',
      logo: '/elkardia-logo-SVG.svg',
    },
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
    note: 'Organizer: Elkardia Sp. z o.o.',
  },

  // 404
  notFound: {
    title: 'Page not found',
    message: 'This page does not exist or has been moved. Check the address or head back to the home page.',
    home: 'Back to the home page',
  },

  // Footer
  footer: {
    tagline: 'International Ablation Workshop for Electrophysiologists',
    navLabel: 'Navigation',
    register: 'Registration',
    navLinks: [
      { href: '#edycje',    label: 'Previous editions' },
      { href: '/galeria',   label: 'Gallery' },
    ],
    contactLabel: 'Contact',
    socialLabel: 'Social media',
    copyright: '© 2026 RFtime · All rights reserved',
    terms: 'Terms & conditions',
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
