import { POLICY_URL, REGISTRATION_URL } from '../config';

export default {
  // Document head — kept in sync with <title> and <meta name="description"> in index.html
  meta: {
    title: 'RFtime 2026 — Międzynarodowe Warsztaty Ablacyjne',
    description: 'RFtime 2026 — Międzynarodowe Warsztaty Ablacyjne dla Elektrofizjologów. Biała Podlaska, październik 2026.',
  },

  // Banner
  banner: {
    message: 'This page is available in Polish.',
    switch: 'Switch →',
  },

  // Privacy policy page — transcription of docs/polityka_prywatnosci_rftime_5.md.
  // Keep the two in sync: that file is the reviewed source of truth.
  //
  // Scope note: this page covers ONLY what rftime.pl itself does. Registration data is
  // collected by the form on elkardia.pl and governed by the policy published there
  // (POLICY_URL) — that document is the binding one, this page just points at it.
  privacyPage: {
    title: 'Polityka prywatności strony rftime.pl',
    updated: 'Ostatnia aktualizacja: 5 września 2026 r.',
    back: 'Powrót na stronę główną',
    // Empty on purpose: the EN page carries a "Polish version prevails" note, and without
    // this key i18next would fall back to English and print it on the Polish page too.
    note: '',
    intro: 'Strona rftime.pl ma charakter wyłącznie informacyjny — nie zbiera i nie przechowuje danych osobowych uczestników. Niniejszy dokument opisuje, co dzieje się podczas korzystania z samej strony.',
    lead: `Rejestracja na Warsztaty prowadzona jest w serwisie Organizatora, pod adresem elkardia.pl/rftime2026-rejestracja, a przycisk „Zgłoś uczestnictwo” jedynie tam przenosi. Zasady przetwarzania danych zgłoszeniowych — zakres zbieranych danych, cele i podstawy prawne, odbiorcy, okresy przechowywania oraz punkty edukacyjne PTK — określa [Polityka prywatności Warsztatów RFtime 2026](${POLICY_URL}), i to ona jest dokumentem wiążącym w tym zakresie.`,
    sections: [
      {
        heading: '1. Administrator danych',
        body: [
          'Administratorem danych osobowych jest **Elkardia Sp. z o.o.** z siedzibą w Lublinie, ul. Rotmistrza Witolda Pileckiego 23/20, 20-091 Lublin (dalej: „Administrator” lub „Organizator”).',
          'Kontakt w sprawach ochrony danych osobowych:',
          { ul: [
            'e-mail: rodo@elkardia.pl',
            'korespondencyjnie: Elkardia Sp. z o.o., ul. Rot. W. Pileckiego 23/20, 20-091 Lublin',
          ] },
        ],
      },
      {
        heading: '2. Dane zbierane przez stronę rftime.pl',
        body: [
          'Strona rftime.pl nie zawiera formularzy, nie prowadzi kont użytkowników ani zapisów na newsletter. **Nie zbieramy za jej pośrednictwem żadnych danych osobowych** — nie prosimy o imię, adres e-mail ani jakiekolwiek inne dane identyfikujące.',
          'Jedyne dane przetwarzane w związku z odwiedzeniem strony to techniczne dane połączenia zapisywane automatycznie w logach serwera przez dostawcę hostingu (m.in. adres IP, data i godzina zapytania, typ przeglądarki). Służą one wyłącznie zapewnieniu bezpieczeństwa i prawidłowego działania strony — podstawa: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora). Dane te nie są łączone z danymi zgłoszeniowymi uczestników ani wykorzystywane do identyfikacji odwiedzających.',
        ],
      },
      {
        heading: '3. Pamięć lokalna przeglądarki',
        body: [
          'Strona rftime.pl **nie stosuje własnych plików cookies**. Wykorzystuje wyłącznie niezbędną pamięć lokalną przeglądarki (localStorage), zapewniającą jej prawidłowe działanie — zapamiętywany jest wybrany język strony oraz potwierdzenie zapoznania się z komunikatem o prywatności.',
          'Dane te pozostają w przeglądarce użytkownika, nie są przesyłane na serwer ani udostępniane komukolwiek, i można je w każdej chwili usunąć, czyszcząc dane witryny w ustawieniach przeglądarki.',
          'Nie korzystamy z narzędzi analitycznych ani śledzących, a kroje pisma i grafiki serwowane są z serwerów strony, bez odwołań do dostawców zewnętrznych.',
        ],
      },
      {
        heading: '4. Treści osadzone (YouTube)',
        body: [
          'Na stronie osadzone są nagrania wideo z serwisu YouTube. Odtwarzacz YouTube **nie ładuje się automatycznie** — uruchamiany jest wyłącznie po kliknięciu przycisku odtwarzania przez użytkownika. Do tego momentu do serwisu YouTube nie są wysyłane żadne zapytania.',
          'Z chwilą uruchomienia odtwarzacza serwis YouTube (Google Ireland Limited) może zapisywać własne pliki cookies i przetwarzać dane użytkownika zgodnie z własną polityką prywatności, dostępną pod adresem policies.google.com/privacy. Osoby, które nie chcą przekazywać danych do serwisu YouTube, mogą po prostu nie uruchamiać odtwarzania nagrań.',
        ],
      },
      {
        heading: '5. Hosting strony',
        body: [
          'Strona informacyjna rftime.pl hostowana jest przez Vercel Inc. z siedzibą w USA — podmiot certyfikowany w ramach programu EU-US Data Privacy Framework, objętego decyzją Komisji Europejskiej stwierdzającą odpowiedni stopień ochrony danych (art. 45 RODO).',
          'Ponieważ za pośrednictwem tej strony nie są zbierane ani przechowywane dane osobowe uczestników, **dostawca hostingu nie ma dostępu do danych zgłoszeniowych** — te przetwarzane są w infrastrukturze Administratora, na terenie Rzeczypospolitej Polskiej.',
        ],
      },
      {
        heading: '6. Prawa i kontakt',
        body: [
          'W zakresie danych przetwarzanych w związku z korzystaniem ze strony przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f RODO. Wystarczy napisać na adres: rodo@elkardia.pl.',
          `Prawa dotyczące danych podanych w formularzu rejestracyjnym opisuje [Polityka prywatności Warsztatów RFtime 2026](${POLICY_URL}).`,
          'Przysługuje również prawo wniesienia skargi do organu nadzorczego — **Prezesa Urzędu Ochrony Danych Osobowych** (ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl).',
        ],
      },
      {
        heading: '7. Zmiany Polityki prywatności',
        body: [
          'Administrator może aktualizować niniejszą Politykę. Aktualna wersja jest zawsze dostępna na tej podstronie.',
        ],
      },
    ],
  },

  // Terms & conditions page — transcription of docs/regulamin_rftime_2026.md, itself a
  // copy of elkardia.pl/rftime-2026-regulamin. That published version is the binding one;
  // keep all three in sync, and re-check §3 once PTK rules on accreditation — the wording
  // is conditional on a decision that had not arrived when this was written.
  termsPage: {
    title: 'Regulamin Warsztatów naukowo-szkoleniowych RFtime 2026',
    updated: 'Ostatnia aktualizacja: 5 września 2026 r.',
    back: 'Powrót na stronę główną',
    note: '',
    intro: 'Wersja z warunkowymi zapisami dotyczącymi akredytacji PTK — do stosowania do czasu otrzymania decyzji Polskiego Towarzystwa Kardiologicznego.',
    lead: `Rejestracja na Warsztaty prowadzona jest pod adresem [elkardia.pl/rftime2026-rejestracja](${REGISTRATION_URL}); przesłanie formularza wymaga akceptacji niniejszego Regulaminu. Zasady przetwarzania danych zgłoszeniowych opisuje [Polityka prywatności Warsztatów RFtime 2026](${POLICY_URL}).`,
    sections: [
      {
        heading: '§ 1. Postanowienia ogólne',
        body: [
          { ol: [
            'Niniejszy Regulamin (zwany dalej „Regulaminem”) określa warunki uczestnictwa, zasady rejestracji oraz prawa i obowiązki uczestników warsztatów naukowo-szkoleniowych „RFtime” (zwanych dalej „Warsztatami”).',
            'Organizatorem Warsztatów jest **Elkardia Sp. z o.o.** z siedzibą w Lublinie (20-091), ul. Rotmistrza Witolda Pileckiego 23/20, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego, prowadząca działalność m.in. w zakresie edukacji (PKD 85), zwana dalej „Organizatorem”.',
            'Oficjalna strona internetowa Warsztatów prowadzona jest pod adresem: rftime.pl.',
            'Warsztaty mają charakter naukowo-szkoleniowy. Ich celem jest poszerzanie wiedzy i umiejętności w zakresie kardiologii.',
            'Udział w programie naukowo-szkoleniowym Warsztatów jest dla zakwalifikowanych uczestników całkowicie bezpłatny — Organizator nie pobiera opłat wpisowych.',
            'Udział w wieczornym spotkaniu towarzyszącym („Wieczorne Spotkanie RFtime”) jest opcjonalny i odpłatny — uczestnicy pokrywają jego koszt we własnym zakresie. Spotkanie nie stanowi części programu naukowo-szkoleniowego i nie jest finansowane ze środków Organizatora ani firm członkowskich Izby POLMED lub MedTech Polska.',
          ] },
        ],
      },
      {
        heading: '§ 2. Warunki uczestnictwa i rejestracja',
        body: [
          { ol: [
            { text: 'Warsztaty skierowane są wyłącznie do:', ul: [
              'lekarzy posiadających prawo wykonywania zawodu na terytorium Rzeczypospolitej Polskiej,',
              'studentów kierunków lekarskich uczelni medycznych.',
            ] },
            { text: 'Warunkiem wzięcia udziału w Warsztatach jest:', ul: [
              'prawidłowe wypełnienie i przesłanie formularza rejestracyjnego dostępnego pod adresem elkardia.pl/rftime2026-rejestracja (link do formularza znajduje się także na stronie rftime.pl),',
              'akceptacja niniejszego Regulaminu,',
              'otrzymanie od Organizatora drogą elektroniczną potwierdzenia kwalifikacji na listę uczestników (liczba miejsc może być ograniczona).',
            ] },
            'W formularzu rejestracyjnym uczestnik zobowiązany jest podać prawdziwe dane: imię, nazwisko, adres e-mail, status uczestnika (lekarz / student medycyny), nazwę uczelni (w przypadku studentów), miejsce pracy — ośrodek EP oraz tytuł naukowy (w przypadku lekarzy), a także numer Prawa Wykonywania Zawodu (PWZ) — w przypadku lekarzy ubiegających się o punkty edukacyjne.',
            'Podanie numeru PWZ jest dobrowolne, lecz niezbędne do ubiegania się o punkty edukacyjne, o których mowa w § 3.',
          ] },
        ],
      },
      {
        heading: '§ 3. Punkty edukacyjne i certyfikaty',
        body: [
          { ol: [
            'Organizator informuje, że **trwa procedura ubiegania się o przyznanie Warsztatom akredytacji oraz punktów edukacyjnych Polskiego Towarzystwa Kardiologicznego (PTK)**. Przyznanie punktów uczestnikom będącym lekarzami uzależnione jest od pozytywnej decyzji PTK. O wyniku procedury Organizator poinformuje na stronie rftime.pl.',
            { text: 'W przypadku przyznania akredytacji, warunkiem uzyskania punktów edukacyjnych PTK oraz certyfikatu z punktami przez lekarza jest:', ul: [
              'podanie poprawnego numeru PWZ w procesie rejestracji,',
              'osobista obecność na Warsztatach, zweryfikowana zgodnie z procedurą Organizatora.',
            ] },
            'Uczestnikom o statusie studenta medycyny wydawany jest certyfikat uczestnictwa bez punktów edukacyjnych PTK.',
            'Certyfikaty w formacie cyfrowym zostaną przesłane uczestnikom na adres e-mail podany podczas rejestracji, w terminie do 14 dni od dnia zakończenia Warsztatów.',
          ] },
        ],
      },
      {
        heading: '§ 4. Prawa i obowiązki uczestnika',
        body: [
          { ol: [
            'Uczestnik ma prawo do udziału w sesjach wykładowych i warsztatowych zgodnie z oficjalnym programem opublikowanym na stronie rftime.pl.',
            'Uczestnik jest zobowiązany do przestrzegania zasad bezpieczeństwa oraz porządku obowiązującego w miejscu odbywania się Warsztatów.',
            'Organizator nie pokrywa kosztów dojazdu ani zakwaterowania uczestników.',
          ] },
        ],
      },
      {
        heading: '§ 5. Ochrona danych osobowych (RODO)',
        body: [
          { ol: [
            'Administratorem danych osobowych uczestników Warsztatów jest **Elkardia Sp. z o.o.** z siedzibą w Lublinie przy ul. Rotmistrza Witolda Pileckiego 23/20 (20-091 Lublin). Kontakt w sprawach ochrony danych osobowych: e-mail rodo@elkardia.pl.',
            { text: 'Dane osobowe uczestników przetwarzane są w celu:', ul: [
              'rejestracji, organizacji, przeprowadzenia i obsługi logistycznej Warsztatów oraz wystawienia i przesłania certyfikatów uczestnictwa (podstawa: art. 6 ust. 1 lit. b RODO — realizacja umowy zgłoszenia udziału),',
              'weryfikacji statusu uczestnika (lekarz / student medycyny) oraz — **w przypadku przyznania akredytacji przez PTK** — przyznania punktów edukacyjnych i rozliczenia akredytacji naukowej przed Polskim Towarzystwem Kardiologicznym (podstawa: art. 6 ust. 1 lit. b RODO oraz art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes Organizatora i podmiotu trzeciego, polegający na rzetelnym rozliczeniu programu edukacyjnego),',
              'ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami związanymi z organizacją Warsztatów (podstawa: art. 6 ust. 1 lit. f RODO).',
            ] },
            'Odbiorcą danych osobowych lekarzy ubiegających się o punkty edukacyjne (imię, nazwisko, numer PWZ) będzie **Polskie Towarzystwo Kardiologiczne** z siedzibą w Warszawie — **pod warunkiem i wyłącznie w celu rejestracji punktów po uzyskaniu pozytywnej decyzji akredytacyjnej PTK**. Dane mogą być ponadto powierzane podmiotom świadczącym dla Organizatora usługi techniczne (m.in. hosting strony i formularza, obsługa poczty elektronicznej) na podstawie umów powierzenia przetwarzania danych.',
            'Dane osobowe uczestników będą przechowywane przez okres niezbędny do przeprowadzenia, rozliczenia i udokumentowania Warsztatów, a także przez czas wymagany przepisami prawa powszechnie obowiązującego, wytycznymi PTK dotyczącymi sprawozdawczości programów edukacyjnych oraz przez okres przedawnienia ewentualnych roszczeń.',
            'Uczestnikowi przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz prawo wniesienia sprzeciwu wobec przetwarzania opartego na art. 6 ust. 1 lit. f RODO. Prawa te można realizować poprzez kontakt na adres: rodo@elkardia.pl.',
            'Uczestnikowi przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeżeli uzna, że przetwarzanie jego danych narusza przepisy RODO.',
            'Podanie danych jest dobrowolne, lecz niezbędne do rejestracji i udziału w Warsztatach; podanie numeru PWZ jest niezbędne wyłącznie do ubiegania się o punkty edukacyjne.',
            'Dane osobowe zebrane w formularzu **nie będą wykorzystywane do celów marketingowych** Organizatora ani podmiotów trzecich (w tym sponsorów i partnerów Warsztatów), nie będą przekazywane do państw trzecich ani nie będą podlegały zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu.',
            `Pełny zakres informacji o przetwarzaniu danych osobowych znajduje się w [Polityce prywatności Warsztatów RFtime 2026](${POLICY_URL}).`,
          ] },
        ],
      },
      {
        heading: '§ 6. Postanowienia końcowe',
        body: [
          { ol: [
            'Organizator zastrzega sobie prawo do zmian w programie Warsztatów z przyczyn od niego niezależnych.',
            'W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu cywilnego oraz RODO.',
            'Regulamin wchodzi w życie z dniem opublikowania na stronie rftime.pl.',
          ] },
        ],
      },
    ],
  },

  // Cookie consent
  cookies: {
    title: 'Prywatność i pamięć lokalna',
    message: 'Używamy wyłącznie niezbędnej pamięci lokalnej, aby zapamiętać Twoje preferencje (np. wybrany język). Nie stosujemy cookies analitycznych ani śledzących.',
    privacy: 'Polityka prywatności',
    ok: 'Rozumiem',
  },

  // Hero
  hero: {
    date: '29–30 października 2026 · WSS Biała Podlaska',
    dateShort: '29–30 października 2026',
    subtitle: 'Międzynarodowe Warsztaty Ablacyjne\ndla Elektrofizjologów',
    topics: ['Mapowanie 3D', 'Złożone Ablacje RF/PFA'],
    note: 'Organizator: Elkardia Sp. z o.o.',
    register: 'Zgłoś uczestnictwo',
    editions: 'Poprzednie edycje',
  },

  // About
  about: {
    label: 'O warsztatach',
    heading: 'Czym jest RFtime?',
    p1: 'RFtime to platforma spotkań i wymiany doświadczeń elektrofizjologów zajmujących się gęstym mapowaniem 3D i punktowymi ablacjami RF/PFA, założona przez dr. hab. Macieja Wójcika z UM Lublin.',
    p2: 'Każda edycja łączy operatorów i wykładowców z całego świata z uczestnikami na różnych etapach kariery — od studentów medycyny po doświadczonych elektrofizjologów.',
    quote: '„Wracamy do analizy sygnałów elektrycznych serca zakodowanych w mapach 3D i celowanej ablacji — czystej elektrofizjologii z najnowszą technologią."',
    quoteAuthor: 'Dr hab. n. med. Maciej Wójcik',
    pillars: [
      { label: 'Zabiegi na żywo',          desc: 'Transmisje ablacji z sali zabiegowej, w tym połączenia wieloośrodkowe z Barceloną, USA i Niemcami.' },
      { label: 'Międzynarodowe grono ekspertów',  desc: 'Specjaliści z czołowych ośrodków elektrofizjologicznych.' },
      { label: 'Gęste mapowanie 3D',        desc: 'Celowana ablacja RF oparta na mapowaniu substratu — czysta elektrofizjologia z najnowszą technologią.' },
      { label: 'Udział bezpłatny',          desc: 'Warsztaty w pełni bezpłatne dla wszystkich zarejestrowanych uczestników.' },
    ],
  },

  // Program Announcement
  // Edition data (speakers, highlights, program)
  editions: {
    e2026: {
      date: '29–30 października 2026',
      theme: 'Anatomia dla elektrofizjologów, mapowanie 3D i złożone ablacje RF/PFA',
      highlights: [
        { label: '7 zabiegów live',        desc: 'Ablacje RF i PFA — Volt™, Affera™, TactiFlex™ Duo, dual-energy PFA/RF' },
        { label: '3 transmisje live',      desc: 'Frankfurt, Barcelona i Lublin — w czasie rzeczywistym' },
        { label: '5 wykładów eksperckich', desc: 'Volt™ PFA, anatomia EP, ablacja VT w protokole S3' },
        { label: 'Prezentacje przypadków', desc: 'Prezentacje ciekawych przypadków EP przez uczestników RFtime' },
      ],
      speakers: [
        { title: 'dr hab. n. med.', location: ['Katedra Kardiologii i Kardiochirurgii, Uniwersytet Medyczny w Lublinie, Polska', 'Uniwersytecki Szpital Kliniczny Nr 4, Lublin, Polska', 'Pracownia EP, Wojewódzki Szpital Specjalistyczny w Białej Podlaskiej, Polska'] },
        { title: 'prof. dr hab. n. med., FESC, FEHRA', location: ['Principal Training/Education Specialist, Training Academy CAS EurAsia, Niemcy'] },
        { title: 'prof. dr hab. n. med., FEHRA', location: ['CCB am Agaplesion Markus Krankenhaus, Frankfurt am Main, Niemcy'] },
        { title: 'prof. dr hab. n. med.', location: ['MVZ CCB Frankfurt und Main-Taunus GbR, Frankfurt am Main, Niemcy'] },
        { title: 'prof. dr hab. n. med., FHRS, FESC, FEHRA', location: ['University Hospital Schleswig-Holstein, Campus Lübeck, Department of Rhythmology, Lübeck, Niemcy', 'Fraunhofer Research Institution for Individualized Medical Technology and Engineering IMTE, Lübeck, Niemcy'] },
        { title: 'prof. dr hab. n. med., FESC, FEHRA', location: ['Head of Arrhythmia Section, Cardiology Department, Cardiovascular Institute, Hospital Clínic, Universitat de Barcelona, Hiszpania'] },
        { title: 'dr hab. n. med., prof. UM w Lublinie', location: ['Lubelski konsultant wojewódzki w dziedzinie kardiologii', 'Katedra Kardiologii i Kardiochirurgii, Uniwersytet Medyczny w Lublinie, Polska', 'Uniwersytecki Szpital Kliniczny Nr 4, Lublin, Polska'] },
        { title: 'dr hab. n. med.', location: ['Klinika Kardiologii, Pomorski Uniwersytet Medyczny w Szczecinie, Polska'] },
        { title: 'dr n. med.', location: ['Klinika Kardiologii, Górnośląskie Centrum Medyczne im. prof. Leszka Gieca, Śląski Uniwersytet Medyczny w Katowicach, Polska'] },
      ],
      program: [
        {
          day: 'Czwartek 29.10',
          items: [
            { time: '8:00–9:00',   title: 'Rejestracja uczestników',                                                                                      speaker: '' },
            { time: '9:00–9:15',   title: 'Otwarcie warsztatów',                                                                                          speaker: 'M. Wójcik, Dyrekcja WSS' },
            { time: '9:15–9:30',   title: 'Follow-up zabiegów RFtime 2025 (roczny)',                                                                       speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Wykład: Jak wykonać ablację cewnikiem Volt™ PFA (dane Rejestru Revolutionary)',                                 speaker: 'B. Schmidt, J. Chun' },
            { time: '10:00–11:30', title: 'Zabieg live z Frankfurtu: Ablacja AF systemem Volt™ PFA II generacji',                                          speaker: 'J. Chun, B. Schmidt' },
            { time: '10:30–12:45', title: 'Zabieg live: Ablacja poza PVI systemem Volt™ PFA II generacji',                                                  speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '12:45–13:30', title: 'Prezentacja ciekawych przypadków przez uczestników RFtime',                                                     speaker: 'Moderatorzy: TBC' },
            { time: '13:30–14:15', title: 'Wykład: Anatomia dla elektrofizjologów, część 1',                                                                speaker: 'M. Didenko' },
            { time: '14:15–14:30', title: 'Prezentacja ciekawych przypadków przez uczestników RFtime',                                                     speaker: 'Moderatorzy: TBC' },
            { time: '14:30–15:15', title: 'Wykład: Anatomia dla elektrofizjologów, część 2',                                                                speaker: 'M. Didenko' },
            { time: '15:15–16:30', title: 'Zabieg live: Re-ablacja atypowego AFL cewnikiem TactiFlex™ Duo',                                                 speaker: 'R. Kiedrowicz, M. Wójcik, P. Błaszkiewicz' },
            { time: '16:30–17:00', title: 'Prezentacja ciekawych przypadków przez uczestników RFtime',                                                     speaker: 'Moderatorzy: TBC' },
            { time: '17:00–19:00', title: 'Zabieg live: Ablacja substratu AF cewnikiem Affera™',                                                           speaker: 'A. Hoffmann, M. Wójcik, P. Błaszkiewicz' },
            { time: '19:00–20:00', title: 'Kącik Młodego Elektrofizjologa: Prezentacja przypadków młodych uczestników',                                     speaker: 'Moderatorzy: TBC' },
            {
              time: '21:00',
              title: 'Wieczorne Spotkanie RFtime',
              speaker: 'Uroczysko Zaborek',
              note: 'Spotkanie towarzyszące o charakterze networkingowym, poza programem naukowo-szkoleniowym. Udział jest opcjonalny i odpłatny — uczestnicy pokrywają jego koszt we własnym zakresie. Spotkanie nie jest finansowane ze środków firm członkowskich Izby POLMED ani MedTech Polska.',
            },
          ],
        },
        {
          day: 'Piątek 30.10',
          items: [
            { time: '9:00–9:30',   title: 'Kącik Młodego Elektrofizjologa: Prezentacja przypadków młodych uczestników',                                   speaker: 'Moderatorzy: TBC' },
            { time: '9:30–10:00',  title: 'Wykład: Ablacja PFA dodatkowych pobudzeń komorowych',                                                            speaker: 'R. Tilz' },
            { time: '10:00–10:15', title: 'Wykład: Ablacja VT w protokole S3 cewnikiem dual-energy PFA/RF',                                                 speaker: 'I. Roca-Luque' },
            { time: '10:15–12:00', title: 'Zabieg live z Barcelony: Ablacja VT — protokół S3 z cewnikiem dual-energy PFA/RF',                               speaker: 'I. Roca-Luque' },
            { time: '10:45–13:00', title: 'Zabieg live Biała Podlaska: Ablacja VT lub re-ablacja substratu AF/AT',                                          speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '13:00–14:30', title: 'Zabieg live z Lublina: Ablacja AF — OPAL HDx™ Software 7.0 + FARAVIEW™',                                          speaker: 'A. Głowniak' },
            { time: '14:30–15:30', title: 'Kącik Młodego Elektrofizjologa: Prezentacja przypadków młodych uczestników',                                     speaker: 'Moderatorzy: TBC' },
            { time: '15:30–16:00', title: 'Podsumowanie i zakończenie warsztatów',                                                                          speaker: 'M. Wójcik, R. Kiedrowicz, A. Hoffmann' },
          ],
        },
      ],
    },
    e2025: {
      date: '23–24 października 2025',
      theme: 'PFA II gen., ablacja VT, mapowanie epikardialne',
      highlights: [
        { label: '6+ zabiegów live',         desc: 'W tym transmisja wieloośrodkowa z Barcelony' },
        { label: 'PFA II generacji',          desc: 'Premiera cewnika Volt™ PFA, EnSite™ X — pierwsze użycie w Polsce' },
        { label: 'Ablacja VT — protokół S3', desc: 'Mapowanie substratu komorowego z prof. Roca-Luque' },
        { label: 'Konkurs kliniczny',         desc: 'Specjalny konkurs dla uczestników z nagrodami' },
      ],
      speakers: [
        { title: 'dr hab. n. med.', location: 'UM Lublin / WSS Biała Podlaska' },
        { title: 'prof. dr',        location: 'Minneapolis, USA' },
        { title: 'prof. dr',        location: 'Kerckoff Klinik, Bad Nauheim, Niemcy' },
        { title: 'prof. dr',        location: 'Universitat de Barcelona, Hiszpania' },
        { title: 'dr n. med.',      location: 'Polska' },
        { title: 'dr hab. n. med.', location: 'Polska' },
      ],
      program: [
        {
          day: 'Czwartek 23.10.2025',
          items: [
            { time: '9:00–9:15',   title: 'Otwarcie warsztatów',                                                     speaker: 'M. Wójcik, Dyrekcja WSS' },
            { time: '9:15–9:30',   title: 'Follow-up zabiegów RFtime 2024 (roczny)',                                  speaker: 'P. Błaszkiewicz, M. Wójcik' },
            { time: '9:30–10:00',  title: 'Wykład: PFA II gen. — Volt™ PFA Catheter, EnSite™ X',                     speaker: 'C. Piorkowski' },
            { time: '10:00–13:30', title: 'Zabiegi live: Ablacja AF systemem PFA 2-giej generacji',                  speaker: 'O: Wójcik, Dąbkowski, Błaszkiewicz' },
            { time: '14:00–14:30', title: 'Wykład: Is PFA really the Holy Grail?',                                   speaker: 'T. Neumann' },
            { time: '14:30–16:00', title: 'Zabieg live: Re-ablacja atypowego AFL (HDgridX + AutoMarkIndex)',          speaker: 'O: Wójcik, Błaszkiewicz' },
            { time: '16:00–16:15', title: 'Wykład: Epicardial substrate mapping in complex AF/AT',                   speaker: 'C. Piorkowski' },
            { time: '16:30–19:30', title: 'Zabieg live: Re-ablacja AF po PFA I generacji',                           speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
            { time: '20:30',       title: 'Wieczorne Spotkanie RFtime',                                              speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Piątek 24.10.2025',
          items: [
            { time: '9:30–10:00',  title: 'Wykład: Ablacja VT w protokole S3',                              speaker: 'Prof. I. Roca-Luque' },
            { time: '10:00–13:30', title: 'Zabieg live z Barcelony: Ablacja VT — protokół S3',               speaker: 'O: I. Roca-Luque' },
            { time: '10:00–13:30', title: 'Zabieg live Biała Podlaska: Ablacja VT — protokół S3',            speaker: 'O: Wójcik, Hoffmann, Błaszkiewicz' },
            { time: '14:00–15:00', title: 'Trudny pacjent, ciekawy zabieg... (prezentacje uczestników)',     speaker: '' },
            { time: '15:00–16:30', title: 'Zabieg live: Re-ablacja AF po krioablacji balonowej',             speaker: 'O: Wójcik, Bińkowski, Błaszkiewicz' },
            { time: '16:30–16:45', title: 'Ogłoszenie wyników Konkursu RFtime 2025',                        speaker: 'Komitet Naukowy' },
            { time: '16:45–17:00', title: 'Podsumowanie i zakończenie warsztatów',                          speaker: 'Wójcik, Kiedrowicz, Hoffmann' },
          ],
        },
      ],
    },
    e2024: {
      date: '3–4 października 2024',
      theme: 'Mapowanie 3D i złożone ablacje RF',
      highlights: [
        { label: '5 zabiegów na żywo',    desc: 'Re-ablacje RF po krioablacji i PFA, izolacja elektryczna LP' },
        { label: '3 ośrodki zagraniczne', desc: 'USA, Niemcy, Chiny' },
        { label: 'Certyfikacja PerClose™', desc: 'Szkolenie zamykania naczyń z certyfikatem' },
        { label: 'Wieczorne spotkanie',   desc: 'Networking w Uroczysku Zaborek' },
      ],
      speakers: [
        { title: 'dr hab. n. med.', location: 'UM Lublin / WSS Biała Podlaska' },
        { title: 'prof. dr',        location: 'St. Vincenz Hospital Paderborn / Uni Magdeburg, Niemcy' },
        { title: 'prof. dr',        location: 'Minneapolis, USA' },
        { title: 'prof. dr',        location: 'Chiny' },
        { title: 'dr n. med.',      location: 'Polska' },
        { title: 'dr hab. n. med.', location: 'Polska' },
      ],
      program: [
        {
          day: 'Czwartek 3.10.2024',
          items: [
            { time: '13:00–14:00', title: 'Rejestracja i poczęstunek',                              speaker: '' },
            { time: '14:10–14:30', title: 'Wykład: Rozwój metod ablacji RF',                        speaker: 'M. Wójcik, P. Błaszkiewicz' },
            { time: '14:30–16:00', title: 'Zabieg live: Re-ablacja RF po krioablacji',               speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
            { time: '16:00–16:30', title: 'Wykład: Low Voltage Targeted Ablation of AF',             speaker: 'Y. Huo, C. Piorkowski' },
            { time: '16:30–18:30', title: 'Zabieg live: Re-ablacja AF po PFA',                       speaker: 'O: Wójcik, Kiedrowicz, Błaszkiewicz' },
            { time: '18:30–19:30', title: 'Trudny pacjent, ciekawy zabieg... (prezentacje uczestników)', speaker: '' },
            { time: '20:00',       title: 'Wieczorne Spotkanie RF',                                  speaker: 'Uroczysko Zaborek' },
          ],
        },
        {
          day: 'Piątek 4.10.2024',
          items: [
            { time: '9:30–10:00',  title: 'Wykład: Atrial Cardiomyopathy (ESC 2024)',                        speaker: 'Prof. A. Goette' },
            { time: '10:00–12:30', title: 'Zabieg live: Izolacja elektryczna lewego przedsionka',            speaker: 'O: Wójcik, Huo, Błaszkiewicz' },
            { time: '12:30–13:00', title: 'Wykład: Left-Right Atrial Separation & LAAO',                     speaker: 'Y. Huo, C. Piorkowski' },
            { time: '13:00–14:30', title: 'Zabieg live: Ablacja atypowego AFL',                              speaker: 'O: Wójcik, Peller, Błaszkiewicz' },
            { time: '15:00–15:30', title: 'Szkolenie PerClose™ z certyfikatem',                              speaker: 'S. Wójcik' },
            { time: '15:30–17:30', title: 'Zabieg live: Re-ablacja AF po ablacji K-Chirurgicznej',           speaker: 'O: Wójcik, Kucejko, Błaszkiewicz' },
            { time: '17:30–18:30', title: 'Trudny pacjent, ciekawy zabieg...',                               speaker: '' },
          ],
        },
      ],
    },
  },

  // Edition Section
  edition: {
    thirdEdition: 'Edycja trzecia',
    secondEdition: 'Edycja druga',
    firstEdition: 'Edycja pierwsza',
    tabSpeakers: 'Prelegenci',
    tabProgram: 'Program',
    tabProgramNamed: 'Program RFtime {{edition}}',
    speakerAlt: 'prelegent RFtime',
    scheduleExpand: 'Pokaż pełny program RFtime {{edition}}',
    scheduleCollapse: 'Zwiń program RFtime {{edition}}',
    recordingsHeading: 'Nagrania z warsztatów RFtime {{edition}}',
    seeMore: 'Zobacz więcej na naszym kanale YouTube',
  },

  // Committees
  committee: {
    scientificTab: 'Komitet naukowy',
    organizingTab: 'Komitet organizacyjny',
    chair: 'Przewodniczący komitetu',
    // Same organizing committee across all editions
    organizing: [
      { name: 'Maciej Wójcik',        title: 'dr hab. n. med.' },
      { name: 'Radosław Kiedrowicz',  title: 'dr hab. n. med.' },
      { name: 'Andrzej Hoffmann',     title: 'dr n. med.' },
      { name: 'Paweł Błaszkiewicz',   title: 'dr n. med.' },
      { name: 'Sebastian Wójcik',     title: 'lek. med.' },
      { name: 'Katarzyna Makarewicz', title: 'mgr' },
    ],
  },

  // Organizer
  // Organiser differs per edition: 2024 and 2025 were run by the hospital, 2026 by Elkardia.
  // EditionSection picks the entry via its `organizerKey` prop.
  organizer: {
    label: 'Organizator',
    patronsLabel: 'Poprzedni patroni i punkty edukacyjne',
    wss: {
      name: 'Pracownia Elektrofizjologii i Elektrostymulacji Serca',
      hospital: 'Wojewódzki Szpital Specjalistyczny w Białej Podlaskiej',
      desc: 'W Pracowni EP wykonywane są zarówno ablacje proste jak i złożone ablacje arytmii nadkomorowych i komorowych z wykorzystaniem zaawansowanej technologii mapowania 3D. Jako jedna z nielicznych Pracowni EP w Polsce wykonujemy ablacje u pacjentów z burzą elektryczną.',
      logo: '/szpital-logo.webp',
    },
    elkardia: {
      name: 'Elkardia Sp. z o.o.',
      hospital: 'Lubelskie Centrum Kardiologii dla dzieci i dorosłych',
      desc: 'Pełna diagnostyka kardiologiczna na miejscu, innowacyjny sprzęt i zespół lekarzy specjalistów — dla dzieci i dorosłych. Elkardia jest organizatorem warsztatów RFtime 2026.',
      logo: '/elkardia-logo-SVG.svg',
    },
  },

  // Media
  media: {
    label: 'Media',
    heading: 'RFtime w mediach',
    intro: 'Relacje telewizyjne i prasowe z warsztatów RFtime oraz pionierskich zabiegów wykonanych przez zespół z Białej Podlaskiej.',
    tvHeading: 'W telewizji',
    pressHeading: 'W prasie',
    tvLabel: 'Materiał telewizyjny',
    watch: 'Oglądaj',
    read: 'Czytaj',
    showMore: 'Zobacz więcej',
    collapse: 'Zwiń',
    tags: {
      e2024: 'Edycja 2024',
      e2025: 'Edycja 2025',
      pfa: 'Pierwsze w Polsce',
    },
    tv: [
      { title: 'Reportaż telewizyjny z warsztatów RFtime 2025' },
      { title: 'Reportaż telewizyjny z warsztatów RFtime 2024' },
    ],
    articles: [
      { title: 'Pierwsza w Polsce ablacja najnowszym cewnikiem — najnowocześniejsze usuwanie arytmii serca' },
      { title: 'RFtime 2025 — warsztaty ablacyjne w bialskim szpitalu' },
      { title: 'Relacja z warsztatów ablacyjnych RFtime — mapowanie 3D i złożone ablacje RF' },
      { title: 'Lekarze z Białej Podlaskiej jako pierwsi w Polsce wykonali zabiegi nową technologią leczenia arytmii' },
      { title: 'Mapowanie 3D i ablacja RF — RFtime tematem konferencji w bialskim szpitalu' },
      { title: 'Pionierski zabieg w Białej Podlaskiej — przełom dla pacjentów z arytmią' },
    ],
  },

  // Registration CTA
  cta: {
    label: 'RFtime 2026 · Biała Podlaska',
    heading: 'Dołącz do RFtime 2026',
    desc: 'Udział w warsztatach bezpłatny, liczy się kolejność zgłoszeń.',
    button: 'Zgłoś uczestnictwo',
    note: 'Organizator: Elkardia Sp. z o.o.',
  },

  // 404
  notFound: {
    title: 'Nie znaleziono strony',
    message: 'Ta strona nie istnieje lub została przeniesiona. Sprawdź adres albo wróć na stronę główną.',
    home: 'Wróć na stronę główną',
  },

  // Footer
  footer: {
    tagline: 'Międzynarodowe Warsztaty Ablacyjne dla Elektrofizjologów',
    navLabel: 'Nawigacja',
    register: 'Rejestracja',
    navLinks: [
      { href: '#edycje',    label: 'Poprzednie edycje' },
      { href: '/galeria',   label: 'Galeria' },
    ],
    contactLabel: 'Kontakt',
    socialLabel: 'Social media',
    copyright: '© 2026 RFtime · Wszystkie prawa zastrzeżone',
    terms: 'Regulamin',
    privacy: 'Polityka prywatności',
    langButton: '🇬🇧 English',
  },

  // Gallery
  gallery: {
    label: 'Galeria',
    heading: 'Fotorelacja z poprzednich edycji',
    back: 'RFtime 2026',
    title: 'Galeria',
    photos: 'zdjęć',
  },
};
